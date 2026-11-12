# Slider

Selects one value or a range from a numeric interval.

## Install

```bash
npx @zbmui/cli@latest add slider --yes --cwd "<app-root>"
```

## Import

```tsx
import { Field, FieldDescription } from "@/components/ui/field";
import { Slider, SliderLabel, SliderValue } from "@/components/ui/slider";
```

## Anatomy

- `Slider` — root with built-in control, track, indicator, and thumbs
- `SliderLabel` — accessible label wired to the slider; place it inside `Slider`
- `SliderValue` — current-value display; place it inside `Slider`
- `SliderPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Field>
  <Slider name="volume" defaultValue={40} min={0} max={100}>
    <div className="mb-2 flex items-center justify-between">
      <SliderLabel>Volume</SliderLabel>
      <SliderValue />
    </div>
  </Slider>
  <FieldDescription>Adjust the playback volume.</FieldDescription>
</Field>
```

Range, with a label on each thumb:

```tsx
<Slider
  defaultValue={[20, 80]}
  min={0}
  max={100}
  thumbProps={[{ "aria-label": "Minimum price" }, { "aria-label": "Maximum price" }]}>
  <div className="mb-2 flex items-center justify-between">
    <SliderLabel>Price range</SliderLabel>
    <SliderValue />
  </div>
</Slider>
```

Vertical:

```tsx
<Slider defaultValue={50} orientation="vertical" thumbProps={[{ "aria-label": "Level" }]} />
```

## Options

- `min` defaults to `0`; `max` defaults to `100`.
- Pass a number for one thumb or an array for multiple thumbs. The wrapper renders one thumb per array entry.
- `thumbProps` is an array with one entry per thumb, forwarded to that thumb. Use it for per-thumb `aria-label` values.
- `orientation="vertical"` switches the control to a column. The control has a minimum height of `min-h-44`, so give the parent enough room.
- The wrapper sets `thumbAlignment="edge"` by default. A prop passed to `Slider` overrides it; use `thumbAlignment="center"` when tick marks must line up with the thumb centers (see Markers).
- Other props are Base UI root props. Confirm `step` and controlled-value shapes in the installed source.

## Accessibility

- Name every thumb. A single slider can use `aria-label` on its one thumb through `thumbProps`; a range needs a name for each thumb.
- Pair the slider with a visible `SliderLabel` when a visible label exists.
- Keep the current value perceivable through touch, keyboard, or an associated `SliderValue`.
- Marker labels rendered as plain text are decorative when `aria-hidden` is set. Do not hide the only copy of a value that a user needs.

## Pitfalls

- Use `SliderLabel` inside `Slider`. It registers its id with the slider's root context, which names the slider.
- Do not use a slider for precise numeric entry; use `NumberInput` or `NumberField`, which accept typed values.
- Confirm the controlled value shape. A single value is a number; a range is an array. Mixing the two causes a rendering mismatch.
- Do not remove the built-in control, track, and thumb structure.

## Markers

To show tick labels, render them absolutely positioned over a container and place each mark at its percentage along the range. Match `step` and `thumbAlignment="center"` so the thumb lines up with its mark. The component docs include a full markers example.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/slider)
- [Base UI Slider](https://base-ui.com/react/components/slider)
