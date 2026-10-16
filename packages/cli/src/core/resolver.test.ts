import assert from "node:assert/strict";
import { test } from "node:test";

import type { RegistryItem } from "@zbmui/registry";

import type { RegistryClient } from "./registry-client.ts";
import { resolveRegistryDependencies } from "./resolver.ts";

function fakeClient(items: Record<string, Partial<RegistryItem>>): RegistryClient {
  return {
    getItem(name: string) {
      const item = items[name];
      if (!item) {
        return Promise.reject(new Error(`not found: ${name}`));
      }
      return Promise.resolve({ type: "registry:ui", files: [], ...item, name } as RegistryItem);
    },
    getInitPayload() {
      return Promise.reject(new Error("unused"));
    },
    listItems() {
      return Promise.reject(new Error("unused"));
    },
  };
}

test("resolves dependencies once, dependencies before dependents", async () => {
  const client = fakeClient({
    command: { registryDependencies: ["popover", "input"] },
    popover: { registryDependencies: ["button"] },
    input: {},
    button: {},
  });

  const items = await resolveRegistryDependencies(["command"], client);
  assert.deepEqual(
    items.map((item) => item.name),
    ["button", "popover", "input", "command"]
  );
});

test("normalizes the @zbmui/ namespace", async () => {
  const client = fakeClient({ button: {} });
  const items = await resolveRegistryDependencies(["@zbmui/button"], client);
  assert.deepEqual(
    items.map((item) => item.name),
    ["button"]
  );
});

test("throws on circular dependencies", async () => {
  const client = fakeClient({
    a: { registryDependencies: ["b"] },
    b: { registryDependencies: ["a"] },
  });

  await assert.rejects(
    () => resolveRegistryDependencies(["a"], client),
    /Circular registry dependency: a → b → a/
  );
});

test("propagates not-found errors", async () => {
  const client = fakeClient({});
  await assert.rejects(() => resolveRegistryDependencies(["ghost"], client), /not found/);
});
