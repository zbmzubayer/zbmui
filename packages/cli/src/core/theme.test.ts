import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";

import { injectThemeImports, resolveThemeDir, writeThemeFiles } from "../core/theme.ts";

const IMPORTS = ["../styles/styles.css", "../styles/colors.css"];

test("creates a missing css file with the tailwind import and theme block", async () => {
  const dir = await mkdtemp(path.join(tmpdir(), "zbmui-init-"));
  const cssPath = path.join(dir, "src/app/globals.css");

  const result = await injectThemeImports(cssPath, IMPORTS);

  assert.equal(result, "created");
  const content = await readFile(cssPath, "utf8");
  assert.ok(content.startsWith('@import "tailwindcss";'));
  assert.ok(
    content.includes(
      '/* zbmui-theme:start */\n@import "../styles/styles.css";\n@import "../styles/colors.css";\n/* zbmui-theme:end */'
    )
  );
});

test("prepends the theme block to an existing css file, keeping its content", async () => {
  const dir = await mkdtemp(path.join(tmpdir(), "zbmui-init-"));
  const cssPath = path.join(dir, "src/app/globals.css");
  await mkdir(path.dirname(cssPath), { recursive: true });
  await writeFile(cssPath, '@import "tailwindcss";\n\nbody { margin: 0; }\n');

  const result = await injectThemeImports(cssPath, IMPORTS);

  assert.equal(result, "injected");
  const content = await readFile(cssPath, "utf8");
  const tailwindImport = content.indexOf('@import "tailwindcss";');
  const firstThemeImport = content.indexOf('@import "../styles/styles.css";');
  const bodyRule = content.indexOf("body {");
  assert.ok(tailwindImport !== -1);
  assert.ok(firstThemeImport !== -1);
  assert.ok(bodyRule !== -1);
  // order: tailwindcss import → theme block → the rest of the file
  assert.ok(tailwindImport < firstThemeImport);
  assert.ok(firstThemeImport < bodyRule);
  assert.ok(content.includes("body { margin: 0; }"));
});

test("skips when the theme block is already present", async () => {
  const dir = await mkdtemp(path.join(tmpdir(), "zbmui-init-"));
  const cssPath = path.join(dir, "globals.css");
  await writeFile(cssPath, "/* zbmui-theme:start */\n/* zbmui-theme:end */\nbody {}\n");

  const result = await injectThemeImports(cssPath, IMPORTS);

  assert.equal(result, "skipped");
  assert.equal(
    await readFile(cssPath, "utf8"),
    "/* zbmui-theme:start */\n/* zbmui-theme:end */\nbody {}\n"
  );
});

test("adds the tailwind import when injecting into a file that lacks it", async () => {
  const dir = await mkdtemp(path.join(tmpdir(), "zbmui-init-"));
  const cssPath = path.join(dir, "globals.css");
  await writeFile(cssPath, "body { margin: 0; }\n");

  const result = await injectThemeImports(cssPath, IMPORTS);

  assert.equal(result, "injected");
  const content = await readFile(cssPath, "utf8");
  assert.ok(content.startsWith('@import "tailwindcss";\n\n/* zbmui-theme:start */'));
});

test("writeThemeFiles writes into the given theme folder and skips existing files", async () => {
  const dir = await mkdtemp(path.join(tmpdir(), "zbmui-init-"));
  const themeDir = path.join(dir, "src/styles");
  const files = [
    { name: "styles.css", content: "/* theme */" },
    { name: "colors.css", content: "/* palette */" },
  ];

  const written = await writeThemeFiles(dir, themeDir, files);

  assert.deepEqual(written, ["src/styles/styles.css", "src/styles/colors.css"]);
  assert.equal(await readFile(path.join(themeDir, "styles.css"), "utf8"), "/* theme */\n");

  // second run leaves user-owned files untouched
  await writeFile(path.join(themeDir, "styles.css"), "/* customized */\n");
  const again = await writeThemeFiles(dir, themeDir, files);
  assert.deepEqual(again, []);
  assert.equal(await readFile(path.join(themeDir, "styles.css"), "utf8"), "/* customized */\n");
});

test("resolveThemeDir prefers src/styles and falls back to root styles", async () => {
  const withSrc = await mkdtemp(path.join(tmpdir(), "zbmui-init-"));
  await mkdir(path.join(withSrc, "src"), { recursive: true });
  assert.equal(await resolveThemeDir(withSrc), path.join(withSrc, "src", "styles"));

  const withoutSrc = await mkdtemp(path.join(tmpdir(), "zbmui-init-"));
  assert.equal(await resolveThemeDir(withoutSrc), path.join(withoutSrc, "styles"));
});
