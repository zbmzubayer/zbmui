# Radio Group

A set of options in which exactly one value can be selected.

## Install

```bash
npx @zbmui/cli@latest add radio-group --yes --cwd "<app-root>"
```

## Import

```tsx
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Radio, RadioGroup } from "@/components/ui/radio-group";
```

Add `Fieldset` and `FieldsetLegend` from `@/components/ui/fieldset` only when using the legend pattern below.

## Anatomy

- `RadioGroup` — a `div` with `role="radiogroup"` that owns one selected value (not an array)
- `Radio` — one option; its `value` identifies it within the group
- `Label` — wraps the radio and its text so the text selects the option
- `Fieldset` and `FieldsetLegend` — optional group label when a legend fits better than a caption
- `RadioGroupPrimitive` and `RadioPrimitive` — installed Base UI escape hatches

## Example

```tsx
<Field>
  <FieldLabel id="plan-label">Plan</FieldLabel>
  <RadioGroup aria-labelledby="plan-label" defaultValue="free">
    <Label>
      <Radio value="free" />
      Free
    </Label>
    <Label>
      <Radio value="pro" />
      Pro
    </Label>
  </RadioGroup>
  <FieldDescription>Choose the plan for this workspace.</FieldDescription>
</Field>
```

Legend pattern, where the group takes its label from the fieldset:

```tsx
<Fieldset>
  <FieldsetLegend>Plan</FieldsetLegend>
  <RadioGroup defaultValue="free">{/* options */}</RadioGroup>
</Fieldset>
```

Controlled (requires a client component in Next.js App Router):

```tsx
const [plan, setPlan] = useState<string | null>(null);

<RadioGroup aria-labelledby="plan-label" value={plan} onValueChange={setPlan}>
  {/* options */}
</RadioGroup>;
```

## Options

- `RadioGroup`: `value`, `defaultValue`, `onValueChange(value, details)`, `name`, `required`, `readOnly`, `disabled`, `form`.
- `Radio`: `value`, `id`, `disabled`, `required`, `readOnly`.
- No selection is `null` (or `undefined`). The group treats both as nothing selected, so use `null` as the initial controlled value.
- Give each `Radio` a `value`. Values are not limited to strings, but strings are safer for forms.
- The group already sets `flex flex-col gap-3`. Override it with `className` only when the layout needs it.
- Disable one option with `disabled` on its `Radio`. Disable the whole group with `disabled` on `RadioGroup`.

## Forms

- Set `name` on `RadioGroup`. Each radio's hidden input takes that name, and only the checked radio submits its serialized `value`.
- A `name` from a surrounding `Field` takes precedence over the `name` prop on the group.
- Set `required` on the group. The group sets `aria-required` on itself.

## Accessibility

- Name the group. Use `aria-labelledby` with a visible caption, `aria-label` when no caption is shown, or the `Fieldset` and `FieldsetLegend` pattern.
- Name each option through its wrapping `Label`. `htmlFor` also works, because a radio's `id` is applied to its hidden native input.
- Give every radio a unique `id` when you use `htmlFor`. Generic ids such as `free` and `pro` can collide elsewhere on the page.
- Keyboard: arrow keys move between options, and Space selects the focused option.
- Keep descriptions short when they sit inside the label. Anything inside a card-style label becomes part of the accessible name. Move longer text out with `aria-describedby`.

## Pitfalls

- Do not use a radio group for multi-select. Use `CheckboxGroup` instead.
- Do not keep separate state per radio. The group owns the selected value; connect its `onValueChange` once.
- Do not put interactive controls inside a radio's label.
- Do not change option values after users have selected them. Saved selections will no longer match an option.
- Controlled state needs a client component in Next.js App Router.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/radio-group)
- [Base UI Radio Group](https://base-ui.com/react/components/radio-group)
