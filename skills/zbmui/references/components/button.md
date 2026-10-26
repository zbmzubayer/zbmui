# Button

An interactive control for actions, submissions, and menu triggers.

## Install

```bash
npx @zbmui/cli@latest add button --yes --cwd "<app-root>"
```

## Import

```tsx
import { Button, buttonVariants } from "@/components/ui/button";
```

## Anatomy

- `Button` — Base UI button primitive with style variants
- `buttonVariants` — variant classes for semantic anchors or custom compositions
- `ButtonPrimitive` — escape hatch from installed source; use only when necessary

## Example

```tsx
<Button type="submit" variant="primary">
  Save changes
</Button>
```

Link styled as a button:

```tsx
<a className={buttonVariants({ variant: "outline" })} href="/docs">
  Read the docs
</a>
```

Composed render target:

```tsx
<Button render={<a href="/settings" />}>Settings</Button>
```

## Variants

Sizes:

- `xs`, `sm`, `default`, `lg`, `xl`
- `icon-xs`, `icon-sm`, `icon`, `icon-lg`, `icon-xl`

Variants:

- `primary` — default
- `secondary`
- `outline`
- `ghost`
- `link`
- `info`
- `success`
- `warning`
- `danger`
- `danger-soft`

## Accessibility

- Use a native `button` for actions and a semantic anchor for navigation.
- Icon-only buttons require `aria-label` or visually hidden text.
- Preserve disabled focus behavior expected by the consumer; `focusableWhenDisabled` is available from the installed Base UI primitive when needed.
- During submission, pair a spinner with an accessible label or visible text.

## Pitfalls

- Do not use Radix `asChild`; use `render` composition.
- Do not render a button as an anchor in a way that loses keyboard or href semantics.
- Do not manually style every state when `buttonVariants` and the installed component already match the design.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/button.md)
- [Base UI Button](https://base-ui.com/react/components/button)
