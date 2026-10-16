import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

interface NumberFieldProps extends React.ComponentProps<typeof NumberFieldPrimitive.Root> {
  placeholder?: NumberFieldPrimitive.Input.Props["placeholder"];
  size?: "xs" | "sm" | "default" | "lg" | "xl";
}

export function NumberField({
  className,
  placeholder,
  size = "default",
  ...props
}: NumberFieldProps) {
  return (
    <NumberFieldPrimitive.Root
      className={cn("flex w-full items-center gap-3", className)}
      {...props}
    >
      <NumberFieldPrimitive.Group
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
          placeholder={placeholder}
          className={cn(
            "row-span-2 selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus:outline-none",
            size === "xs" && "px-2",
            size === "sm" && "px-2.5",
            size === "default" && "px-3",
            size === "lg" && "px-3",
            size === "xl" && "px-3"
          )}
        />
        <NumberFieldPrimitive.Increment className="inline-flex items-center justify-center border-s px-1 hover:bg-accent hover:text-accent-foreground active:*:-translate-y-px">
          <IconChevronUp />
        </NumberFieldPrimitive.Increment>
        <NumberFieldPrimitive.Decrement className="inline-flex items-center justify-center border-s border-t px-1 hover:bg-accent hover:text-accent-foreground active:*:translate-y-px">
          <IconChevronDown />
        </NumberFieldPrimitive.Decrement>
      </NumberFieldPrimitive.Group>
    </NumberFieldPrimitive.Root>
  );
}

export { NumberFieldPrimitive };
