# Checkbox Group

A group of checkboxes with shared selection state and labeling.

## Install

```bash
npx @zbmui/cli@latest add checkbox-group --yes --cwd "<app-root>"
```

## Import

```tsx
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
```

## Anatomy

- `CheckboxGroup` — Base UI group state wrapper
- `Checkbox` — one selectable option
- `CheckboxGroupPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <FieldLabel id="features-label">Features</FieldLabel>
  <CheckboxGroup aria-labelledby="features-label" defaultValue={["analytics"]} className="gap-3">
    <div className="flex items-center gap-2">
      <Checkbox value="analytics" id="feature-analytics" />
      <FieldLabel htmlFor="feature-analytics">Analytics</FieldLabel>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox value="exports" id="feature-exports" />
      <FieldLabel htmlFor="feature-exports">Exports</FieldLabel>
    </div>
  </CheckboxGroup>
  <FieldDescription>Select the features to enable.</FieldDescription>
</Field>
```

## Options

- Use controlled or uncontrolled Base UI group state; confirm value shape in installed source.
- Combine with `Field`, `FieldLabel`, `FieldDescription`, and `FieldError` for accessible form structure.

## Accessibility

- Label the group, not only each checkbox.
- Keep labels clickable through `htmlFor`/`id` or nest controls in labels.
- Describe group requirements when selection constraints exist.

## Pitfalls

- Do not use checkbox group when only one value can be selected; use a radio-like primitive or `Select` where appropriate.
- Do not manually sync separate checkbox state when the group primitive can manage it.
- Preserve option `value` strings for form submission.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/checkbox-group.md)
- [Base UI Checkbox Group](https://base-ui.com/react/components/checkbox-group)
