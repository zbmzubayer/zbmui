"use client";

import { IconSearch } from "@tabler/icons-react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/registry/default/ui/autocomplete";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
  { label: "Watermelon", value: "watermelon" },
];

const sizes = ["xs", "sm", "default", "lg", "xl"] as const;

export function AutocompleteDemo() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Autocomplete key={size} items={items}>
          <AutocompleteInput
            aria-label="Search items"
            placeholder="Search items…"
            size={size}
            startAddon={<IconSearch />}
            showClear
            showTrigger
          />
          <AutocompletePopup>
            <AutocompleteEmpty>No items found.</AutocompleteEmpty>
            <AutocompleteList>
              {(item) => (
                <AutocompleteItem key={item.value} value={item}>
                  {item.label}
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompletePopup>
        </Autocomplete>
      ))}
    </div>
  );
}
