# Kbd

Displays keyboard keys and shortcuts.

## Install

```bash
npx @zbmui/cli@latest add kbd --yes --cwd "<app-root>"
```

## Import

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd";
```

## Anatomy

- `Kbd` — one key or compact key group
- `KbdGroup` — spaced group of related keys

## Example

```tsx
<p className="text-muted-foreground text-sm">
  Press{" "}
  <KbdGroup>
    <Kbd>⌘</Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>{" "}
  to open the command menu.
</p>
```

## Accessibility

- Use kbd content as visual support, not as the only description of an action.
- Keep shortcut text understandable in plain language.
- Do not make `Kbd` interactive; shortcuts need an actual control elsewhere.

## Pitfalls

- Do not use kbd styling for arbitrary code or tags.
- Do not rely on symbols alone when the audience may not recognize them.
- Keep groups short and platform-appropriate.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/kbd.md)
