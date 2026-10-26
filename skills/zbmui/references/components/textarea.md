# Textarea

A multi-line text field.

## Install

```bash
npx @zbmui/cli@latest add textarea --yes --cwd "<app-root>"
```

## Import

```tsx
import { Textarea } from "@/components/ui/textarea";
```

## Anatomy

- `Textarea` — auto-sizing styled native textarea

## Example

```tsx
<Field>
  <FieldLabel htmlFor="message">Message</FieldLabel>
  <Textarea id="message" name="message" placeholder="Write your message" />
  <FieldDescription>Markdown is supported.</FieldDescription>
</Field>
```

## Options

Sizes are `xs`, `sm`, `default`, `lg`, and `xl`.

The component uses CSS field sizing and disables the scrollbar by default. Verify local customizations before changing resize behavior.

## Accessibility

- Pair the textarea with a visible label.
- Set `aria-invalid` and show an error for validation failures.
- Keep user resizing available unless the product layout explicitly requires disabling it.

## Pitfalls

- Do not use placeholder text as the label.
- In ZBM UI fields, use `FieldControl` when local source/docs require explicit integration with `Field` validation.
- Do not force a one-line height for expected multi-line input.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/textarea.md)
