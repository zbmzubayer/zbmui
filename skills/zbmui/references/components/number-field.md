# Number Field

An input for numeric values with increment and decrement controls.

## Install

```bash
npx @zbmui/cli@latest add number-field --yes --cwd "<app-root>"
```

## Import

```tsx
import { NumberField } from "@/components/ui/number-field";
```

## Anatomy

- `NumberField` — root with integrated input group and stepper buttons
- `NumberFieldPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <FieldLabel htmlFor="guests">Guests</FieldLabel>
  <NumberField
    id="guests"
    name="guests"
    defaultValue={2}
    min={1}
    max={12}
    placeholder="Number of guests"
  />
</Field>
```

## Options

- Sizes are `xs`, `sm`, `default`, `lg`, and `xl`.
- The `placeholder` prop is forwarded to the internal input.
- Use Base UI root props from local source for step, formatting, clamping, and controlled values.

## Accessibility

- Label the field; do not rely on stepper icons alone.
- Keep increment and decrement reachable by keyboard.
- Surface min/max constraints in nearby text when important.

## Pitfalls

- Do not use number field for arbitrary formatted identifiers such as phone numbers.
- Confirm `value` type and change callback in installed source before connecting a form library.
- Do not remove the internal group; it aligns the input and controls.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/number-field.md)
- [Base UI Number Field](https://base-ui.com/react/components/number-field)
