/**
 * Registry build script.
 *
 * Scans `src/registry/default/**`, normalizes imports, derives npm and registry
 * dependencies, validates everything against `@zbmui/registry` schemas, and emits:
 *
 *   public/r/index.json      - summaries of every published item
 *   public/r/<name>.json     - full items with inlined file contents (CLI payload)
 *   public/r/init.json       - theme CSS files + base dependencies for `zbmui init`
 *   src/registry/__index__.tsx - regenerated docs preview index (do not hand-edit)
 *
 * Run with: pnpm --filter web build:registry
 */

import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

import {
  componentsConfigSchema,
  initPayloadSchema,
  type RegistryItem,
  type RegistrySource,
  registryIndexSchema,
  registryItemSchema,
  registrySourceSchema,
} from "@zbmui/registry";

import { fixImport } from "../src/lib/registry-shared.ts";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryDir = path.join(webRoot, "src/registry/default");
const outDir = path.join(webRoot, "public/r");

/** Framework packages every consumer project already has — never auto-installed. */
const FRAMEWORK_PACKAGES = new Set(["react", "react-dom", "next"]);

/** Base dependencies installed by `zbmui init`. */
const INIT_DEPENDENCIES = [
  "@base-ui/react",
  "@tabler/icons-react",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
];

type SourceItem = RegistrySource["items"][number];

type ScannedFile = {
  /** Absolute path on disk. */
  absolutePath: string;
  /** Path relative to the web root, e.g. "src/registry/default/ui/button.tsx". */
  webPath: string;
  /** Path relative to the registry dir, e.g. "ui/button.tsx". */
  registryPath: string;
};

const errors: string[] = [];

function fail(message: string) {
  errors.push(message);
}

function npmPackageName(specifier: string) {
  const segments = specifier.split("/");
  return specifier.startsWith("@") ? segments.slice(0, 2).join("/") : (segments[0] ?? specifier);
}

/** Registry-relative import -> "@zbmui/<name>" registry dependency. */
function toRegistryDependency(specifier: string): string | null {
  if (specifier === "@/lib/cn") {
    return "@zbmui/cn";
  }

  const match = specifier.match(/^@\/registry\/default\/(ui|hooks|components)\/(.+?)(\.tsx?)?$/);
  if (!match) {
    return null;
  }

  const segments = match[2].split("/");
  // components/<category>/<name>[.<ext>] or components/<category>/<name>/<file>
  const name = match[1] === "components" ? segments[1] : segments[0];
  return name ? `@zbmui/${name}` : null;
}

function findImportSpecifiers(content: string): string[] {
  const regex = /(?:from|import)\s*(?:\(\s*)?["']([^"']+)["']/g;
  const specifiers: string[] = [];
  for (const match of content.matchAll(regex)) {
    if (match[1]) {
      specifiers.push(match[1]);
    }
  }
  return specifiers;
}

async function readSourceFile(file: ScannedFile) {
  return (await readFile(file.absolutePath, "utf8")).trim();
}

async function scanDir(dir: string, extension: string): Promise<ScannedFile[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(extension))
    .map((entry) => ({
      absolutePath: path.join(dir, entry.name),
      webPath: path.relative(webRoot, path.join(dir, entry.name)),
      registryPath: path.relative(registryDir, path.join(dir, entry.name)),
    }))
    .sort((a, b) => a.registryPath.localeCompare(b.registryPath));
}

/** components/<category>/ holds single-file items and directories (blocks). */
async function scanComponentDir(dir: string) {
  const singles: ScannedFile[] = [];
  const blocks: { name: string; category: string; files: ScannedFile[] }[] = [];

  const categories = (await readdir(dir, { withFileTypes: true })).filter((e) => e.isDirectory());
  for (const category of categories) {
    const categoryDir = path.join(dir, category.name);
    for (const entry of await readdir(categoryDir, { withFileTypes: true })) {
      const entryPath = path.join(categoryDir, entry.name);
      if (entry.isFile() && entry.name.endsWith(".tsx")) {
        singles.push({
          absolutePath: entryPath,
          webPath: path.relative(webRoot, entryPath),
          registryPath: path.relative(registryDir, entryPath),
        });
      } else if (entry.isDirectory()) {
        const files = (await readdir(entryPath))
          .filter((file) => file.endsWith(".tsx"))
          .sort()
          .map((file) => {
            const filePath = path.join(entryPath, file);
            return {
              absolutePath: filePath,
              webPath: path.relative(webRoot, filePath),
              registryPath: path.relative(registryDir, filePath),
            };
          });
        blocks.push({ name: entry.name, category: category.name, files });
      }
    }
  }

  singles.sort((a, b) => a.registryPath.localeCompare(b.registryPath));
  blocks.sort((a, b) => a.name.localeCompare(b.name));
  return { singles, blocks };
}

