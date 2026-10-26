# Combobox

Combines a text input with a filterable list and supports single or multiple selection.

## Install

```bash
npx @zbmui/cli@latest add combobox --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/components/ui/combobox";
```

## Anatomy

- `Combobox` — generic root state and item collection
- `ComboboxInput` — input with optional trigger, clear control, addon, and size options
- `ComboboxPopup` — portal and positioner wrapper
- `ComboboxList` — scrollable results
- `ComboboxItem` — selectable option with indicator
- `ComboboxEmpty` — no-results state
- `ComboboxGroup`, `ComboboxGroupLabel`, and `ComboboxSeparator` organize options
- `ComboboxStatus` communicates loading or counts
- Chips parts support multiple selection

## Example

```tsx
const frameworks = ["Astro", "Next.js", "Nuxt", "React", "Svelte", "Vue"];

<Combobox items={frameworks} itemToStringValue={(item) => item}>
  <ComboboxInput placeholder="Select a framework" showClear />
  <ComboboxPopup>
    <ComboboxList>
      {(item: string) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
    <ComboboxEmpty>No framework found.</ComboboxEmpty>
  </ComboboxPopup>
</Combobox>;
```

## Options

- `ComboboxInput` supports `size`, `startAddon`, `showTrigger`, `showClear`, `inputGroupProps`, `triggerProps`, and `clearProps`.
- `ComboboxItem` supports `indicatorPosition="start" | "end"`.
- For multiple values, use `ComboboxChips`, `ComboboxChipsInput`, `ComboboxChip`, and `ComboboxChipRemove`; confirm controlled value shape in installed source.
- `ComboboxCollection`, `useComboboxFilter`, and `groupComboboxItems` support advanced filtering and grouping.

## Accessibility

- Label the input.
- Keep result highlighting and item indicators available to keyboard and assistive technology.
- Use `ComboboxStatus` for async result states rather than leaving the input silent.

## Pitfalls

- Do not use a combobox when options are few and non-searchable; use `Select`.
- Do not assume single and multiple values have the same shape.
- Do not remove the popup portal/positioner layers; they anchor and size the list.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/combobox.md)
- [Base UI Combobox](https://base-ui.com/react/components/combobox)
