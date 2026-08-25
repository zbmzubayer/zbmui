"use client";

import {
  IconBrandAngular,
  IconBrandReact,
  IconBrandSolidjs,
  IconBrandVue,
  IconPackage,
} from "@tabler/icons-react";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { icon: IconPackage, label: "Select library", value: null },
  { icon: IconBrandReact, label: "React", value: "react" },
  { icon: IconBrandAngular, label: "Angular", value: "angular" },
  { icon: IconBrandSolidjs, label: "SolidJS", value: "solidjs" },
  { icon: IconBrandVue, label: "Vue", value: "vue" },
] as const;

type Item = (typeof items)[number];

export function SelectDemo() {
  return (
    <Select
      aria-label="Select category"
      defaultValue={items[0]}
      itemToStringValue={(item) => item.value ?? ""}
    >
      <SelectTrigger className="w-64">
        <SelectValue>
          {(item: Item) => (
            <span className="flex items-center gap-2">
              <item.icon />
              <span className="truncate">{item.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            <span className="flex items-center gap-2">
              <item.icon />
              <span className="truncate">{item.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
