# Tooltip

Displays a short hint associated with an element on hover or focus.

## Install

```bash
npx @zbmui/cli@latest add tooltip --yes --cwd "<app-root>"
```

## Import

```tsx
import { IconCopy } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
```

## Anatomy

- `TooltipProvider` — optional shared provider for related tooltips
- `Tooltip` — root state
- `TooltipTrigger` — anchor that opens the tooltip
- `TooltipPopup` — portal, positioner, arrow, and viewport wrapper
- `TooltipPositioner` — standalone positioning part
- `tooltipCreateHandle` supports imperative control; prefer declarative triggers

## Example

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button size="icon" variant="ghost" aria-label="Copy link" />}>
      <IconCopy />
    </TooltipTrigger>
    <TooltipPopup>Copy link</TooltipPopup>
  </Tooltip>
</TooltipProvider>
```

## Options

- `TooltipPopup` shows an arrow by default; set `arrow={false}` to hide it.
- Popup accepts `portalProps` and `positionerProps`.
- Default side offset is larger with an arrow than without one.

## Accessibility

- Tooltip content supplements an accessible name or description; it does not replace the trigger label.
- Keep tooltip text short and non-interactive.
- Ensure the trigger remains understandable without the tooltip.
- Prefer visible text or persistent help for information the user must not miss.

## Pitfalls

- Do not place interactive controls in a tooltip; use `Popover`.
- Do not use a tooltip for validation errors or critical instructions.
- Do not remove the trigger's accessible name because a tooltip exists.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/tooltip)
- [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
