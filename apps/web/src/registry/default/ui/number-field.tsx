import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

interface NumberFieldProps extends React.ComponentProps<typeof NumberFieldPrimitive.Root> {
  placeholder?: string;
  size?: "xs" | "sm" | "default" | "lg" | "xl";
}

function NumberField({ className, placeholder, size = "default", ...props }: NumberFieldProps) {
  return (
    <NumberFieldPrimitive.Root className={cn("flex items-center gap-3", className)} {...props}>
      <NumberFieldPrimitive.Group
        className={cn(
          "grid h-9 grid-cols-[auto_1fr] grid-rows-[1fr_1fr] overflow-hidden rounded-md border border-input ps-3 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:ring-offset-0 [&_svg:not([class*='size-'])]:size-4",
          size === "xs" && "h-7 text-xs [&_svg:not([class*='size-'])]:size-3",
          size === "sm" && "h-8 text-sm [&_svg:not([class*='size-'])]:size-3.5",
          size === "lg" && "h-10 text-base [&_svg:not([class*='size-'])]:size-4",
          size === "xl" && "h-11 text-lg [&_svg:not([class*='size-'])]:size-4.5"
        )}
      >
        <NumberFieldPrimitive.Input
          placeholder={placeholder}
          className={cn(
            "row-span-2 selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus:outline-none"
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

export { NumberField };
