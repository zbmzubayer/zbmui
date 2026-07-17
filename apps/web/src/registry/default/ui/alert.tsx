import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const alertVariants = cva(
  "grid w-full items-start gap-x-2 rounded-xl border px-3.5 py-3 text-sm has-data-[slot=alert-indicator]:has-data-[slot=alert-action]:grid-cols-[auto_1fr_auto] has-data-[slot=alert-action]:grid-cols-[1fr_auto] has-data-[slot=alert-indicator]:grid-cols-[auto_1fr] *:[svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      variant: "secondary",
    },
    variants: {
      variant: {
        primary: "border-primary/30 bg-primary/10 text-primary",
        secondary:
          "border-border bg-secondary/50 text-secondary-foreground [&>svg]:text-muted-foreground",
        info: "border-info/30 bg-info/5 text-info",
        success: "border-success/30 bg-success/5 text-success",
        warning: "border-warning/30 bg-warning/5 text-warning",
        error: "border-danger/30 bg-danger/5 text-danger",
      },
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      className={cn(alertVariants({ variant }), className)}
      role="alert"
      {...props}
    />
  );
}

function AlertIndicator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-indicator"
      className={cn(
        "inline-flex items-center justify-center *:[svg:not([class*='size-'])]:size-5",
        className
      )}
      {...props}
    />
  );
}

function AlertContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-content"
      className={cn("flex flex-1 flex-col items-start", className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-title" className={cn("font-medium", className)} {...props} />;
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn(
        "flex gap-1 sm:col-start-2 [[data-slot=alert-indicator]~[data-slot=alert-content]~&]:col-start-2 max-sm:[[data-slot=alert-indicator]~[data-slot=alert-content]~&]:mt-2 sm:[[data-slot=alert-indicator]~[data-slot=alert-content]~&]:col-start-3",
        className
      )}
      {...props}
    />
  );
}

function AlertClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="alert-close"
      className={cn(
        "col-start-2 sm:[[data-slot=alert-indicator]~[data-slot=alert-content]~&]:col-start-3",
        className
      )}
      {...props}
    />
  );
}

export {
  Alert,
  AlertIndicator,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertAction,
  AlertClose,
};
