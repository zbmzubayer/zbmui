# Toggle Group

A group of related two-state toggles with shared styling and selection state.

## Install

```bash
npx @zbmui/cli@latest add toggle-group --yes --cwd "<app-root>"
```

## Import

```tsx
import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react";

import { ToggleGroup, ToggleGroupItem, ToggleGroupSeparator } from "@/components/ui/toggle-group";
```

## Anatomy

- `ToggleGroup` — shared state, orientation, variant, and size
- `ToggleGroupItem` — one toggle
- `ToggleGroupSeparator` — visual separator between toggles
- `ToggleGroupPrimitive` — installed Base UI escape hatch

## Example

```tsx
<ToggleGroup defaultValue={["bold"]} multiple aria-label="Text formatting">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <IconBold />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <IconItalic />
  </ToggleGroupItem>
  <ToggleGroupSeparator />
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <IconUnderline />
  </ToggleGroupItem>
</ToggleGroup>
```

## Options

- `orientation="horizontal"` — default
- `orientation="vertical"`
- `variant="default"` or `variant="outline"`
- `size="sm"`, `size="default"`, or `size="lg"`
- Use Base UI `multiple` and value props for multi-selection; read installed source for controlled value shape.

## Accessibility

- Label the group and every icon-only toggle.
- Do not communicate selection through color alone.
- Keep related exclusive choices out of a multi-select toggle group.

## Pitfalls

- Do not mix unrelated toggles solely to share borders.
- Do not remove separators if the visual grouping depends on them.
- Confirm whether selection is single or multiple before wiring form state.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/toggle-group.md)
- [Base UI Toggle Group](https://base-ui.com/react/components/toggle-group)
