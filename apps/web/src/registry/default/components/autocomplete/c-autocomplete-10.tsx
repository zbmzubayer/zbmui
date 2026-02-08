"use client";

import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  groupAutocompleteItems,
} from "@/registry/default/ui/autocomplete";

type Item = {
  label: string;
  value: string;
  group: string;
};

const items: Item[] = [
  { label: "React", value: "react", group: "Frontend" },
  { label: "Vue", value: "vue", group: "Frontend" },
  { label: "Angular", value: "angular", group: "Frontend" },
  { label: "Svelte", value: "svelte", group: "Frontend" },
  { label: "Next.js", value: "nextjs", group: "Frontend" },
  { label: "Nuxt.js", value: "nuxtjs", group: "Frontend" },

  { label: "Node.js", value: "nodejs", group: "Backend" },
  { label: "Django", value: "django", group: "Backend" },
  { label: "Flask", value: "flask", group: "Backend" },
  { label: "Ruby on Rails", value: "rails", group: "Backend" },
  { label: "Spring Boot", value: "springboot", group: "Backend" },

  { label: "Flutter", value: "flutter", group: "Mobile" },
  { label: "React Native", value: "reactnative", group: "Mobile" },
  { label: "SwiftUI", value: "swiftui", group: "Mobile" },
  { label: "Kotlin Multiplatform", value: "kotlinmultiplatform", group: "Mobile" },
];

const groupedItems = groupAutocompleteItems(items);

type GroupItem = (typeof groupedItems)[number];

export function AutocompleteDemo() {
  return (
    <Autocomplete items={groupedItems}>
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search frameworks..."
        showTrigger
        showClear
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(group: GroupItem) => (
            <AutocompleteGroup key={group.value} items={group.items}>
              <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
              <AutocompleteCollection>
                {(item: Item) => (
                  <AutocompleteItem key={item.value} value={item.value}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteCollection>
            </AutocompleteGroup>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
