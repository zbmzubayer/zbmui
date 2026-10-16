#!/usr/bin/env node

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "commander";

import { addCommand } from "./commands/add.ts";
import { initCommand } from "./commands/init.ts";
import { listCommand } from "./commands/list.ts";

const packageJsonPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "../package.json");
const { version } = JSON.parse(readFileSync(packageJsonPath, "utf8")) as { version: string };

const program = new Command();

program.name("zbmui").description("CLI for installing ZBM UI components").version(version);

program.addCommand(initCommand);
program.addCommand(addCommand);
program.addCommand(listCommand);

program.parseAsync().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
