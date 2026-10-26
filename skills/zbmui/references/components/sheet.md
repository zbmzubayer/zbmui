# Sheet

A dialog-based panel for supplemental content, filters, forms, and mobile navigation.

## Install

```bash
npx @zbmui/cli@latest add sheet --yes --cwd "<app-root>"
```

## Import

```tsx
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
```

## Anatomy

- `Sheet` — root state
- `SheetTrigger` — opens the sheet
- `SheetPopup` — portal, backdrop, viewport, side layout, and optional close button
- `SheetHeader` — heading area
- `SheetTitle` — accessible title
- `SheetDescription` — supporting context
- `SheetPanel` — scrollable content panel
- `SheetFooter` — action area
- `SheetClose` — explicit close control
- `SheetPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Sheet>
  <SheetTrigger render={<Button variant="outline">Open filters</Button>} />
  <SheetPopup side="right">
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
      <SheetDescription>Narrow the current result set.</SheetDescription>
    </SheetHeader>
    <SheetPanel>{/* Filter controls */}</SheetPanel>
    <SheetFooter>
      <SheetClose render={<Button variant="outline">Close</Button>} />
      <Button>Apply filters</Button>
    </SheetFooter>
  </SheetPopup>
</Sheet>
```

## Options

- Sides are `right` — default, `left`, `top`, and `bottom`.
- `inset` renders a desktop inset sheet with rounded borders.
- `showCloseButton` defaults to `true`.
- `SheetFooter` supports `variant="default" | "bare"`.
- `SheetPanel` wraps content in `ScrollArea` and supports `scrollFade`.

## Accessibility

- Always include `SheetTitle`.
- Add `SheetDescription` when the sheet's purpose needs context.
- Preserve focus trapping, Escape close, and background inertness.
- Use a bottom sheet for mobile alternatives only when the content remains usable.

## Pitfalls

- Do not use a sheet for required confirmation; use `AlertDialog`.
- Do not let large desktop layouts overflow without `SheetPanel` scrolling.
- Do not hide the close action without providing another clear dismiss path.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/sheet)
- [Base UI Dialog](https://base-ui.com/react/components/dialog)
