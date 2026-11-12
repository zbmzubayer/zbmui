# Checkbox Group

A set of checkboxes that share selection state through an array of values.

## Install

```bash
npx @zbmui/cli@latest add checkbox-group --yes --cwd "<app-root>"
```

## Import

```tsx
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
```

## Anatomy

- `CheckboxGroup` — a `div` with `role="group"` that owns the selected `string[]`
- `Checkbox` — one option; its `value` identifies it within the group
- `Checkbox parent` — a select-all control; the group needs `allValues` for it to work
- `Label` — wraps the checkbox and its text so the text toggles the option
- `CheckboxGroupPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <FieldLabel id="features-label">Features</FieldLabel>
  <CheckboxGroup aria-labelledby="features-label" defaultValue={["analytics"]}>
    <Label>
      <Checkbox value="analytics" />
      Analytics
    </Label>
    <Label>
      <Checkbox value="exports" />
      Exports
    </Label>
  </CheckboxGroup>
  <FieldDescription>Select the features to enable.</FieldDescription>
</Field>
```

Controlled (requires a client component in Next.js App Router):

```tsx
const [features, setFeatures] = useState<string[]>(["analytics"]);

<CheckboxGroup aria-labelledby="features-label" value={features} onValueChange={setFeatures}>
  {/* options */}
</CheckboxGroup>;
```

Select all, with a parent checkbox:

```tsx
const features = [
  { id: "analytics", name: "Analytics" },
  { id: "exports", name: "Exports" },
];
const [value, setValue] = useState<string[]>([]);

<CheckboxGroup
  allValues={features.map((feature) => feature.id)}
  aria-labelledby="features-all"
  value={value}
  onValueChange={setValue}>
  <Label id="features-all">
    <Checkbox parent />
    All features
  </Label>
  {features.map((feature) => (
    <Label className="ms-4" key={feature.id}>
      <Checkbox value={feature.id} />
      {feature.name}
    </Label>
  ))}
</CheckboxGroup>;
```

Nested groups: give each group its own `allValues` and `value`. Update both states in the outer `onValueChange` and the inner one. The outer parent's own value does not reflect a partially selected inner group, so pass `indeterminate` explicitly on it.

## Options

- `CheckboxGroup`: `value`, `defaultValue`, `onValueChange(value: string[], details)`, `allValues`, `disabled`.
- `Checkbox`: `value`, `name`, `parent`, `indeterminate`, `disabled`, `id`, `size` (`xs`, `sm`, `default`, `lg`, `xl`).
- The group already sets `flex flex-col items-start gap-3`. Override it with `className` only when the layout needs it.
- Disabling: `disabled` on the group disables every option. `disabled` on one checkbox disables only that option.
- Select-all ignores disabled options. A disabled option that is checked stays checked; a disabled unchecked option is skipped.

## Forms

- Give each option checkbox a `name`. The group has no `name` prop.
- A checked option submits `name=value`. An unchecked option submits nothing.
- `uncheckedValue` has no effect inside a group.
- Parent checkboxes never submit; Base UI clears their `name`.

## Accessibility

- Name the group: `aria-labelledby` pointing at a visible caption, or `aria-label` when no caption is shown.
- Name each option through its wrapping `Label`. `htmlFor` also works, because the checkbox `id` is applied to its hidden native input.
- Describe constraints with `aria-describedby` on the group, pointing at a `FieldDescription` or `FieldError` id.
- Keep option text clickable: wrapping the checkbox in `Label` does this without extra wiring.

## Pitfalls

- Give a parent checkbox `allValues`. Without it, the parent reads as checked while nothing is selected, because both counts are zero.
- Give every option a `value`, or at least a `name`, which Base UI uses as a fallback. An option with neither is not tracked by the group and cannot be selected through it.
- Use `RadioGroup` from `@/components/ui/radio-group` when only one value may be chosen.
- Do not keep separate state for each checkbox alongside the group's state; let the group own it.
- Preserve option `value` strings. They are both the form values and the group's identifiers, so changing them breaks saved selections.
- Do not set `name` on a parent checkbox. Base UI ignores it.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/checkbox-group)
- [Base UI Checkbox Group](https://base-ui.com/react/components/checkbox-group)
