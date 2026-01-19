"use client";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { description: "Select project size", label: "Select size", value: null },
  { description: "Small size projects", label: "Small", value: "small" },
  { description: "Medium size projects", label: "Medium", value: "medium" },
  { description: "Large size projects", label: "Large", value: "large" },
  { description: "Enterprise size projects", label: "Enterprise", value: "enterprise" },
];

type Item = (typeof items)[number];

export function SelectDemo() {
  return (
    <Select
      aria-label="Select framework with command"
      defaultValue={items[0]}
      itemToStringValue={(item) => (item as Item).value ?? ""}
    >
      <SelectTrigger className="h-12 w-64">
        <SelectValue>
          {(item: Item) => (
            <span className="flex flex-col">
              <span className="truncate">{item.label}</span>
              <span className="truncate text-muted-foreground text-xs">{item.description}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            <span className="flex flex-col">
              <span className="truncate">{item.label}</span>
              <span className="truncate text-muted-foreground text-xs">{item.description}</span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
