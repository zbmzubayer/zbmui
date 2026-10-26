# Checkbox

A control that toggles between checked, unchecked, and indeterminate states.

## Install

```bash
npx @zbmui/cli@latest add checkbox --yes --cwd "<app-root>"
```

## Import

```tsx
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
```

## Anatomy

- `Checkbox` — interactive checkbox root and built-in indicator
- `CheckboxPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <div className="flex items-center gap-2">
    <Checkbox id="terms" name="terms" />
    <FieldLabel htmlFor="terms">I accept the terms</FieldLabel>
  </div>
  <FieldDescription>You must accept the terms to continue.</FieldDescription>
</Field>
```

Controlled:

```tsx
"use client";

import { useState } from "react";

const [checked, setChecked] = useState(false);

<Checkbox aria-label="Enable notifications" checked={checked} onCheckedChange={setChecked} />;
```

## Options

Sizes are `xs`, `sm`, `default`, `lg`, and `xl`.

The installed component supports Base UI checked-state props, including indeterminate state through the primitive API.

## Accessibility

- Associate every standalone checkbox with a visible label.
- Use `aria-label` only when a visible label is genuinely unavailable.
- Do not communicate errors with color alone; connect the message with a field.

## Pitfalls

- Do not style a plain `div` as a checkbox; use the exported component.
- Confirm controlled and indeterminate value types in installed local source.
- In forms, keep the `name` prop stable.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/checkbox)
- [Base UI Checkbox](https://base-ui.com/react/components/checkbox)
