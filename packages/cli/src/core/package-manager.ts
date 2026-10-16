import path from "node:path";
import { execa } from "execa";

import { fileExists } from "./project.ts";

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

export async function detectPackageManager(root: string): Promise<PackageManager> {
  if (await fileExists(path.join(root, "pnpm-lock.yaml"))) {
    return "pnpm";
  }
  if (await fileExists(path.join(root, "package-lock.json"))) {
    return "npm";
  }
  if (await fileExists(path.join(root, "yarn.lock"))) {
    return "yarn";
  }
  if (
    (await fileExists(path.join(root, "bun.lock"))) ||
    (await fileExists(path.join(root, "bun.lockb")))
  ) {
    return "bun";
  }
  return "npm";
}

export async function installDependencies(
  root: string,
  packageManager: PackageManager,
  dependencies: string[]
): Promise<void> {
  if (dependencies.length === 0) {
    return;
  }

  const args = packageManager === "npm" ? ["install", ...dependencies] : ["add", ...dependencies];

  await execa(packageManager, args, { cwd: root, stdio: "inherit" });
}
