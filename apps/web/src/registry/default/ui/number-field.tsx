import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

interface NumberFieldProps extends React.ComponentProps<typeof NumberFieldPrimitive.Root> {
  placeholder?: NumberFieldPrimitive.Input.Props["placeholder"];
  inputProps?: React.ComponentProps<typeof NumberFieldPrimitive.Input>;
  size?: "xs" | "sm" | "default" | "lg" | "xl";
}

export function NumberField({
  className,
  placeholder,
  size = "default",
  inputProps,
  ...props
}: NumberFieldProps) {
  return (
    <NumberFieldPrimitive.Root
      data-slot="number-field"
      className={cn("w-full", className)}
      {...props}
    >
      <NumberFieldPrimitive.Group
        data-slot="number-field-group"
        className={cn(
          "grid h-8 w-full grid-cols-[1fr_auto] overflow-hidden rounded-lg border border-input text-sm focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 [&_svg:not([class*='size-'])]:size-3.5",
          size === "xs" &&
            "h-6 rounded-sm text-xs focus-within:ring-2 [&_svg:not([class*='size-'])]:size-2.75",
          size === "sm" &&
            "h-7 rounded-md text-[0.8125rem] focus-within:ring-2 [&_svg:not([class*='size-'])]:size-3",
          size === "lg" && "h-9 [&_svg:not([class*='size-'])]:size-3.75",
          size === "xl" && "h-10 text-base [&_svg:not([class*='size-'])]:size-4"
        )}
      >
        <NumberFieldPrimitive.Input
          data-slot="number-field-input"
          placeholder={placeholder}
          className={cn(
            "row-span-2 min-w-0 selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus:outline-none",
            size === "xs" && "px-2",
            size === "sm" && "px-2.5",
            size === "default" && "px-3",
            size === "lg" && "px-3",
            size === "xl" && "px-3"
          )}
          {...inputProps}
        />
        <NumberFieldPrimitive.Increment
          data-slot="number-field-increment"
          className="inline-flex items-center justify-center border-s px-1 hover:bg-accent hover:text-accent-foreground active:*:-translate-y-px"
        >
          <IconChevronUp />
        </NumberFieldPrimitive.Increment>
        <NumberFieldPrimitive.Decrement
          data-slot="number-field-decrement"
          className="inline-flex items-center justify-center border-s border-t px-1 hover:bg-accent hover:text-accent-foreground active:*:translate-y-px"
        >
          <IconChevronDown />
        </NumberFieldPrimitive.Decrement>
      </NumberFieldPrimitive.Group>
    </NumberFieldPrimitive.Root>
  );
}

export { NumberFieldPrimitive };
