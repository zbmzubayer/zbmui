# Field

Builds accessible form fields with label, description, error, and control integration.

## Install

```bash
npx @zbmui/cli@latest add field --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldValidity,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
```

## Anatomy

- `Field` — root state and association
- `FieldLabel` — accessible label with optional required/optional indicators
- `FieldDescription` — supplementary text
- `FieldError` — validation error
- `FieldControl` — Base UI control adapter
- `FieldValidity` — detailed validity rendering
- `FieldPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field name="email" invalid={false}>
  <FieldLabel htmlFor="email" showRequiredIndicator>
    Email
  </FieldLabel>
  <Input id="email" name="email" type="email" placeholder="you@example.com" />
  <FieldDescription>We will never share your email.</FieldDescription>
  <FieldError match={false}>Enter a valid email address.</FieldError>
</Field>
```

Use state to reveal the error after validation:

```tsx
<Field name="email" invalid={!!error} touched={isTouched} dirty={isDirty}>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" aria-invalid={!!error} />
  <FieldError match={!!error}>{error}</FieldError>
</Field>
```

## Options

- `FieldLabel` supports `showRequiredIndicator` and `showOptionalIndicator`.
- `FieldError` can be driven by Base UI validity state or explicit boolean state; confirm the installed prop contract.
- Use `FieldControl` when local source/docs require explicit control integration, including non-Base controls such as the documented `Textarea` case.

## Accessibility

- Associate labels with controls through `htmlFor`/`id` or the Base UI field association.
- Keep errors as text; do not rely on color alone.
- Do not remove a field's accessible name when adding addons or icons.

## Pitfalls

- Do not use `Field` as a generic layout div; use it for actual field semantics.
- Do not manually wire `aria-describedby` when the field parts already manage it.
- With React Hook Form, use `FieldControl` where documented and keep native `<form>` submission.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/field.md)
- [Base UI Field](https://base-ui.com/react/components/field)
