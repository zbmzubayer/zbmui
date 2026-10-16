import { access, readFile } from "node:fs/promises";
import path from "node:path";

export type PackageJson = {
  name?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

/** Walk up from `start` until a package.json is found. */
export async function findProjectRoot(start: string = process.cwd()): Promise<string> {
  let current = path.resolve(start);

  while (true) {
    if (await fileExists(path.join(current, "package.json"))) {
      return current;
    }
    const parent = path.dirname(current);
    if (parent === current) {
      throw new Error("Could not find a package.json. Run this command inside a project.");
    }
    current = parent;
  }
}

export async function readPackageJson(root: string): Promise<PackageJson> {
  return JSON.parse(await readFile(path.join(root, "package.json"), "utf8")) as PackageJson;
}

export function allDependencies(pkg: PackageJson): Record<string, string> {
  return { ...pkg.dependencies, ...pkg.devDependencies, ...pkg.peerDependencies };
}

export type Framework = "next" | "vite";

export function detectFramework(pkg: PackageJson): Framework | null {
  const deps = allDependencies(pkg);
  if (deps.next) {
    return "next";
  }
  if (deps.vite) {
    return "vite";
  }
  return null;
}

/** Major version of the installed tailwindcss spec ("^4.1.7" -> 4), or null when absent. */
export function getTailwindMajorVersion(pkg: PackageJson): number | null {
  const spec = allDependencies(pkg).tailwindcss;
  if (!spec) {
    return null;
  }
  const match = spec.match(/(\d+)/);
  return match?.[1] ? Number.parseInt(match[1], 10) : null;
}
