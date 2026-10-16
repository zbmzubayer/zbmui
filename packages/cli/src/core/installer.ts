import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { confirm } from "@inquirer/prompts";

import type { ComponentsConfig, RegistryFile, RegistryItem } from "@zbmui/registry";

import { assertSafeRelativePath, assertWithinDirectory } from "./paths.ts";
import { fileExists } from "./project.ts";
import { rewriteImports } from "./transform.ts";

export type InstallOptions = {
  overwrite: boolean;
  yes: boolean;
};

export type PathsMatcher = (specifier: string) => string[] | null;

type Aliases = ComponentsConfig["aliases"];

function aliasDirForType(type: RegistryFile["type"], aliases: Aliases): string {
  switch (type) {
    case "registry:ui":
      return aliases.ui;
    case "registry:hook":
      return aliases.hooks;
    case "registry:lib":
      return aliases.lib;
    default:
      return aliases.components;
  }
}

/** Conventional target prefix per file type, stripped before joining onto the alias dir. */
function conventionalPrefix(type: RegistryFile["type"]): string {
  switch (type) {
    case "registry:ui":
      return "components/ui/";
    case "registry:hook":
      return "hooks/";
    case "registry:lib":
      return "lib/";
    default:
      return "components/";
  }
}

/**
 * Compute the absolute install path for a registry file. The target's
 * conventional prefix ("components/ui/" etc.) is replaced by the consumer's
 * alias directory, preserving any nested subpath below it.
 */
export function resolveFileTarget(args: {
  root: string;
  config: ComponentsConfig;
  file: RegistryFile;
  matcher: PathsMatcher;
}): string {
  const { root, config, file, matcher } = args;

  const rawTarget = file.target ?? file.path;
  assertSafeRelativePath(rawTarget);

  const prefix = conventionalPrefix(file.type);
  const subpath = rawTarget.startsWith(prefix)
    ? rawTarget.slice(prefix.length)
    : path.posix.basename(rawTarget);
  assertSafeRelativePath(subpath);

  const aliasDir = aliasDirForType(file.type, config.aliases);
  const resolved = matcher(aliasDir)?.[0];
  if (!resolved) {
    throw new Error(
      `Could not resolve the alias "${aliasDir}" using your tsconfig "paths". ` +
        'Add a matching paths entry (e.g. "@/*": ["./src/*"]) or update the aliases in components.json.'
    );
  }

  const target = path.join(resolved, subpath);
  assertWithinDirectory(root, target);
  return target;
}

export async function installItem(args: {
  root: string;
  config: ComponentsConfig;
  item: RegistryItem;
  matcher: PathsMatcher;
  options: InstallOptions;
}): Promise<string[]> {
  const { root, config, item, matcher, options } = args;
  const written: string[] = [];

  for (const file of item.files) {
    const target = resolveFileTarget({ root, config, file, matcher });

    if (!options.overwrite && (await fileExists(target))) {
      // CLI-managed utils (lib/cn.ts) are installed once by `init`; silently
      // skip them so `add` never prompts about its own infrastructure.
      if (file.type === "registry:lib") {
        continue;
      }
      // --yes never overwrites implicitly; that requires --overwrite.
      if (options.yes) {
        continue;
      }
      const shouldOverwrite = await confirm({
        message: `${path.relative(root, target)} already exists. Overwrite?`,
        default: false,
      });
      if (!shouldOverwrite) {
        continue;
      }
    }

    const content = rewriteImports(file.content ?? "", config.aliases);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content, "utf8");
    written.push(path.relative(root, target));
  }

  return written;
}
