import { Command } from "commander";
import { createPathsMatcher, getTsconfig } from "get-tsconfig";
import ora from "ora";
import pc from "picocolors";

import { readConfig } from "../core/config.ts";
import { installItem } from "../core/installer.ts";
import { detectPackageManager, installDependencies } from "../core/package-manager.ts";
import { allDependencies, findProjectRoot, readPackageJson } from "../core/project.ts";
import { createRegistryClient } from "../core/registry-client.ts";
import { resolveRegistryDependencies } from "../core/resolver.ts";

export const addCommand = new Command("add")
  .description("Add components to your project")
  .argument("[components...]", "components to install")
  .option("-a, --all", "install all available components", false)
  .option("-o, --overwrite", "overwrite existing files", false)
  .option("-y, --yes", "skip confirmation prompts (never overwrites)", false)
  .option("--cwd <path>", "project directory", process.cwd())
  .option("--registry <url>", "registry URL or local directory")
  .action(async (components: string[], options) => {
    const root = await findProjectRoot(options.cwd);
    const config = await readConfig(root);
    const client = createRegistryClient({ registry: options.registry ?? config.registry });

    let names = components;
    if (options.all) {
      const index = await client.listItems();
      names = index.items.map((item) => item.name);
    }
    if (names.length === 0) {
      throw new Error("No components specified. Pass component names or use --all.");
    }

    const spinner = ora("Resolving components...").start();
    const items = await resolveRegistryDependencies(names, client);
    spinner.succeed(
      `Resolved ${items.length} item(s): ${items.map((item) => item.name).join(", ")}`
    );

    const tsconfig = await getTsconfig(root);
    if (!tsconfig) {
      throw new Error("No tsconfig.json found. ZBM UI requires a TypeScript project.");
    }
    const matcher = createPathsMatcher(tsconfig);
    if (!matcher) {
      throw new Error(
        'No "paths" found in your tsconfig. Add e.g. "@/*": ["./src/*"] so the CLI knows where to place files.'
      );
    }

    const written: string[] = [];
    for (const item of items) {
      const paths = await installItem({
        root,
        config,
        item,
        matcher,
        options: { overwrite: options.overwrite, yes: options.yes },
      });
      written.push(...paths);
      for (const filePath of paths) {
        console.log(`${pc.green("✓")} ${filePath}`);
      }
    }

    const pkg = await readPackageJson(root);
    const installed = allDependencies(pkg);
    const toInstall = new Map<string, string>();
    for (const item of items) {
      for (const [name, version] of Object.entries(item.dependencies ?? {})) {
        if (!installed[name]) {
          toInstall.set(name, version);
        }
      }
    }

    if (toInstall.size > 0) {
      const packageManager = await detectPackageManager(root);
      const specs = [...toInstall.entries()].map(([name, version]) => `${name}@${version}`);
      console.log(pc.dim(`\nInstalling dependencies with ${packageManager}: ${specs.join(", ")}`));
      await installDependencies(root, packageManager, specs);
    }

    console.log(pc.green(`\nDone. ${written.length} file(s) written.`));
  });
