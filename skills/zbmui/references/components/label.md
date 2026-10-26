# Label

Renders an accessible label associated with a form control.

## Install

```bash
npx @zbmui/cli@latest add label --yes --cwd "<app-root>"
```

## Import

```tsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
```

## Anatomy

- `Label` — semantic label element with render composition support

## Example

```tsx
<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" name="email" type="email" />
</div>
```

## Accessibility

- Associate labels with controls through `htmlFor`/`id`, or use Base UI field association.
- Keep labels visible; placeholder text is not a label.
- Use `FieldLabel` when the label must participate in ZBM UI field state and indicators.

## Pitfalls

- Do not use `Label` as a generic styled span.
- Do not remove label association when adding icons or addons.
- Do not duplicate a field label and a standalone label for the same control.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/label)
