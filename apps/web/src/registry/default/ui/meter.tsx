import { Meter as MeterPrimitive } from "@base-ui/react/meter";

import { cn } from "@/lib/cn";

export function Meter({
  children,
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Root>) {
  return (
    <MeterPrimitive.Root
      data-slot="meter"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    >
      {children ? (
        children
      ) : (
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      )}
    </MeterPrimitive.Root>
  );
}

export function MeterLabel({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Label>) {
  return (
    <MeterPrimitive.Label
      data-slot="meter-label"
      className={cn("font-medium text-foreground text-sm", className)}
      {...props}
    />
  );
}

export function MeterTrack({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Track>) {
  return (
    <MeterPrimitive.Track
      data-slot="meter-track"
      className={cn("block h-1.5 w-full overflow-hidden rounded-full bg-input", className)}
      {...props}
    />
  );
}

export function MeterIndicator({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Indicator>) {
  return (
    <MeterPrimitive.Indicator
      data-slot="meter-indicator"
      className={cn("bg-primary transition-all duration-500", className)}
      {...props}
    />
  );
}

export function MeterValue({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Value>) {
  return (
    <MeterPrimitive.Value
      data-slot="meter-value"
      className={cn("text-foreground text-sm tabular-nums", className)}
      {...props}
    />
  );
}

export { MeterPrimitive };
