import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field";

import { cn } from "@/lib/cn";
import type { Separator } from "@/registry/default/ui/separator";

export function OTPField({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof OTPFieldPrimitive.Root> & { size?: "default" | "lg" }) {
  return (
    <OTPFieldPrimitive.Root
      data-slot="otp-field"
      data-size={size}
      className={cn(
        "flex items-center gap-2 has-disabled:opacity-50 has-disabled:**:data-[slot=otp-field-input]:shadow-none has-disabled:**:data-[slot=otp-field-input]:before:shadow-none!",
        className
      )}
      {...props}
    />
  );
}

export function OTPFieldInput({
  className,
  ...props
}: React.ComponentProps<typeof OTPFieldPrimitive.Input>) {
  return (
    <OTPFieldPrimitive.Input
      data-slot="otp-field-input"
      spellCheck={false}
      className={cn(
        "size-8 rounded-lg border border-input bg-transparent text-center text-foreground text-sm shadow-xs/5 outline-none ring-ring/30 transition-shadow focus-visible:border-ring focus-visible:shadow-none focus-visible:ring-3 focus-visible:ring-ring/30 dark:bg-input/30",
        "in-[[data-slot=otp-field][data-size=lg]]:size-10 in-[[data-slot=otp-field][data-size=lg]]:text-base",
        "aria-invalid:border-danger aria-invalid:shadow-none aria-invalid:ring-danger/30",
        "placeholder:text-muted-foreground focus-visible:placeholder:text-transparent",
        "selection:bg-primary/50 selection:text-primary-foreground",
        className
      )}
      {...props}
    />
  );
}

export function OTPFieldSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <OTPFieldPrimitive.Separator
      data-slot="otp-field-separator"
      className={cn(
        "rounded-full bg-input data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-3",
        className
      )}
      {...props}
    />
  );
}

export { OTPFieldPrimitive };
