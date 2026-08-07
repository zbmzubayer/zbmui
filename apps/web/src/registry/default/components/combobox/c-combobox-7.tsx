"use client";

import {
  Combobox,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  groupComboboxItems,
} from "@/registry/default/ui/combobox";

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

const groupedItems = groupComboboxItems(items);

type GroupItem = (typeof groupedItems)[number];

export function ComboboxDemo() {
  return (
    <Combobox items={groupedItems}>
      <ComboboxInput
        aria-label="Select a item"
        placeholder="Select a item…"
        inputGroupProps={{ className: "w-fit" }}
      />
      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(group: GroupItem) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
              <ComboboxCollection>
                {(item: Item) => (
                  <ComboboxItem key={item.value} value={item}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}
