import assert from "node:assert/strict";
import path from "node:path";
import { test } from "node:test";

import { assertSafeItemName, assertSafeRelativePath, assertWithinDirectory } from "./paths.ts";

test("assertSafeItemName accepts simple names", () => {
  assertSafeItemName("button");
  assertSafeItemName("alert-dialog");
  assertSafeItemName("c_badge_1");
});

test("assertSafeItemName rejects traversal and separators", () => {
  assert.throws(() => assertSafeItemName("../evil"), /Invalid component name/);
  assert.throws(() => assertSafeItemName("a/b"), /Invalid component name/);
  assert.throws(() => assertSafeItemName(""), /Invalid component name/);
});

test("assertSafeRelativePath accepts ordinary relative paths", () => {
  assertSafeRelativePath("components/ui/button.tsx");
  assertSafeRelativePath("button.tsx");
});

test("assertSafeRelativePath rejects traversal and absolute paths", () => {
  assert.throws(() => assertSafeRelativePath("../outside.tsx"), /traversal/);
  assert.throws(() => assertSafeRelativePath("a/../../outside.tsx"), /traversal/);
  assert.throws(() => assertSafeRelativePath("/abs/outside.tsx"), /absolute/);
  assert.throws(() => assertSafeRelativePath("C:\\\\outside.tsx"), /absolute/);
});

test("assertWithinDirectory allows nested targets and rejects escapes", () => {
  const root = path.resolve("/project");
  assertWithinDirectory(root, path.join(root, "src/components/button.tsx"));
  assert.throws(
    () => assertWithinDirectory(root, path.resolve("/elsewhere/button.tsx")),
    /outside the project/
  );
});
