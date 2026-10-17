import assert from "node:assert/strict";
import { test } from "node:test";

import type { RegistryIndexEntry, RegistryItemType } from "@zbmui/registry";

import { groupIndexItems } from "./group-items.ts";

function entry(name: string, type: RegistryItemType): RegistryIndexEntry {
  return { name, type };
}

test("groups entries by type, sorted by type and name", () => {
  const groups = groupIndexItems([
    entry("tooltip", "registry:ui"),
    entry("use-mobile", "registry:hook"),
    entry("button", "registry:ui"),
    entry("cn", "registry:lib"),
  ]);

  assert.deepEqual(
    [...groups.entries()].map(([type, items]) => [type, items.map((item) => item.name)]),
    [
      ["registry:hook", ["use-mobile"]],
      ["registry:lib", ["cn"]],
      ["registry:ui", ["button", "tooltip"]],
    ]
  );
});

test("returns an empty map for an empty index", () => {
  assert.deepEqual([...groupIndexItems([])], []);
});
