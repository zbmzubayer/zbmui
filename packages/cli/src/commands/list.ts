import { Command } from "commander";
import pc from "picocolors";

import { readConfig } from "../core/config.ts";
import { findProjectRoot } from "../core/project.ts";
import { createRegistryClient } from "../core/registry-client.ts";

export const listCommand = new Command("list")
  .description("List available registry items")
  .option("--json", "print the raw registry index as JSON", false)
  .option("--cwd <path>", "project directory", process.cwd())
  .option("--registry <url>", "registry URL or local directory")
  .action(async (options) => {
    // Inside an initialized project, prefer the registry from components.json.
    let registry = options.registry ?? process.env.ZBMUI_REGISTRY_URL;
    if (!registry) {
      try {
        registry = (await readConfig(await findProjectRoot(options.cwd))).registry;
      } catch {
        // Not inside a project — fall back to the default registry URL.
      }
    }
    const client = createRegistryClient({ registry });
    const index = await client.listItems();

    if (options.json) {
      console.log(JSON.stringify(index, null, 2));
      return;
    }

    const groups = new Map<string, typeof index.items>();
    for (const item of index.items) {
      const group = groups.get(item.type) ?? [];
      group.push(item);
      groups.set(item.type, group);
    }

    console.log();
    for (const [type, items] of [...groups.entries()].sort()) {
      console.log(pc.bold(type.replace("registry:", "")));
      for (const item of items) {
        const description = item.description ? pc.dim(` — ${item.description}`) : "";
        console.log(`  ${pc.green(item.name)}${description}`);
      }
      console.log();
    }
  });
