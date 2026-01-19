import { cva, type VariantProps } from "class-variance-authority";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium text-sm outline-none transition-all duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-background",
    "[&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
  ],
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "h-9 px-[calc(--spacing(3)-1px)]",
        xs: "h-7 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-xs [&_svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 px-[calc(--spacing(2.5)-1px)]",
        lg: "h-10 px-[calc(--spacing(3.5)-1px)]",
        xl: "h-11 px-[calc(--spacing(4)-1px)] text-lg sm:h-10 sm:text-base [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
        icon: "size-9",
        "icon-xs":
          "size-7 rounded-md sm:size-6 not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-4 sm:not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "icon-xl": "size-11 [&_svg:not([class*='size-'])]:size-5",
      },
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        danger: "bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger/30",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        "danger-outline":
          "border-border bg-transparent bg-clip-padding text-danger shadow-xs not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:not-in-data-[slot=group]:bg-clip-border dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/4%)] dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/8%)] [:disabled,:active,[data-pressed]]:shadow-none [:hover,[data-pressed]]:border-danger/32 [:hover,[data-pressed]]:bg-danger/4",
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
