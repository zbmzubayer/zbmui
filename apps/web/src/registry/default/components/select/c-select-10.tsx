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

const language = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "Go", value: "go" },
  { label: "C#", value: "csharp" },
  { label: "Ruby", value: "ruby" },
  { label: "Java", value: "java" },
  { label: "PHP", value: "php" },
];

const frontend = [
  { label: "Next.js", value: "next" },
  { label: "Tanstack Start", value: "tanstack start" },
  { label: "Astro", value: "astro" },
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

const backend = [
  { label: "Express", value: "express" },
  { label: "NestJS", value: "nestjs" },
  { label: "Hono", value: "hono" },
  { label: "Elysia", value: "elysia" },
  { label: "Gin", value: "gin" },
  { label: ".NET", value: "dotnet" },
  { label: "Django", value: "django" },
  { label: "Flask", value: "flask" },
  { label: "Spring", value: "spring" },
  { label: "Laravel", value: "laravel" },
];

export function SelectDemo() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="mb-1">Built-in scrollbars (default):</div>
        <Select aria-label="Select tech stack" items={[...placeholder, ...frontend, ...backend]}>
          <SelectTrigger className="w-64">
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            <SelectGroup>
              <SelectGroupLabel>Language</SelectGroupLabel>
              {language.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
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
      </div>
      <div>
        <div className="mb-1">Native scrollbars:</div>
        <Select aria-label="Select tech stack" items={[...placeholder, ...frontend, ...backend]}>
          <SelectTrigger className="w-64">
            <SelectValue />
          </SelectTrigger>
          <SelectPopup nativeScroll>
            <SelectGroup>
              <SelectGroupLabel>Language</SelectGroupLabel>
              {language.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
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
      </div>
    </div>
  );
}