function defaultTarget(registryPath: string, type: RegistryItem["type"]) {
  const fileName = registryPath.split("/").pop() ?? registryPath;
  switch (type) {
    case "registry:ui":
      return `components/ui/${fileName}`;
    case "registry:hook":
      return `hooks/${fileName}`;
    case "registry:lib":
      return `lib/${fileName}`;
    default:
      return `components/${fileName}`;
  }
}

function buildDependencyInfo(
  contents: string[],
  versions: Record<string, string>,
  strict: boolean
) {
  const dependencies: Record<string, string> = {};
  const registryDependencies = new Set<string>();

  for (const content of contents) {
    for (const specifier of findImportSpecifiers(content)) {
      if (specifier.startsWith(".")) {
        continue;
      }

      const registryDependency = toRegistryDependency(specifier);
      if (registryDependency) {
        registryDependencies.add(registryDependency);
        continue;
      }

      if (specifier.startsWith("@/")) {
        if (strict) {
          fail(`Unexpected docs-app import "${specifier}" in a distributable registry file.`);
        }
        continue;
      }

      const name = npmPackageName(specifier);
      if (FRAMEWORK_PACKAGES.has(name)) {
        continue;
      }

      if (name === "@zbmui/ui") {
        // Docs-only demos may use the workspace package; published items must not.
        if (strict) {
          fail(`Distributable files must not import the workspace package "${specifier}".`);
        }
        continue;
      }

      const version = versions[name];
      if (!version) {
        if (strict) {
          fail(`npm dependency "${name}" is imported but not declared in apps/web/package.json.`);
        }
        continue;
      }
      dependencies[name] = version;
    }
  }

  return {
    dependencies,
    registryDependencies: [...registryDependencies].sort(),
  };
}

async function buildItem(options: {
  name: string;
  type: RegistryItem["type"];
  description?: string;
  categories?: string[];
  files: ScannedFile[];
  versions: Record<string, string>;
  strict?: boolean;
}): Promise<RegistryItem> {
  const { name, type, description, categories, files, versions, strict = true } = options;

  const contents: string[] = [];
  for (const file of files) {
    contents.push(await readSourceFile(file));
  }
  const { dependencies, registryDependencies } = buildDependencyInfo(contents, versions, strict);

  const item: RegistryItem = {
    name,
    type,
    ...(description ? { description } : {}),
    ...(Object.keys(dependencies).length > 0 ? { dependencies } : {}),
    ...(registryDependencies.length > 0
      ? { registryDependencies: registryDependencies.filter((dep) => dep !== `@zbmui/${name}`) }
      : {}),
    files: files.map((file, index) => ({
      path: file.registryPath,
      type,
      target: defaultTarget(file.registryPath, type),
      content: fixImport(contents[index] ?? ""),
    })),
    ...(categories ? { categories } : {}),
  };

  const result = registryItemSchema.safeParse(item);
  if (!result.success) {
    fail(`Item "${name}" failed schema validation: ${result.error.message}`);
  }
  return item;
}

function toIndexEntry(item: RegistryItem, importSpecifier: string, webPaths: string[]) {
  return {
    name: item.name,
    description: item.description ?? "",
    type: item.type,
    registryDependencies: item.registryDependencies,
    files: webPaths.map((webPath) => ({ path: webPath, type: item.type, target: "" })),
    importSpecifier,
    categories: item.categories,
  };
}

