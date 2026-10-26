# Toggle

A two-state button that can be pressed on or off.

## Install

```bash
npx @zbmui/cli@latest add toggle --yes --cwd "<app-root>"
```

## Import

```tsx
import { IconItalic } from "@tabler/icons-react";

import { Toggle } from "@/components/ui/toggle";
```

## Anatomy

- `Toggle` — Base UI toggle with style variants
- `toggleVariants` — installed variant helper
- `TogglePrimitive` — installed Base UI escape hatch

## Example

```tsx
"use client";

import { useState } from "react";

const [italic, setItalic] = useState(false);

<Toggle aria-label="Toggle italic" pressed={italic} onPressedChange={setItalic}>
  <IconItalic />
</Toggle>;
```

## Variants

Sizes:

- `sm`
- `default`
- `lg`

Variants:

- `default`
- `outline`

## Accessibility

- Give icon-only toggles accessible labels.
- Communicate the pressed state through the control itself, not color alone.
- Use a group when related toggles operate together.

## Pitfalls

- Do not use a toggle for one-shot actions; use `Button`.
- Do not confuse pressed state with active navigation state.
- Do not remove the built-in `data-pressed` styling without providing an equivalent state style.

## References

- [Base UI Toggle](https://base-ui.com/react/components/toggle)
