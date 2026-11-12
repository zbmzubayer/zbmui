# Number Field

An input for numeric values with increment and decrement controls.

## Install

```bash
npx @zbmui/cli@latest add number-field --yes --cwd "<app-root>"
```

## Import

```tsx
import { Field, FieldLabel } from "@/components/ui/field";
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

## Layout

- The field is a single flex row: decrement button (`IconMinus`) on the leading edge, the input in the middle, and increment button (`IconPlus`) on the trailing edge.
- Stepper buttons are full height. Their width follows the size: `w-6` for `xs`, `w-7` for `sm`, `w-8` for `default`, `w-9` for `lg`, and `w-10` for `xl`.
- Input horizontal padding is `px-2` for `xs` and `sm`, `px-2.5` for `default` and `lg`, and `px-3` for `xl`.

## Options

- Sizes are `xs`, `sm`, `default`, `lg`, and `xl`.
- The `placeholder` prop is forwarded to the internal input.
- `inputProps` is forwarded to the internal input. Its `className` is merged with the built-in input classes, so passing a class adds to the defaults instead of replacing them.
- Use Base UI root props from local source for step, formatting, clamping, and controlled values.

## Migration notes

Apps that used the earlier grid layout should check these changes:

- The chevron icons were replaced by plus and minus icons.
- The decrement button now sits on the leading edge, before the input. Previously it was on the trailing edge, below the increment button.
- `inputProps.className` now merges with the defaults. Code that relied on it replacing them must now override the specific classes instead.
- Default input padding changed from `px-3` to `px-2.5`.
- Field height and stepper widths are now driven by `size`, so the same size value gives consistent heights across both buttons and the input.

## Accessibility

- Label the field; do not rely on stepper icons alone.
- Keep increment and decrement reachable by keyboard.
- Surface min/max constraints in nearby text when important.

## Pitfalls

- Do not use number field for arbitrary formatted identifiers such as phone numbers.
- Confirm `value` type and change callback in installed source before connecting a form library.
- Do not remove the internal group; it aligns the input and controls.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/number-field)
- [Base UI Number Field](https://base-ui.com/react/components/number-field)
