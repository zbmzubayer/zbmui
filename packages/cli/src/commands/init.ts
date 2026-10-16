import path from "node:path";
import { Command } from "commander";
import { createPathsMatcher, getTsconfig } from "get-tsconfig";
import pc from "picocolors";

import { confirm, input } from "@inquirer/prompts";

import { type ComponentsConfig, DEFAULT_REGISTRY_URL } from "@zbmui/registry";

import { configExists, writeConfig } from "../core/config.ts";
import { installItem } from "../core/installer.ts";
import { detectPackageManager, installDependencies } from "../core/package-manager.ts";
import {
  allDependencies,
  detectFramework,
  fileExists,
  findProjectRoot,
  getTailwindMajorVersion,
  readPackageJson,
} from "../core/project.ts";
import { createRegistryClient } from "../core/registry-client.ts";
import { injectThemeImports, resolveThemeDir, writeThemeFiles } from "../core/theme.ts";

export const initCommand = new Command("init")
  .description("Initialize ZBM UI in an existing project")
  .option("-y, --yes", "use default configuration without prompting", false)
  .option("--cwd <path>", "project directory", process.cwd())
  .option("--registry <url>", "registry URL or local directory")
  .action(async (options) => {
    const root = await findProjectRoot(options.cwd);
    const pkg = await readPackageJson(root);

    const framework = detectFramework(pkg);
    if (!framework) {
      throw new Error("Could not detect a supported framework. Supported: Next.js, Vite.");
    }

    const tailwindMajor = getTailwindMajorVersion(pkg);
    if (tailwindMajor !== 4) {
      throw new Error(
        "ZBM UI requires Tailwind CSS v4 (CSS-first configuration). " +
          (tailwindMajor ? `Detected v${tailwindMajor}.` : "No tailwindcss dependency found.")
      );
    }

    const tsconfig = await getTsconfig(root);
    const matcher = tsconfig ? createPathsMatcher(tsconfig) : null;
    if (!matcher?.("@/components")?.[0]) {
      throw new Error(
        'Could not resolve the "@/*" alias via your tsconfig "paths".\n' +
          'Add e.g. "baseUrl": ".", "paths": { "@/*": ["./src/*"] } and re-run init.'
      );
    }

    if (await configExists(root)) {
      if (options.yes) {
        throw new Error("components.json already exists — this project is already initialized.");
      }
      const overwrite = await confirm({
        message: "components.json already exists. Overwrite?",
        default: false,
      });
      if (!overwrite) {
        console.log("Aborted.");
        return;
      }
    }

    const hasSrcDir = await fileExists(path.join(root, "src"));
    // Resolve before any files are written — installing cn() creates src/,
    // which would wrongly flip the no-src projects into the src/ layout.
    const themeDir = await resolveThemeDir(root);
    const defaultCss =
      framework === "next"
        ? hasSrcDir
          ? "src/app/globals.css"
          : "app/globals.css"
        : "src/index.css";
    const defaultAliases = {
      components: "@/components",
      ui: "@/components/ui",
      hooks: "@/hooks",
      lib: "@/lib",
    };

    let css = defaultCss;
    let aliases = defaultAliases;
    if (!options.yes) {
      css = await input({ message: "Where is your global CSS file?", default: defaultCss });
      aliases = {
        components: await input({
          message: "Components alias?",
          default: defaultAliases.components,
        }),
        ui: await input({ message: "UI components alias?", default: defaultAliases.ui }),
        hooks: await input({ message: "Hooks alias?", default: defaultAliases.hooks }),
        lib: await input({ message: "Lib/utils alias?", default: defaultAliases.lib }),
      };
    }

    const config: ComponentsConfig = {
      $schema: "https://ui.zubayer.dev/schema.json",
      rsc: framework === "next",
      tsx: true,
      tailwind: { css },
      aliases,
      registry: options.registry ?? process.env.ZBMUI_REGISTRY_URL ?? DEFAULT_REGISTRY_URL,
    };

    const client = createRegistryClient({ registry: config.registry });
    const [initPayload, cnItem] = await Promise.all([
      client.getInitPayload(),
      client.getItem("cn"),
    ]);

    const written = await installItem({
      root,
      config,
      item: cnItem,
      matcher,
      options: { overwrite: true, yes: true },
    });

    const cssAbs = path.join(root, css);
    const writtenCss = await writeThemeFiles(root, themeDir, initPayload.files);
    // Import paths must be relative to the global CSS file, not the project root.
    const importBase = path.relative(path.dirname(cssAbs), themeDir).split(path.sep).join("/");
    const importPrefix = importBase.startsWith(".") ? importBase : `./${importBase}`;
    const themeResult = await injectThemeImports(
      cssAbs,
      initPayload.files.map((file) => `${importPrefix}/${file.name}`)
    );
    await writeConfig(root, config);

    const installed = allDependencies(pkg);
    const toInstall = Object.entries(initPayload.dependencies)
      .filter(([name]) => !installed[name])
      .map(([name, version]) => `${name}@${version}`);
    if (toInstall.length > 0) {
      const packageManager = await detectPackageManager(root);
      console.log(pc.dim(`Installing base dependencies with ${packageManager}...`));
      await installDependencies(root, packageManager, toInstall);
    }

    console.log(pc.green("\n✓ ZBM UI initialized."));
    if (written.length > 0) {
      console.log(`  utils: ${written.join(", ")}`);
    }
    for (const file of writtenCss) {
      console.log(`${pc.green("✓")} ${file}`);
    }
    console.log(`  theme: ${themeResult} ${css}`);
    console.log(`  config: components.json`);
    console.log(pc.dim("\nNext: npx @zbmui/cli add button"));
  });
