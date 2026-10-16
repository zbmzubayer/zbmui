import { normalizeRegistryDependency, type RegistryItem } from "@zbmui/registry";

import type { RegistryClient } from "./registry-client.ts";

/**
 * Resolve registry dependencies depth-first.
 *
 * - Each item is fetched once, even when shared between components
 *   (`command -> popover -> button` and `command -> button` installs `button` once).
 * - Dependencies come before their dependents (post-order), so files land in a
 *   sensible order.
 * - Cycles throw instead of recursing forever.
 */
export async function resolveRegistryDependencies(
  names: string[],
  client: RegistryClient
): Promise<RegistryItem[]> {
  const resolved = new Map<string, RegistryItem>();
  const visiting = new Set<string>();

  async function visit(name: string, chain: string[]): Promise<void> {
    const normalized = normalizeRegistryDependency(name);

    if (resolved.has(normalized)) {
      return;
    }
    if (visiting.has(normalized)) {
      throw new Error(`Circular registry dependency: ${[...chain, normalized].join(" → ")}`);
    }

    visiting.add(normalized);
    const item = await client.getItem(normalized);
    for (const dependency of item.registryDependencies ?? []) {
      await visit(dependency, [...chain, normalized]);
    }
    visiting.delete(normalized);
    resolved.set(normalized, item);
  }

  for (const name of names) {
    await visit(name, []);
  }

  return [...resolved.values()];
}
