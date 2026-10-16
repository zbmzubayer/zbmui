import { cva, type VariantProps } from "class-variance-authority";

import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/cn";

const inputSizeVariants = cva("", {
  variants: {
    size: {
      xs: "h-6 rounded-sm px-2 text-xs focus-visible:ring-2",
      sm: "h-7 rounded-md px-2 text-[0.8125rem] focus-visible:ring-2",
      default: "h-8 rounded-lg px-2.5 py-1",
      lg: "h-9",
      xl: "h-10 px-3 text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type InputSize = VariantProps<typeof inputSizeVariants>["size"] | number;

export type InputProps = Omit<React.ComponentProps<typeof InputPrimitive>, "size"> & {
  size?: InputSize;
};

export function Input({ className, size, ...props }: InputProps) {
  return (
    <InputPrimitive
      data-slot="input"
      size={typeof size === "number" ? size : undefined}
      className={cn(
        "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "aria-invalid:border-danger aria-invalid:ring-danger/30",
        typeof size === "string" && inputSizeVariants({ size }),
        props.type === "search" &&
          "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
        props.type === "file" &&
          "py-0 ps-0 file:me-3 file:h-full file:cursor-pointer file:border-0 file:bg-muted file:px-3 file:font-medium file:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export { InputPrimitive };
