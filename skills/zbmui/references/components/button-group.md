# Button Group

Groups related buttons and form controls with shared borders and spacing.

## Install

```bash
npx @zbmui/cli@latest add button-group --yes --cwd "<app-root>"
```

## Import

```tsx
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
```

## Anatomy

- `ButtonGroup` — styled group container
- Direct children are visually joined and should be related actions or inputs

## Example

```tsx
<ButtonGroup aria-label="Text formatting">
  <Button size="sm" variant="outline" aria-label="Bold">
    B
  </Button>
  <Button size="sm" variant="outline" aria-label="Italic">
    I
  </Button>
  <Button size="sm" variant="outline" aria-label="Underline">
    U
  </Button>
</ButtonGroup>
```

Vertical:

```tsx
<ButtonGroup orientation="vertical">
  <Button variant="outline">Preview</Button>
  <Button variant="outline">Duplicate</Button>
  <Button variant="outline">Delete</Button>
</ButtonGroup>
```

## Options

- `orientation="horizontal"` — default
- `orientation="vertical"`
- `render` can compose another group element through installed source

## Accessibility

- Give the group an accessible label when the child labels do not describe the relationship.
- Keep every child control independently labeled.
- Do not use the group to merge separate destructive and safe actions into one ambiguous control.

## Pitfalls

- Do not put unrelated actions together only to save space.
- Test wrapped and vertical layouts; border radii depend on child position.
- Preserve direct-child structure because the installed styles target adjacent children.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/button-group)
