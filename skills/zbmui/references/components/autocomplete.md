# Autocomplete

An input that suggests matching options while the user types.

## Install

```bash
npx @zbmui/cli@latest add autocomplete --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/components/ui/autocomplete";
```

## Anatomy

- `Autocomplete` — root state and item collection
- `AutocompleteInput` — text input, optionally with clear and trigger controls
- `AutocompletePopup` — portal and positioner wrapper
- `AutocompleteList` — scrollable result list
- `AutocompleteItem` — selectable suggestion
- `AutocompleteEmpty` — empty result state
- `AutocompleteGroup`, `AutocompleteGroupLabel`, and `AutocompleteSeparator` organize results
- `AutocompleteStatus` supports loading or result-count text

## Example

```tsx
const frameworks = ["Astro", "Next.js", "Nuxt", "React", "Svelte", "Vue"];

<Autocomplete items={frameworks}>
  <AutocompleteInput placeholder="Search frameworks" showClear />
  <AutocompletePopup>
    <AutocompleteList>
      {(item: string) => (
        <AutocompleteItem key={item} value={item}>
          {item}
        </AutocompleteItem>
      )}
    </AutocompleteList>
    <AutocompleteEmpty>No frameworks found.</AutocompleteEmpty>
  </AutocompletePopup>
</Autocomplete>;
```

## Options

- `AutocompleteInput` supports `size`, `startAddon`, `showClear`, `showTrigger`, `inputGroupProps`, `triggerProps`, and `clearProps`.
- Use `AutocompletePrimitive`, `AutocompleteCollection`, or `useAutocompleteFilter` from installed source only when needed.
- `groupAutocompleteItems` groups objects by a `group` field.

## Accessibility

- Keep the input label or external accessible name.
- Preserve keyboard highlighting and selection behavior.
- Use `AutocompleteStatus` for async loading or empty-state announcements where appropriate.

## Pitfalls

- Do not use autocomplete when the user must choose only from a small fixed set; consider `Select`.
- Do not block input while suggestions load.
- Confirm controlled value shape in installed local source before integrating with forms.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/autocomplete.md)
- [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
