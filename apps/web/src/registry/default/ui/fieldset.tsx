import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";

import { cn } from "@/lib/cn";

export function Fieldset(props: React.ComponentProps<typeof FieldsetPrimitive.Root>) {
  return <FieldsetPrimitive.Root data-slot="fieldset" {...props} />;
}

export function FieldsetLegend({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetPrimitive.Legend>) {
  return (
    <FieldsetPrimitive.Legend
      data-slot="fieldset-legend"
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  );
}

export { FieldsetPrimitive };
