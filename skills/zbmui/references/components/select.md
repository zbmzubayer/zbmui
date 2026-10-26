# Select

Displays a list of predefined options from which the user chooses one value.

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
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
```

## Anatomy

- `Select` — root state and value
- `SelectTrigger` — button that opens the list
- `SelectValue` — selected value placeholder
- `SelectPopup` — portal, positioner, list, and scroll arrows
- `SelectItem` — option
- `SelectGroup`, `SelectGroupLabel`, and `SelectSeparator` — option organization

## Example

```tsx
<Select defaultValue="system">
  <SelectTrigger aria-label="Theme">
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>
  <SelectPopup>
    <SelectGroup>
      <SelectGroupLabel>Theme</SelectGroupLabel>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectGroup>
  </SelectPopup>
</Select>
```

## Options

- Trigger sizes are `xs`, `sm`, `default`, `lg`, and `xl`.
- Popup supports `nativeScroll`, `portalProps`, and `positionerProps`.
- `SelectPositioner` supports `side`, `align`, `sideOffset`, and `alignItemWithTrigger`.
- For object values or multiple selection, use `Combobox`; confirm this Select's value support in installed source before extending it.

## Accessibility

- Label the trigger; `aria-label` is appropriate when no visible label exists.
- Keep options as text and preserve keyboard selection.
- Do not disable options without a visible explanation when the reason matters.

## Pitfalls

- Do not use Select for arbitrary application actions; use `Menu`.
- Do not add free-text search to Select; use `Combobox`.
- Do not remove the popup list wrapper; scroll arrows and positioning depend on it.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/select.md)
- [Base UI Select](https://base-ui.com/react/components/select)
