import { Slider, SliderValue } from "@/registry/default/ui/slider";

const MIN = 0;
const MAX = 100;
const STEP = 10;
const MARKS = Array.from({ length: (MAX - MIN) / STEP + 1 }, (_, index) => {
  const value = MIN + index * STEP;
  return {
    value,
    percent: ((value - MIN) / (MAX - MIN)) * 100,
  };
});

export function SliderDemo() {
  return (
    <div className="w-full max-w-xs">
      <Slider
        min={MIN}
        max={MAX}
        step={STEP}
        defaultValue={50}
        thumbAlignment="center"
        thumbProps={[{ "aria-label": "Value" }]}
      >
        <div className="mb-2 flex items-center justify-end">
          <SliderValue />
        </div>
      </Slider>
      <div aria-hidden className="relative mt-2 h-8 select-none text-xs">
        {MARKS.map(({ value, percent }) => (
          <span
            key={value}
            className="absolute top-0 inline-flex -translate-x-1/2 flex-col items-center gap-1"
            style={{ left: `${percent}%` }}
          >
            <span className="h-1.5 w-px bg-muted-foreground/60" />
            <span>{value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
