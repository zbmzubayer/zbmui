import { NumberField as NumberInputPrimitive } from "@base-ui/react/number-field";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

interface NumberInputProps extends React.ComponentProps<typeof NumberInputPrimitive.Root> {
  placeholder?: NumberInputPrimitive.Input.Props["placeholder"];
  inputProps?: React.ComponentProps<typeof NumberInputPrimitive.Input>;
  size?: "xs" | "sm" | "default" | "lg" | "xl";
}

export function NumberInput({
  className,
  placeholder,
  size = "default",
  inputProps: { className: inputClassName, ...inputProps } = {},
  ...props
}: NumberInputProps) {
  return (
    <NumberInputPrimitive.Root
      data-slot="number-input"
      className={cn("w-full", className)}
      {...props}
    >
      <NumberInputPrimitive.Group
        data-slot="number-input-group"
        className={cn(
          "grid h-8 w-full grid-cols-[1fr_auto] overflow-hidden rounded-lg border border-input text-sm focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 dark:bg-input/30 [&_svg:not([class*='size-'])]:size-3.5",
          size === "xs" &&
            "h-6 rounded-sm text-xs focus-within:ring-2 [&_svg:not([class*='size-'])]:size-2.75",
          size === "sm" &&
            "h-7 rounded-md text-[0.8125rem] focus-within:ring-2 [&_svg:not([class*='size-'])]:size-3",
          size === "lg" && "h-9 [&_svg:not([class*='size-'])]:size-3.75",
          size === "xl" && "h-10 text-base [&_svg:not([class*='size-'])]:size-4"
        )}
      >
        <NumberInputPrimitive.Input
          data-slot="number-input-input"
          placeholder={placeholder}
          className={cn(
            "row-span-2 min-w-0 px-2.5 selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus:outline-none",
            size === "xs" && "px-2",
            size === "sm" && "px-2",
            size === "xl" && "px-3",
            inputClassName
          )}
          {...inputProps}
        />
        <NumberInputPrimitive.Increment
          data-slot="number-input-increment"
          className="inline-flex items-center justify-center border-s px-1 transition-colors hover:bg-accent hover:text-accent-foreground active:*:-translate-y-px"
        >
          <IconChevronUp />
        </NumberInputPrimitive.Increment>
        <NumberInputPrimitive.Decrement
          data-slot="number-input-decrement"
          className="inline-flex items-center justify-center border-s border-t px-1 transition-colors hover:bg-accent hover:text-accent-foreground active:*:translate-y-px"
        >
          <IconChevronDown />
        </NumberInputPrimitive.Decrement>
      </NumberInputPrimitive.Group>
    </NumberInputPrimitive.Root>
  );
}

export { NumberInputPrimitive };
