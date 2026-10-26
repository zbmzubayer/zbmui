# Input

A styled text and data-entry field.

## Install

```bash
npx @zbmui/cli@latest add input --yes --cwd "<app-root>"
```

## Import

```tsx
import { Input } from "@/components/ui/input";
```

## Anatomy

- `Input` — Base UI input with size and validation styling
- `InputPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" name="email" type="email" placeholder="you@example.com" />
  <FieldDescription>Use your work email.</FieldDescription>
</Field>
```

File input:

```tsx
<Input type="file" aria-label="Upload document" />
```

## Options

Sizes are `xs`, `sm`, `default`, `lg`, and `xl`; a numeric size is also supported by installed source.

The component handles search-control appearance and file input styling through its data slot classes.

## Accessibility

- Pair every input with a visible label.
- Use `aria-label` only when there is no visible label.
- Set `aria-invalid` and show an associated error when validation fails.

## Pitfalls

- Do not use placeholder text as the only label.
- Do not manually layer icon/addon markup when `InputGroup` is the intended pattern.
- Confirm controlled value props through local source before integrating with form libraries.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/input.md)
- [Base UI Input](https://base-ui.com/react/components/input)
