"use client";

import { useState } from "react";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "Select a framework", value: null },
  { label: "Next.js", value: "next" },
  { label: "Tanstack start", value: "tanstack start" },
  { label: "Astro", value: "astro" },
];

export function SelectDemo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-5">
      <Select
        items={items}
        value={value}
        onValueChange={(value) => setValue(value as string | null)}
      >
        <SelectTrigger className="w-64">
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {items.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
      <div>Selected value: {value ?? "null"}</div>
    </div>
  );
}
