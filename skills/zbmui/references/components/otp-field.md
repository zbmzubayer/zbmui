# OTP Field

A one-time-password or recovery-code input with individual character slots.

## Install

```bash
npx @zbmui/cli@latest add otp-field --yes --cwd "<app-root>"
```

## Import

```tsx
import { OTPField, OTPFieldInput, OTPFieldSeparator } from "@/components/ui/otp-field";
```

## Anatomy

- `OTPField` — root that renders the requested number of slots
- `OTPFieldInput` — slot input
- `OTPFieldSeparator` — visual grouping separator
- `OTPFieldPrimitive` — installed Base UI escape hatch

## Example

```tsx
<OTPField aria-label="One-time password" length={6}>
  <OTPFieldInput />
</OTPField>
```

Grouped code:

```tsx
<OTPField aria-label="Recovery code" length={8} validationType="alphanumeric">
  <OTPFieldInput index={0} />
  <OTPFieldInput index={1} />
  <OTPFieldInput index={2} />
  <OTPFieldSeparator />
  <OTPFieldInput index={3} />
  <OTPFieldInput index={4} />
  <OTPFieldInput index={5} />
</OTPField>
```

## Options

- Root sizes are `default` and `lg`.
- Base UI supports validation types, masking, placeholders, and normalization; resolve exact props from installed source.
- Use `aria-invalid` for validation styling and pair errors with accessible text.

## Accessibility

- Give the field a visible label or accessible name.
- Keep the complete code value available to assistive technology through the Base UI root.
- Do not split a code into unrelated standalone inputs without preserving shared state.

## Pitfalls

- Do not use OTP field for phone numbers or arbitrary numeric input.
- Confirm `length` and slot index behavior in local source before customization.
- Avoid clearing the entire field after one wrong character when the UX expects correction.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/otp-field.md)
- [Base UI OTP Field](https://base-ui.com/react/components/otp-field)
