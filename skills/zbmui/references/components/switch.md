# Switch

A two-state control for enabling or disabling a setting.

## Install

```bash
npx @zbmui/cli@latest add switch --yes --cwd "<app-root>"
```

## Import

```tsx
import { Switch } from "@/components/ui/switch";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
```

## Anatomy

- `Switch` — Base UI switch root with built-in thumb
- `SwitchPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <div className="flex items-center gap-2">
    <Switch id="notifications" name="notifications" defaultChecked />
    <FieldLabel htmlFor="notifications">Enable notifications</FieldLabel>
  </div>
  <FieldDescription>Receive product and security updates.</FieldDescription>
</Field>
```

Controlled:

```tsx
"use client";

import { useState } from "react";

const [enabled, setEnabled] = useState(true);

<Switch aria-label="Airplane mode" checked={enabled} onCheckedChange={setEnabled} />;
```

## Options

Sizes are `sm`, `default`, and `lg`.

Use `aria-invalid` and field error integration when a switch has validation state.

## Accessibility

- Give the switch a label; do not rely on the visual thumb position.
- Preserve switch semantics rather than rendering a generic button.
- Explain the effect of the setting in a description when the label alone is ambiguous.

## Pitfalls

- Do not use a switch for immediate destructive actions.
- Do not use a switch when the user must save a form before the change applies unless that behavior is clearly communicated.
- Confirm `checked` and `onCheckedChange` types in installed source before form integration.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/switch)
- [Base UI Switch](https://base-ui.com/react/components/switch)
