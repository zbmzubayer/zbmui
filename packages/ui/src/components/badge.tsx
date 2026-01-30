import { cva, type VariantProps } from "class-variance-authority";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@zbmui/ui/lib/cn";

const badgeVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-transparent font-medium outline-none transition-[color,box-shadow] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "h-5 px-2 text-xs",
        sm: "h-4 px-1.5 text-[0.625rem]",
        lg: "h-6 px-3 text-sm",
      },
      variant: {
        primary: "bg-primary text-primary-foreground [button,a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [button,a&]:hover:bg-secondary/90",
        outline:
          "border-border bg-transparent dark:bg-input/30 [button,a&]:hover:bg-accent [button,a&]:hover:text-accent-foreground",
        info: "bg-info/15 text-info",
        success: "bg-success/15 text-success",
        warning: "bg-warning/15 text-warning",
        danger: "bg-danger text-white [button,a&]:hover:bg-danger/90",
        error: "bg-danger/15 text-danger",
      },
    },
  }
);

interface BadgeProps extends useRender.ComponentProps<"span"> {
  variant?: VariantProps<typeof badgeVariants>["variant"];
  size?: VariantProps<typeof badgeVariants>["size"];
}

function Badge({ className, variant, size, render, ...props }: BadgeProps) {
  const defaultProps = {
    "data-slot": "badge",
    className: cn(badgeVariants({ className, size, variant })),
  };

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(defaultProps, props),
    render,
  });
}

export { Badge, badgeVariants };
