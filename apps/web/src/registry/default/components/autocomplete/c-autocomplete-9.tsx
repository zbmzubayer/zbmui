"use client";

import { IconSearch } from "@tabler/icons-react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteInputGroup,
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

export function AutocompleteDemo() {
  return (
    <Autocomplete items={items}>
      <AutocompleteInputGroup className="w-64">
        <AutocompleteInput
          aria-label="Search items"
          placeholder="Search items…"
          startAddon={<IconSearch />}
        />
      </AutocompleteInputGroup>
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
  );
}
