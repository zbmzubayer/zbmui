"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/default/ui/combobox";

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
  { label: "Blueberry", value: "blueberry" },
  { label: "Raspberry", value: "raspberry" },
  { label: "Blackberry", value: "blackberry" },
  { label: "Cherry", value: "cherry" },
  { label: "Papaya", value: "papaya" },
  { label: "Cantaloupe", value: "cantaloupe" },
  { label: "Honeydew", value: "honeydew" },
  { label: "Lemon", value: "lemon" },
  { label: "Lime", value: "lime" },
  { label: "Coconut", value: "coconut" },
  { label: "Pomegranate", value: "pomegranate" },
  { label: "Fig", value: "fig" },
  { label: "Date", value: "date" },
];

export function ComboboxDemo() {
  return (
    <Combobox items={items}>
      <ComboboxInput
        aria-label="Select a item"
        placeholder="Select a item…"
        inputGroupProps={{ className: "w-fit" }}
      />
      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}