function renderIndexFile(entries: ReturnType<typeof toIndexEntry>[]) {
  const lines: string[] = [
    "// @ts-nocheck",
    "",
    "/**",
    " * GENERATED FILE — DO NOT EDIT.",
    " * Regenerate with `pnpm --filter web build:registry`.",
    " */",
    "",
    'import React from "react";',
    "",
    "export const Index: Record<string, any> = {",
  ];

  for (const entry of entries) {
    lines.push(`  ${JSON.stringify(entry.name)}: {`);
    lines.push(`    name: ${JSON.stringify(entry.name)},`);
    lines.push(`    description: ${JSON.stringify(entry.description)},`);
    lines.push(`    type: ${JSON.stringify(entry.type)},`);
    lines.push(
      `    registryDependencies: ${
        entry.registryDependencies?.length
          ? JSON.stringify(entry.registryDependencies)
          : "undefined"
      },`
    );
    lines.push(`    files: ${JSON.stringify(entry.files)},`);
    lines.push("    component: React.lazy(async () => {");
    lines.push(`      const mod = await import(${JSON.stringify(entry.importSpecifier)});`);
    lines.push("      const exportName = Object.keys(mod).find(");
    lines.push(
      '        (key) => key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")'
    );
    lines.push("      );");
    lines.push(
      "      return { default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType };"
    );
    lines.push("    }),");
    lines.push(
      `    categories: ${entry.categories?.length ? JSON.stringify(entry.categories) : "undefined"},`
    );
    lines.push("    meta: undefined,");
    lines.push("  },");
  }

  lines.push("};");
  lines.push("");
  return lines.join("\n");
}

