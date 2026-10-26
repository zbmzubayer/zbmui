# Input Group

Attaches icons, text, buttons, and other addons to an input or textarea.

## Install

```bash
npx @zbmui/cli@latest add input-group --yes --cwd "<app-root>"
```

## Import

```tsx
import { IconSearch } from "@tabler/icons-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
```

## Anatomy

- `InputGroup` — styled composite field with `role="group"`
- `InputGroupAddon` — icon, text, or control attachment
- `InputGroupButton` — compact embedded button
- `InputGroupText` — inline static text
- `InputGroupInput` — input styled for the group
- `InputGroupTextarea` — auto-sizing textarea styled for the group

## Example

```tsx
<InputGroup>
  <InputGroupAddon>
    <IconSearch aria-hidden="true" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search documentation" aria-label="Search documentation" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton aria-label="Search">Go</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

Header and footer addons:

```tsx
<InputGroup>
  <InputGroupAddon align="block-start">Public comment</InputGroupAddon>
  <InputGroupTextarea placeholder="Write a comment" aria-label="Comment" />
  <InputGroupAddon align="block-end">Markdown is supported.</InputGroupAddon>
</InputGroup>
```

## Options

- Group sizes are `xs`, `sm`, `default`, `lg`, and `xl`.
- Addon aligns are `inline-start`, `inline-end`, `block-start`, and `block-end`.
- Addons focus the contained input when non-interactive content is clicked.

## Accessibility

- Keep an accessible name on the input or textarea even when visual labels are replaced by addons.
- Give embedded icon buttons labels.
- Do not rely on an icon alone to communicate the field's purpose.

## Pitfalls

- Do not place arbitrary absolute-positioned markup outside `InputGroupAddon`; focus and layout behavior are integrated.
- Preserve addon `align` values so responsive spacing works.
- Use `InputGroupTextarea` rather than a plain textarea when it must participate in the group layout.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/input-group.md)
