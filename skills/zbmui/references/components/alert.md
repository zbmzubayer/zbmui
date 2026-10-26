# Alert

Displays a prominent callout for user attention.

## Install

```bash
npx @zbmui/cli@latest add alert --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Alert,
  AlertAction,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle,
} from "@/components/ui/alert";
```

## Anatomy

- `Alert` — callout container with `role="alert"`
- `AlertIndicator` — icon or status indicator
- `AlertContent` — text content container
- `AlertTitle` — prominent heading
- `AlertDescription` — supporting message
- `AlertAction` — optional action area
- `AlertClose` — optional close button

## Example

```tsx
<Alert variant="success">
  <AlertIndicator />
  <AlertContent>
    <AlertTitle>Changes saved</AlertTitle>
    <AlertDescription>Your profile was updated successfully.</AlertDescription>
  </AlertContent>
  <AlertClose aria-label="Dismiss">×</AlertClose>
</Alert>
```

## Variants

Use the installed variant classes through the `variant` prop:

- `primary`
- `secondary` — default
- `info`
- `success`
- `warning`
- `error`

## Accessibility

- Use `role="alert"` for urgent, time-sensitive feedback supplied by the root.
- Give a close control an accessible label.
- Do not communicate severity through color alone; include a title or description.

## Pitfalls

- Do not use an alert for routine inline validation; use `Field` and `FieldError`.
- Keep actions specific and avoid hiding critical content behind dismissal.
- Use semantic variants consistently across the product.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/alert.md)
