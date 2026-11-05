import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/lib/cn";

export function Slider({
  children,
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  thumbProps,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & {
  thumbProps?: Array<React.ComponentProps<typeof SliderPrimitive.Thumb>>;
}) {
  const values = value ?? defaultValue;
  const thumbCount = Array.isArray(values) ? values.length : 1;

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      max={max}
      min={min}
      thumbAlignment="edge"
      className={cn("data-[orientation=horizontal]:w-full", className)}
      {...props}
    >
      {children}
      <SliderPrimitive.Control
        data-slot="slider-control"
        className="flex touch-none select-none data-disabled:pointer-events-none data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:min-w-44 data-[orientation=vertical]:flex-col data-disabled:opacity-50"
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow select-none rounded-full bg-input data-[orientation=horizontal]:h-1 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-indicator"
            className="select-none rounded-full bg-primary"
          />
          {Array.from({ length: thumbCount }, (_, index) => (
            <SliderPrimitive.Thumb
              data-slot="slider-thumb"
              key={String(index)}
              index={index}
              {...(thumbProps?.[index] || {})}
              className="block size-4 shrink-0 select-none rounded-full border border-ring bg-white shadow-xs/5 outline-none ring-ring/50 transition-[box-shadow,scale] active:ring-3 has-focus-visible:ring-3 dark:border-background [:has(*:focus-visible),[data-dragging]]:shadow-none"
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export function SliderLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Label>) {
  return (
    <SliderPrimitive.Label
      data-slot="slider-label"
      className={cn("inline-flex cursor-default items-center gap-2 font-medium text-sm", className)}
      {...props}
    />
  );
}

export function SliderValue({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Value>) {
  return (
    <SliderPrimitive.Value
      data-slot="slider-value"
      className={cn("text-sm", className)}
      {...props}
    />
  );
}

export { SliderPrimitive };
