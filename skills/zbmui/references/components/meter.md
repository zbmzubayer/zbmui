# Meter

Displays a numeric value within a known range, such as storage or progress capacity.

## Install

```bash
npx @zbmui/cli@latest add meter --yes --cwd "<app-root>"
```

## Import

```tsx
import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@/components/ui/meter";
```

## Anatomy

- `Meter` — root with accessible meter semantics
- `MeterLabel` — visible label
- `MeterValue` — current numeric value
- `MeterTrack` — static range track
- `MeterIndicator` — filled portion
- `MeterPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Meter value={72} minValue={0} maxValue={100} className="w-full">
  <div className="flex items-center justify-between">
    <MeterLabel>Storage</MeterLabel>
    <MeterValue />
  </div>
  <MeterTrack>
    <MeterIndicator />
  </MeterTrack>
</Meter>
```

## Options

- With no children, `Meter` renders a default `MeterTrack` and `MeterIndicator`.
- Use local source for formatting, value, minimum, maximum, and accessible value behavior.

## Accessibility

- Prefer `Meter` when the value has a known maximum.
- Keep a text label or value available; do not communicate state through bar width alone.
- Use `progress` semantics only when the underlying task is genuinely progressing; `Meter` is usually better for capacity.

## Pitfalls

- Do not use meter for indeterminate loading; use `Spinner` or `Skeleton`.
- Do not omit the maximum when the range is meaningful.
- Verify value text remains readable in both color modes.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/meter.md)
- [Base UI Meter](https://base-ui.com/react/components/meter)
