import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";

import { cn } from "@/lib/cn";

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxGroupPrimitive>) {
  return (
    <CheckboxGroupPrimitive
      data-slot="checkbox-group"
      className={cn("flex flex-col items-start gap-3", className)}
      {...props}
    />
  );
}

export { CheckboxGroupPrimitive };
