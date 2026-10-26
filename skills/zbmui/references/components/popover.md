# Popover

Displays rich interactive content anchored to a trigger.

## Install

```bash
npx @zbmui/cli@latest add popover --yes --cwd "<app-root>"
```

## Import

```tsx
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
```

## Anatomy

- `Popover` — root state
- `PopoverTrigger` — opens the popover
- `PopoverPopup` — portal and positioner wrapper around content
- `PopoverTitle` — accessible title
- `PopoverDescription` — supporting text
- `PopoverClose` — explicit close action
- `PopoverArrow` — optional pointer
- `popoverCreateHandle` supports imperative control; prefer root state where possible

## Example

```tsx
<Popover>
  <PopoverTrigger render={<Button variant="outline">Feedback</Button>} />
  <PopoverPopup showArrow>
    <PopoverTitle>Send feedback</PopoverTitle>
    <PopoverDescription>Tell us what is working and what is not.</PopoverDescription>
    <div className="mt-3 flex justify-end gap-2">
      <PopoverClose render={<Button variant="ghost">Cancel</Button>} />
      <Button>Send</Button>
    </div>
  </PopoverPopup>
</Popover>
```

## Options

- Popup supports `showArrow`, `tooltipStyle`, `portalProps`, and `positionerProps`.
- `tooltipStyle` is for compact tooltip-like visual treatment, not full tooltip semantics.
- The positioner defaults to a four-pixel side offset.

## Accessibility

- Use a popover for interactive supplemental content; use `Tooltip` for short non-interactive hints.
- Include a title or accessible label when content is not self-describing.
- Keep focus inside interactive popovers and preserve Escape close behavior.

## Pitfalls

- Do not place critical workflows only inside hover-triggered popovers.
- Do not remove portal/positioner layers when the popup is clipped; diagnose overflow and transforms first.
- Do not use `tooltipStyle` to make a semantic tooltip.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/popover)
- [Base UI Popover](https://base-ui.com/react/components/popover)
