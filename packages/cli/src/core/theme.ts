import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import type { InitFile } from "@zbmui/registry";

import { fileExists } from "./project.ts";

const THEME_START = "/* zbmui-theme:start */";
const THEME_END = "/* zbmui-theme:end */";

/**
 * Where the theme CSS files live in the consumer project: `src/styles/` when
 * the project has a `src` directory (the Next.js convention), otherwise a
 * root-level `styles/` folder.
 */
export async function resolveThemeDir(root: string): Promise<string> {
  return (await fileExists(path.join(root, "src")))
    ? path.join(root, "src", "styles")
    : path.join(root, "styles");
}

/**
 * Write the registry's theme CSS files into the theme folder. Existing files
 * are left untouched — after init they are user-owned.
 */
export async function writeThemeFiles(
  root: string,
  themeDir: string,
  files: InitFile[]
): Promise<string[]> {
  const written: string[] = [];
  for (const file of files) {
    const target = path.join(themeDir, file.name);
    if (await fileExists(target)) {
      continue;
    }
    await mkdir(themeDir, { recursive: true });
    await writeFile(target, `${file.content}\n`, "utf8");
    written.push(path.relative(root, target));
  }
  return written;
}

/**
 * Wire the theme files into the consumer's global CSS with a marked block of
 * @import lines. @import must precede all other rules, so the block is
 * prepended; idempotent via the markers.
 */
export async function injectThemeImports(
  cssPath: string,
  importPaths: string[]
): Promise<"created" | "injected" | "skipped"> {
  const block = `${THEME_START}\n${importPaths.map((p) => `@import "${p}";`).join("\n")}\n${THEME_END}\n`;

  if (!(await fileExists(cssPath))) {
    await mkdir(path.dirname(cssPath), { recursive: true });
    await writeFile(cssPath, `@import "tailwindcss";\n\n${block}`, "utf8");
    return "created";
  }

  let content = await readFile(cssPath, "utf8");
  if (content.includes(THEME_START)) {
    return "skipped";
  }

  // The tailwindcss import must lead the file; the theme block follows it.
  if (!content.includes('@import "tailwindcss"')) {
    content = `@import "tailwindcss";\n\n${content.trimStart()}`;
  }
  const tailwind = '@import "tailwindcss";';
  const at = content.indexOf(tailwind) + tailwind.length;
  const rest = content.slice(at).replace(/^\n+/, "\n");
  await writeFile(cssPath, `${content.slice(0, at)}\n\n${block}${rest}`, "utf8");
  return "injected";
}
