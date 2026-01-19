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
  { label: "Astro", value: "astro", disabled: true },
];

export function SelectDemo() {
  return (
    <Select items={items}>
      <SelectTrigger className="w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {items.map(({ label, value, disabled }) => (
          <SelectItem key={value} value={value} disabled={!!disabled}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
