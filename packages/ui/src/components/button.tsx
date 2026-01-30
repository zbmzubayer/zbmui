import { cva, type VariantProps } from "class-variance-authority";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@zbmui/ui/lib/cn";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium text-sm outline-none transition-all duration-200",
    "focus-visible:ring-3 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-md px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-md px-2 text-[0.8125rem] [&_svg:not([class*='size-'])]:size-3.5",
        default: "h-8 gap-1.5 px-2.5",
        lg: "h-9 px-3",
        xl: "h-10 px-3.5 text-base [&_svg:not([class*='size-'])]:size-4.5",
        "icon-xs":
          "size-6 rounded-md not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-md not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
        icon: "size-8",
        "icon-lg": "size-9",
        "icon-xl": "size-10 [&_svg:not([class*='size-'])]:size-4.5",
      },
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/30",

        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        ghost:
          "hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        info: "bg-info text-info-foreground hover:bg-info/90 focus-visible:ring-info/30",
        success:
          "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success/30",
        warning:
          "bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/30",
        danger: "bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger/30",
        "danger-soft": "bg-danger/15 text-danger hover:bg-danger/20 focus-visible:ring-danger/30",
      },
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
type ButtonProps = useRender.ComponentProps<"button"> & ButtonVariantProps;

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const defaultProps = {
    className: cn(buttonVariants({ variant, size, className })),
    "data-slot": "button",
    type: (render ? undefined : "button") as React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
  };

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(defaultProps, props),
    render,
  });
}

export { Button, buttonVariants };

export type { ButtonProps, ButtonVariantProps };
