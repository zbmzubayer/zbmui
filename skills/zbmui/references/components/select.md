# Select

Displays a list of predefined options from which the user chooses one value, or several values in multiple mode.

## Install

```bash
npx @zbmui/cli@latest add select --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
```

## Anatomy

- `Select` — root state: `items`, `value`, `defaultValue`, `name`, `disabled`, `required`. It renders no wrapper element, only a hidden input for form submission and validation.
- `SelectLabel` — visible label for the field; it names the trigger. Place it inside `Select`.
- `SelectTrigger` — the button that opens the list. `size` and `aria-label` go here.
- `SelectValue` — shows the selected item's label or a `placeholder`; accepts a render function.
- `SelectPopup` — portal, positioner, scroll arrows, and list. Items go inside it.
- `SelectItem` — one option.
- `SelectGroup`, `SelectGroupLabel`, `SelectSeparator` — headings and dividers inside the popup. `SelectGroupLabel` is not the field's label; use `SelectLabel` for that.
- `SelectPrimitive` — installed Base UI escape hatch.

## Example

```tsx
const themes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

<Select items={themes} defaultValue="system">
  <SelectLabel>Theme</SelectLabel>
  <SelectTrigger className="w-64">
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>
  <SelectPopup>
    {themes.map((theme) => (
      <SelectItem key={theme.value} value={theme.value}>
        {theme.label}
      </SelectItem>
    ))}
  </SelectPopup>
</Select>;
```

Groups with a separator:

```tsx
<SelectPopup>
  <SelectGroup>
    <SelectGroupLabel>Frontend</SelectGroupLabel>
    <SelectItem value="next">Next.js</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectGroup>
    <SelectGroupLabel>Backend</SelectGroupLabel>
    <SelectItem value="express">Express</SelectItem>
  </SelectGroup>
</SelectPopup>
```

Controlled (requires a client component in Next.js App Router):

```tsx
const [theme, setTheme] = useState<string | null>(null);

<Select items={themes} value={theme} onValueChange={(value) => setTheme(value as string | null)}>
  {/* trigger and popup */}
</Select>;
```

## Options

- `SelectTrigger` sizes are `xs`, `sm`, `default`, `lg`, and `xl`.
- `items` is a list of `{ label, value }` objects. Pass it to the root. Without it, `SelectValue` shows the raw value instead of the item's label.
- A `value: null` item appears in the list. Use it when the first row should read as a prompt.
- `SelectPopup` accepts `nativeScroll` (hides the scroll arrows), `portalProps`, and `positionerProps`.
- `positionerProps` passes to the positioner: `side`, `align`, `sideOffset`, and `alignItemWithTrigger`. Use `positionerProps={{ alignItemWithTrigger: true }}` to align the list with the selected item.
- `multiple` on the root makes `value` an array. Pass a render function to `SelectValue` to summarize the selection.
- Object values need `itemToStringValue` for serialization and a `SelectValue` render function to show the item. Use `isItemEqualToValue` when item references differ.
- `disabled` on the root disables the whole field. `disabled` on `SelectItem` disables one option.
- Choose `Combobox` when the user needs text filtering or free-text input.

## Forms

- `name` on the root submits the selected value through a hidden input.
- In `multiple` mode, each selected value submits under the same `name`.
- `required` on the root applies to the trigger.

## Accessibility

- Label the field with `SelectLabel` inside `Select`. That label names the trigger.
- With no visible label, put `aria-label` on `SelectTrigger`. Do not put it on `Select`: the root ignores it.
- A placeholder or the selected value is not a label. A trigger that shows only a placeholder has no accessible name.
- Explain why an option is disabled when the reason matters.
- Keep option text as plain text so it can be announced.

## Pitfalls

- Do not set `aria-label` on `Select`. Put it on `SelectTrigger`, or use `SelectLabel`.
- Do not omit `items` when labels differ from values or when values are objects.
- Do not use Select for arbitrary application actions; use `Menu`.
- Do not add free-text search to Select; use `Combobox`.
- Keep `SelectItem` and `SelectGroup` inside `SelectPopup`. The popup supplies the portal, positioning, and scroll arrows.
- Do not use `SelectGroupLabel` as the field's label. It is a heading inside the list.
- For controlled state, use `null` for no selection. Cast the `onValueChange` value to your state type.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/select)
- [Base UI Select](https://base-ui.com/react/components/select)
