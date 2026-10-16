import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { type ComponentsConfig, componentsConfigSchema } from "@zbmui/registry";

export const CONFIG_FILE = "components.json";

export async function configExists(root: string): Promise<boolean> {
  try {
    await readFile(path.join(root, CONFIG_FILE), "utf8");
    return true;
  } catch {
    return false;
  }
}

export async function readConfig(root: string): Promise<ComponentsConfig> {
  let raw: string;
  try {
    raw = await readFile(path.join(root, CONFIG_FILE), "utf8");
  } catch {
    throw new Error(`No ${CONFIG_FILE} found. Run \`zbmui init\` first.`);
  }

  try {
    return componentsConfigSchema.parse(JSON.parse(raw));
  } catch (error) {
    throw new Error(
      `Invalid ${CONFIG_FILE}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

export async function writeConfig(root: string, config: ComponentsConfig): Promise<void> {
  await writeFile(path.join(root, CONFIG_FILE), `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
