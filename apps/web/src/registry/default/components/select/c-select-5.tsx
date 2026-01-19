import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const placeholder = [{ label: "Select framework", value: null }];

const frontend = [
  { label: "Next.js", value: "next" },
  { label: "Tanstack Start", value: "tanstack start" },
  { label: "Astro", value: "astro" },
];

const backend = [
  { label: "Express", value: "express" },
  { label: "NestJS", value: "nestjs" },
  { label: "Hono", value: "hono" },
  { label: "Elysia", value: "elysia" },
  { label: "Gin", value: "gin" },
  { label: ".NET", value: "dotnet" },
];

export function SelectDemo() {
  return (
    <Select aria-label="Select framework" items={[...placeholder, ...frontend, ...backend]}>
      <SelectTrigger className="w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectGroupLabel>Frontend</SelectGroupLabel>
          {frontend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Backend</SelectGroupLabel>
          {backend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}
