import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";

import type { ComponentsConfig, RegistryItem } from "@zbmui/registry";

import { installItem } from "./installer.ts";

const config: ComponentsConfig = {
  rsc: true,
  tsx: true,
  tailwind: { css: "src/app/globals.css" },
  aliases: {
    components: "@/components",
    ui: "@/components/ui",
    hooks: "@/hooks",
    lib: "@/lib",
  },
  registry: "http://localhost:8999/r",
};

function matcherFor(root: string) {
  const dirs = new Map<string, string>([
    ["@/components", path.join(root, "src/components")],
    ["@/components/ui", path.join(root, "src/components/ui")],
    ["@/hooks", path.join(root, "src/hooks")],
    ["@/lib", path.join(root, "src/lib")],
  ]);
  return (specifier: string) => {
    const dir = dirs.get(specifier);
    return dir ? [dir] : null;
  };
}

const cnItem: RegistryItem = {
  name: "cn",
  type: "registry:lib",
  files: [
    {
      path: "lib/cn.ts",
      type: "registry:lib",
      target: "lib/cn.ts",
      content: "export function cn() {}\n",
    },
  ],
};

const buttonItem: RegistryItem = {
  name: "button",
  type: "registry:ui",
  files: [
    {
      path: "ui/button.tsx",
      type: "registry:ui",
      target: "components/ui/button.tsx",
      content: "export function Button() {}\n",
    },
  ],
};

async function makeConsumer() {
  const root = await mkdtemp(path.join(tmpdir(), "zbmui-installer-"));
  await mkdir(path.join(root, "src/lib"), { recursive: true });
  await mkdir(path.join(root, "src/components/ui"), { recursive: true });
  return { root, matcher: matcherFor(root) };
}

test("existing registry:lib files are skipped silently without --yes", async () => {
  const { root, matcher } = await makeConsumer();
  await writeFile(path.join(root, "src/lib/cn.ts"), "// user-owned\n");

  const written = await installItem({
    root,
    config,
    item: cnItem,
    matcher,
    options: { overwrite: false, yes: false },
  });

  assert.deepEqual(written, []);
  assert.equal(await readFile(path.join(root, "src/lib/cn.ts"), "utf8"), "// user-owned\n");
});

test("--overwrite still replaces registry:lib files", async () => {
  const { root, matcher } = await makeConsumer();
  await writeFile(path.join(root, "src/lib/cn.ts"), "// stale\n");

  const written = await installItem({
    root,
    config,
    item: cnItem,
    matcher,
    options: { overwrite: true, yes: false },
  });

  assert.deepEqual(written, ["src/lib/cn.ts"]);
  assert.equal(
    await readFile(path.join(root, "src/lib/cn.ts"), "utf8"),
    "export function cn() {}\n"
  );
});

test("missing registry:lib files are still written", async () => {
  const { root, matcher } = await makeConsumer();

  const written = await installItem({
    root,
    config,
    item: cnItem,
    matcher,
    options: { overwrite: false, yes: false },
  });

  assert.deepEqual(written, ["src/lib/cn.ts"]);
});

test("--yes skips existing component files without overwriting", async () => {
  const { root, matcher } = await makeConsumer();
  await writeFile(path.join(root, "src/components/ui/button.tsx"), "// customized\n");

  const written = await installItem({
    root,
    config,
    item: buttonItem,
    matcher,
    options: { overwrite: false, yes: true },
  });

  assert.deepEqual(written, []);
  assert.equal(
    await readFile(path.join(root, "src/components/ui/button.tsx"), "utf8"),
    "// customized\n"
  );
});
