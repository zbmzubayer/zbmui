import { NumberField as BaseUiNumberField } from "@base-ui/react/number-field";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { cn } from "@zbmui/ui/lib/cn";

interface NumberInputProps extends React.ComponentProps<typeof BaseUiNumberField.Root> {
  label?: React.ReactNode;
  placeholder?: string;
}

function NumberInput({ label, placeholder, className, ...props }: NumberInputProps) {
  return (
    <BaseUiNumberField.Root
      format={{ currency: "USD" }}
      className={cn("flex items-center gap-3", className)}
      {...props}
    >
      <BaseUiNumberField.Group
        className={cn(
          "grid h-9 grid-cols-[auto_1fr] grid-rows-[1fr_1fr] overflow-hidden rounded-md border border-input ps-3 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:ring-offset-0"
        )}
      >
        <BaseUiNumberField.Input
          placeholder={placeholder}
          className={cn(
            "row-span-2 selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus:outline-none"
          )}
        />
        <BaseUiNumberField.Increment className="inline-flex items-center justify-center border-s px-1 hover:bg-accent hover:text-accent-foreground">
          <IconChevronUp className="size-4" />
        </BaseUiNumberField.Increment>
        <BaseUiNumberField.Decrement className="inline-flex items-center justify-center border-s border-t px-1 hover:bg-accent hover:text-accent-foreground">
          <IconChevronDown className="size-4" />
        </BaseUiNumberField.Decrement>
      </BaseUiNumberField.Group>
    </BaseUiNumberField.Root>
  );
}

export type { NumberInputProps };
export { NumberInput };
