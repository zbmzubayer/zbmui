"use client";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
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
];

export function ComboboxDemo() {
  return (
    <Combobox items={items} defaultValue={[items[0], items[1]]} multiple>
      <ComboboxChips className="w-64">
        <ComboboxValue>
          {(value: { label: string; value: string }[]) => (
            <>
              {value.map((item) => (
                <ComboboxChip aria-label={item.label} key={item.value}>
                  {item.label}
                </ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder={value.length > 0 ? undefined : "Select items..."} />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
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
