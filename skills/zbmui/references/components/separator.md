# Separator

Visually or semantically separates content.

## Install

```bash
npx @zbmui/cli@latest add separator --yes --cwd "<app-root>"
```

## Import

```tsx
import { Separator } from "@/components/ui/separator";
```

## Anatomy

- `Separator` — Base UI separator with horizontal or vertical orientation
- `SeparatorPrimitive` — installed Base UI escape hatch

## Example

```tsx
<div>
  <p>Account settings</p>
  <Separator className="my-4" />
  <p>Notification settings</p>
</div>
```

Vertical:

```tsx
<div className="flex h-5 items-center gap-3">
  <a href="/docs">Docs</a>
  <Separator orientation="vertical" />
  <a href="/support">Support</a>
</div>
```

## Options

- `orientation="horizontal"` — default
- `orientation="vertical"`

## Accessibility

- Use separators to reinforce structure, not as the only indicator of a relationship.
- Do not place meaningful content inside a separator.
- Ensure decorative separators do not receive unnecessary focus or announcements.

## Pitfalls

- Do not use separators as a replacement for spacing or grouped layout.
- Give vertical separators an appropriate height through the parent layout.
- Preserve Base UI separator semantics when orientation changes.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/separator.md)
- [Base UI Separator](https://base-ui.com/react/components/separator)
