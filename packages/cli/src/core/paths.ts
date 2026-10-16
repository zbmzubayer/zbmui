import path from "node:path";

/** Registry item names are used in URLs and file paths — keep them simple. */
const SAFE_NAME = /^[\w-]+$/;

export function assertSafeItemName(name: string): void {
  if (!SAFE_NAME.test(name)) {
    throw new Error(`Invalid component name: "${name}"`);
  }
}

/** Payloads arrive over HTTP — never let them escape the project directory. */
export function assertSafeRelativePath(filePath: string): void {
  if (path.isAbsolute(filePath) || path.win32.isAbsolute(filePath)) {
    throw new Error(`Unsafe absolute path in registry payload: "${filePath}"`);
  }
  if (filePath.split(/[\\/]/).includes("..")) {
    throw new Error(`Unsafe path traversal in registry payload: "${filePath}"`);
  }
}

export function assertWithinDirectory(root: string, target: string): void {
  const relative = path.relative(root, target);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside the project directory: "${target}"`);
  }
}
