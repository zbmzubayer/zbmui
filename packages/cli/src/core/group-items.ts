import type { RegistryIndexEntry } from "@zbmui/registry";

/**
 * Group registry index entries by type, with both the groups and the items
 * inside each group sorted alphabetically. Used by the `list` command.
 */
export function groupIndexItems(items: RegistryIndexEntry[]): Map<string, RegistryIndexEntry[]> {
  const groups = new Map<string, RegistryIndexEntry[]>();
  for (const item of items) {
    const group = groups.get(item.type) ?? [];
    group.push(item);
    groups.set(item.type, group);
  }

  const sorted = new Map<string, RegistryIndexEntry[]>();
  for (const [type, group] of [...groups.entries()].sort(([a], [b]) => compare(a, b))) {
    sorted.set(
      type,
      [...group].sort((a, b) => compare(a.name, b.name))
    );
  }
  return sorted;
}

function compare(a: string, b: string): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
