import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/cn";

type InputProps = Omit<React.ComponentProps<typeof InputPrimitive>, "size"> & {
  size?: "xs" | "sm" | "default" | "lg" | "xl" | number;
};

function Input({ className, size = "default", ...props }: InputProps) {
  return (
    <InputPrimitive
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "aria-invalid:border-danger aria-invalid:ring-danger/30",
        size === "xs" && "h-7 px-2.5 text-xs focus-visible:ring-2",
        size === "sm" && "h-8 px-2.5",
        size === "lg" && "h-10 rounded-lg text-base",
        size === "xl" && "h-11 rounded-lg text-lg",
        props.type === "search" &&
          "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
        props.type === "file" &&
          "py-0 ps-0 file:me-3 file:h-full file:cursor-pointer file:border-0 file:bg-muted file:px-3 file:font-medium file:text-muted-foreground",
        className
      )}
      data-slot="input"
      size={typeof size === "number" ? size : undefined}
      {...props}
    />
  );
}

export { Input, type InputProps };