async function main() {
  const webPackageJson = JSON.parse(await readFile(path.join(webRoot, "package.json"), "utf8"));
  const versions: Record<string, string> = {
    ...webPackageJson.dependencies,
    ...webPackageJson.devDependencies,
  };

  const source = registrySourceSchema.parse(
    JSON.parse(await readFile(path.join(webRoot, "registry.json"), "utf8"))
  );
  const sourceByName = new Map(source.items.map((item) => [item.name, item]));

  // --- Scan sources -------------------------------------------------------
  const uiFiles = await scanDir(path.join(registryDir, "ui"), ".tsx");
  const hookFiles = await scanDir(path.join(registryDir, "hooks"), ".ts");
  const { singles: demoFiles, blocks } = await scanComponentDir(
    path.join(registryDir, "components")
  );
  const { singles: formFiles, blocks: formBlocks } = await scanComponentDir(
    path.join(registryDir, "forms")
  );
  demoFiles.push(...formFiles);
  blocks.push(...formBlocks);
  demoFiles.sort((a, b) => a.registryPath.localeCompare(b.registryPath));

  // --- Coverage: every ui/hook file must be declared in registry.json -----
  const declared = new Set(
    source.items
      .filter((i) => i.type === "registry:ui" || i.type === "registry:hook")
      .map((i) => i.name)
  );
  for (const file of [...uiFiles, ...hookFiles]) {
    const name = path.basename(file.registryPath).replace(/\.tsx?$/, "");
    if (!declared.has(name)) {
      fail(`"${name}" exists on disk but is missing from registry.json.`);
    }
  }
  for (const name of declared) {
    const hasFile = [...uiFiles, ...hookFiles].some(
      (file) => path.basename(file.registryPath).replace(/\.tsx?$/, "") === name
    );
    if (!hasFile) {
      fail(`registry.json declares "${name}" but no matching file exists on disk.`);
    }
  }

  // --- Build items --------------------------------------------------------
  const publishedItems: RegistryItem[] = [];
  const indexEntries: ReturnType<typeof toIndexEntry>[] = [];

  for (const file of uiFiles) {
    const name = path.basename(file.registryPath, ".tsx");
    const meta = sourceByName.get(name) as SourceItem | undefined;
    const item = await buildItem({
      name,
      type: "registry:ui",
      description: meta?.description,
      categories: meta?.categories,
      files: [file],
      versions,
    });
    publishedItems.push(item);
    indexEntries.push(toIndexEntry(item, `@/registry/default/ui/${name}.tsx`, [file.webPath]));
  }

  for (const file of hookFiles) {
    const name = path.basename(file.registryPath, ".ts");
    const meta = sourceByName.get(name) as SourceItem | undefined;
    const item = await buildItem({
      name,
      type: "registry:hook",
      description: meta?.description,
      files: [file],
      versions,
    });
    publishedItems.push(item);
    // hooks are not renderable — no docs preview index entry.
  }

  // lib item: cn()
  const cnPath = path.join(webRoot, "src/lib/cn.ts");
  const cnContent = (await readFile(cnPath, "utf8")).trim();
  const cnItem: RegistryItem = {
    name: "cn",
    type: "registry:lib",
    description: "Utility for merging class names with tailwind-merge.",
    dependencies: buildDependencyInfo([cnContent], versions, true).dependencies,
    files: [
      {
        path: "lib/cn.ts",
        type: "registry:lib",
        target: "lib/cn.ts",
        content: cnContent,
      },
    ],
  };
  registryItemSchema.parse(cnItem);
  publishedItems.push(cnItem);

  // demos (docs previews for all; public/r JSON only for `publish: true`)
  for (const file of demoFiles) {
    const name = path.basename(file.registryPath, ".tsx");
    const category = file.registryPath.split("/")[1] ?? "";
    const meta = sourceByName.get(name) as SourceItem | undefined;
    const item = await buildItem({
      name,
      type: "registry:component",
      description: meta?.description,
      categories: [category],
      files: [file],
      versions,
      strict: meta?.publish ?? false,
    });
    if (meta?.publish) {
      publishedItems.push(item);
    }
    indexEntries.push(
      toIndexEntry(item, `@/registry/default/${file.registryPath}`, [file.webPath])
    );
  }

  for (const block of blocks) {
    const meta = sourceByName.get(block.name) as SourceItem | undefined;
    const item = await buildItem({
      name: block.name,
      type: "registry:component",
      description: meta?.description,
      categories: [block.category],
      files: block.files,
      versions,
      strict: meta?.publish ?? false,
    });
    if (meta?.publish) {
      publishedItems.push(item);
    }
    const mainFile =
      block.files.find((file) => !file.registryPath.endsWith("layout.tsx")) ?? block.files[0];
    if (mainFile) {
      const importPath = mainFile.registryPath.replace(/\.tsx$/, "");
      indexEntries.push(
        toIndexEntry(
          item,
          `@/registry/default/${importPath}`,
          block.files.map((f) => f.webPath)
        )
      );
    }
  }

  // --- init payload ---------------------------------------------------------
  // Ship the docs app's theme as the two source files, minus the tailwindcss
  // import (the CLI re-adds it in the consumer's own global CSS file).
  const INIT_CSS_FILES = ["styles.css", "colors.css"];
  const initFiles: { name: string; content: string }[] = [];
  for (const fileName of INIT_CSS_FILES) {
    const raw = await readFile(path.join(webRoot, "src/styles", fileName), "utf8");
    const content = raw.replace(/^@import "tailwindcss";\n+/, "").trim();
    if (content.includes('@import "tailwindcss"')) {
      fail(`init css file "${fileName}" must not @import tailwindcss (the CLI adds it).`);
      continue;
    }
    initFiles.push({ name: fileName, content });
  }
  const initDependencies: Record<string, string> = {};
  for (const name of INIT_DEPENDENCIES) {
    const version = versions[name];
    if (!version) {
      fail(`init dependency "${name}" is not declared in apps/web/package.json.`);
      continue;
    }
    initDependencies[name] = version;
  }
  const initPayload = initPayloadSchema.parse({
    name: "init",
    type: "registry:style",
    files: initFiles,
    dependencies: initDependencies,
  });

  // --- Validate + write -----------------------------------------------------
  const index = registryIndexSchema.parse({
    $schema: "https://ui.zubayer.dev/schema/registry.json",
    items: publishedItems.map(({ files: _files, ...item }) => item),
  });

  if (errors.length > 0) {
    console.error("Registry build failed:");
    for (const error of errors) {
      console.error(`  - ${error}`);
    }
    process.exit(1);
  }

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  await writeFile(path.join(outDir, "index.json"), `${JSON.stringify(index, null, 2)}\n`);
  await writeFile(path.join(outDir, "init.json"), `${JSON.stringify(initPayload, null, 2)}\n`);
  for (const item of publishedItems) {
    await writeFile(path.join(outDir, `${item.name}.json`), `${JSON.stringify(item, null, 2)}\n`);
  }

  // --- JSON Schemas (referenced by $schema in components.json and index.json)
  const schemaDir = path.join(webRoot, "public/schema");
  await mkdir(schemaDir, { recursive: true });
  await writeFile(
    path.join(webRoot, "public/schema.json"),
    `${JSON.stringify(z.toJSONSchema(componentsConfigSchema), null, 2)}\n`
  );
  await writeFile(
    path.join(schemaDir, "registry.json"),
    `${JSON.stringify(z.toJSONSchema(registryIndexSchema), null, 2)}\n`
  );
  await writeFile(
    path.join(schemaDir, "registry-item.json"),
    `${JSON.stringify(z.toJSONSchema(registryItemSchema), null, 2)}\n`
  );
  await writeFile(
    path.join(schemaDir, "registry-source.json"),
    `${JSON.stringify(z.toJSONSchema(registrySourceSchema), null, 2)}\n`
  );

  await writeFile(path.join(webRoot, "src/registry/__index__.tsx"), renderIndexFile(indexEntries));

  console.log(
    `Registry build complete: ${publishedItems.length} published items, ${indexEntries.length} preview entries.`
  );
}

await main();
