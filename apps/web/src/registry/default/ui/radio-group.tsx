import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/lib/cn";

export function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  );
}

export function Radio({ className, ...props }: React.ComponentProps<typeof RadioPrimitive.Root>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(
        "flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-background shadow-xs/5 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background aria-invalid:border-danger focus-visible:aria-invalid:ring-danger/30 data-disabled:cursor-not-allowed data-checked:bg-primary data-disabled:opacity-disabled",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-indicator"
        className="flex items-center justify-center before:size-2 before:rounded-full before:bg-primary-foreground data-unchecked:hidden"
      />
    </RadioPrimitive.Root>
  );
}

export { RadioGroupPrimitive, RadioPrimitive };
