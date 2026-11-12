# Number Input

A compact numeric input with stacked increment and decrement buttons on its trailing edge.

## Install

```bash
npx @zbmui/cli@latest add number-input --yes --cwd "<app-root>"
```

## Import

```tsx
import { Field, FieldLabel } from "@/components/ui/field";
import { NumberInput } from "@/components/ui/number-input";
```

## Anatomy

- `NumberInput` — root with the input and stacked stepper buttons in one group
- `NumberInputPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
  <NumberInput id="quantity" name="quantity" defaultValue={1} min={1} max={100} />
</Field>
```

Controlled:

```tsx
const [age, setAge] = useState<number | null>(null);

<NumberInput id="age" min={0} max={200} value={age} onValueChange={setAge} />;
```

The value is `null` while the input is empty.

## Options

- Sizes are `xs`, `sm`, `default`, `lg`, and `xl`. Default is `default`.
- `placeholder` is forwarded to the internal input.
- `inputProps` is forwarded to the internal input. Its `className` is merged with the built-in input classes.
- `id` is applied to the internal input, so a `FieldLabel htmlFor` pointing at it works.
- Other props are Base UI root props. Confirm `step`, `format`, `min`, `max`, and `value` shapes in the installed source before relying on them.

## Accessibility

- Give every input a visible label through `FieldLabel htmlFor`, or pass `aria-label` when no visible label exists. A placeholder alone is not an accessible name.
- The stepper buttons carry `aria-label` values from Base UI ("Increase" and "Decrease"). Do not replace them with icon-only buttons that lack labels.
- Surface min and max constraints in nearby text when they matter to the user.

## Pitfalls

- Do not use this for phone numbers, IDs, or other formatted identifiers.
- Do not use it where a range matters more than exact entry; use `Slider` for that.
- Do not confuse it with `NumberField`. The two components have different layouts: `NumberInput` stacks the steppers on the trailing edge, while `NumberField` places them on either side of the input. Keep the one the project already uses.
- Confirm the `value` type and `onValueChange` signature in the installed source before wiring a form library.
- Do not remove the internal group; it aligns the input and the stepper buttons.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/number-input)
- [Base UI Number Field](https://base-ui.com/react/components/number-field)
