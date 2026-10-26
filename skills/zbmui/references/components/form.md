# Form

A thin wrapper around the Base UI form primitive.

## Install

```bash
npx @zbmui/cli@latest add form --yes --cwd "<app-root>"
```

## Import

```tsx
import { Form, FormPrimitive } from "@/components/ui/form";
```

## Anatomy

- `Form` — Base UI form wrapper
- `FormPrimitive` — underlying Base UI form for advanced usage

## Example

```tsx
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

<Form
  onSubmit={(event) => {
    event.preventDefault();
    // Validate and submit values.
  }}
  className="space-y-3">
  <Input name="email" type="email" required />
</Form>;
```

## React Hook Form

For React Hook Form, use a native `<form>` element with `form.handleSubmit(onSubmit)`. Do not replace it with this Base UI `Form` wrapper unless the installed Base UI integration explicitly supports that usage.

See `references/forms.md` for the complete React Hook Form/Zod pattern.

## Options

Resolve validation, reset, and submission props from installed local source and Base UI form documentation. Do not guess them from the wrapper's small source file.

## Accessibility

- Use real form controls with stable `name` attributes.
- Submit through a `type="submit"` control.
- Surface errors with `Field` and `FieldError`.

## Pitfalls

- Do not confuse Base UI `Form` with React Hook Form's form manager.
- Do not remove native form submission semantics.
- Do not add a second validation system when Base UI or the consumer already has one.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/form)
- [Base UI Form](https://base-ui.com/react/components/form)
