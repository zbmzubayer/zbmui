# Scroll Area

Augments native scrolling with styled scrollbars, overflow detection, fade effects, and gutters.

## Install

```bash
npx @zbmui/cli@latest add scroll-area --yes --cwd "<app-root>"
```

## Import

```tsx
import { ScrollArea } from "@/components/ui/scroll-area";
```

## Anatomy

- `ScrollArea` — root, viewport, content, vertical/horizontal scrollbars, and corner
- `ScrollBar` — styled scrollbar primitive
- `ScrollAreaPrimitive` — installed Base UI escape hatch

## Example

```tsx
<ScrollArea className="h-72 rounded-lg border" scrollFade scrollbarGutter>
  <div className="p-4">{/* Long content */}</div>
</ScrollArea>
```

## Options

- `scrollFade` masks content at overflow edges.
- `scrollbarGutter` reserves scrollbar space when overflow exists.
- The component renders both vertical and horizontal scrollbars as needed.

## Accessibility

- Do not hide keyboard focus inside the viewport.
- Keep scrollable content reachable by keyboard and pointer.
- Use native scrolling semantics; do not intercept wheel or touch behavior unnecessarily.

## Pitfalls

- Give the root a bounded height or width; otherwise overflow may never occur.
- Do not nest multiple scroll areas without a clear visual hierarchy.
- Test horizontal overflow and mobile touch scrolling.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/scroll-area.md)
- [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
