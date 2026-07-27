"use client";

import { Fragment } from "react";

import {
  Command,
  CommandCollection,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/default/ui/command";

export interface Item {
  value: string;
  label: string;
  shortcut?: string;
}

export interface Group {
  value: string;
  items: Item[];
}

export const suggestions: Item[] = [
  { label: "Linear", shortcut: "⌘L", value: "linear" },
  { label: "Figma", shortcut: "⌘F", value: "figma" },
  { label: "Slack", shortcut: "⌘S", value: "slack" },
];

export const commands: Item[] = [
  { label: "Clipboard History", shortcut: "⌘⇧C", value: "clipboard-history" },
  { label: "Import Extension", shortcut: "⌘I", value: "import-extension" },
  { label: "Create Snippet", shortcut: "⌘N", value: "create-snippet" },
];

export const groupedItems: Group[] = [
  { items: suggestions, value: "Suggestions" },
  { items: commands, value: "Commands" },
];

export function CommandDemo() {
  function handleItemClick(_item: Item) {
    alert(`You clicked on ${_item.label} (${_item.value})`);
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-popover">
      <Command items={groupedItems}>
        <div className="mx-2 mt-2 rounded-lg border">
          <CommandInput placeholder="Search for apps and commands..." />
        </div>
        <CommandPanel>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandList>
            {(group: Group, _index: number) => (
              <Fragment key={group.value}>
                <CommandGroup items={group.items}>
                  <CommandGroupLabel>{group.value}</CommandGroupLabel>
                  <CommandCollection>
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
                  </CommandCollection>
                </CommandGroup>
                <CommandSeparator />
              </Fragment>
            )}
          </CommandList>
        </CommandPanel>
      </Command>
    </div>
  );
}
