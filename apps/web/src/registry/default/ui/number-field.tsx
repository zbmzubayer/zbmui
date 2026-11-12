import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { IconMinus, IconPlus } from "@tabler/icons-react";

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
  inputProps: { className: inputClassName, ...inputProps } = {},
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
          "flex h-8 w-full items-center overflow-hidden rounded-lg border border-input text-sm focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 dark:bg-input/30 [&_svg:not([class*='size-'])]:size-3.5",
          size === "xs" &&
            "h-6 rounded-sm text-xs focus-within:ring-2 [&_svg:not([class*='size-'])]:size-2.75",
          size === "sm" &&
            "h-7 rounded-md text-[0.8125rem] focus-within:ring-2 [&_svg:not([class*='size-'])]:size-3",
          size === "lg" && "h-9 [&_svg:not([class*='size-'])]:size-3.75",
          size === "xl" && "h-10 text-base [&_svg:not([class*='size-'])]:size-4"
        )}
      >
        <NumberFieldPrimitive.Decrement
          data-slot="number-field-decrement"
          className={cn(
            "inline-flex h-full w-8 items-center justify-center border-e transition-colors hover:bg-accent hover:text-accent-foreground",
            size === "xs" && "w-6",
            size === "sm" && "w-7",
            size === "lg" && "w-9",
            size === "xl" && "w-10"
          )}
        >
          <IconMinus />
        </NumberFieldPrimitive.Decrement>
        <NumberFieldPrimitive.Input
          data-slot="number-field-input"
          placeholder={placeholder}
          className={cn(
            "min-w-0 flex-1 px-2.5 selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus:outline-none",
            size === "xs" && "px-2",
            size === "sm" && "px-2",
            size === "xl" && "px-3",
            inputClassName
          )}
          {...inputProps}
        />

        <NumberFieldPrimitive.Increment
          data-slot="number-field-increment"
          className={cn(
            "inline-flex h-full w-8 items-center justify-center border-s transition-colors hover:bg-accent hover:text-accent-foreground",
            size === "xs" && "w-6",
            size === "sm" && "w-7",
            size === "lg" && "w-9",
            size === "xl" && "w-10"
          )}
        >
          <IconPlus />
        </NumberFieldPrimitive.Increment>
      </NumberFieldPrimitive.Group>
    </NumberFieldPrimitive.Root>
  );
}

export { NumberFieldPrimitive };
