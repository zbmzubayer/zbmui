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
  return (
    <div className="flex flex-col gap-5">
      <Select items={items}>
        <SelectTrigger size="sm" className="w-64">
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
      <Select items={items}>
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
      <Select items={items}>
        <SelectTrigger size="lg" className="w-64">
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
    </div>
  );
}
