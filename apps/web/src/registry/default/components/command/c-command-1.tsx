"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandShortcut,
} from "@/registry/default/ui/command";

export interface Item {
  value: string;
  label: string;
  shortcut?: string;
}

export const items: Item[] = [
  { label: "Linear", shortcut: "⌘L", value: "linear" },
  { label: "Figma", shortcut: "⌘F", value: "figma" },
  { label: "Slack", shortcut: "⌘S", value: "slack" },
  { label: "YouTube", shortcut: "⌘Y", value: "youtube" },
  { label: "Raycast", shortcut: "⌘R", value: "raycast" },
  { label: "Clipboard History", shortcut: "⌘⇧C", value: "clipboard-history" },
  { label: "Import Extension", shortcut: "⌘I", value: "import-extension" },
  { label: "Create Snippet", shortcut: "⌘N", value: "create-snippet" },
  { label: "System Preferences", shortcut: "⌘,", value: "system-preferences" },
  { label: "Window Management", shortcut: "⌘⇧W", value: "window-management" },
];

export function CommandDemo() {
  function handleItemClick(_item: Item) {
    alert(`You clicked on ${_item.label} (${_item.value})`);
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-popover">
      <Command items={items}>
        <div className="mx-2 mt-2 rounded-lg border">
          <CommandInput placeholder="Search for apps and commands..." />
        </div>
        <CommandPanel>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandList>
            {(item: Item) => (
              <CommandItem
                key={item.value}
                onClick={() => handleItemClick(item)}
                value={item.value}
              >
                <span>{item.label}</span>
                {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
              </CommandItem>
            )}
          </CommandList>
        </CommandPanel>
      </Command>
    </div>
  );
}
