"use client";

import { useMemo, useState } from "react";

import { IconSearch } from "@tabler/icons-react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteInputGroup,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
  useAutocompleteFilter,
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

const limit = 5;

export function AutocompleteDemo() {
  const [value, setValue] = useState("");

  const { contains } = useAutocompleteFilter({ sensitivity: "base" });

  const totalMatches = useMemo(() => {
    const trimmed = value.trim();
    if (!trimmed) {
      return items.length;
    }
    return items.filter((t) => contains(t.value, trimmed)).length;
  }, [value, contains]);

  const moreCount = Math.max(0, totalMatches - limit);

  return (
    <Autocomplete items={items} limit={limit} value={value} onValueChange={setValue}>
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
        {moreCount > 0 && (
          <AutocompleteStatus>+{moreCount} more (keep typing to narrow down)</AutocompleteStatus>
        )}
      </AutocompletePopup>
    </Autocomplete>
  );
}
