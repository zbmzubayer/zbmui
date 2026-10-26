# Slider

Selects one value or a range from a numeric interval.

## Install

```bash
npx @zbmui/cli@latest add slider --yes --cwd "<app-root>"
```

## Import

```tsx
import { Slider, SliderValue } from "@/components/ui/slider";
```

## Anatomy

- `Slider` — root with built-in control, track, indicator, and thumbs
- `SliderValue` — accessible current-value display
- `SliderPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <FieldLabel htmlFor="volume">Volume</FieldLabel>
  <Slider id="volume" name="volume" defaultValue={40} min={0} max={100} />
  <FieldDescription>Adjust the playback volume.</FieldDescription>
</Field>
```

Range:

```tsx
<Slider defaultValue={[20, 80]} min={0} max={100} aria-label="Price range" />
```

## Options

- `min` defaults to `0`; `max` defaults to `100`.
- Pass a number for one thumb or an array for multiple thumbs.
- The installed wrapper sets `thumbAlignment="edge"` and renders one thumb per value.

## Accessibility

- Label the slider when a visible label exists.
- Use `aria-label` for standalone sliders.
- Keep current value perceivable through touch, keyboard, or an associated `SliderValue`.

## Pitfalls

- Do not use a slider for precise numeric entry when typing is easier; use `NumberField`.
- Confirm controlled value shape; single and range values differ.
- Do not remove the built-in control/track/thumb structure.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/slider.md)
- [Base UI Slider](https://base-ui.com/react/components/slider)
