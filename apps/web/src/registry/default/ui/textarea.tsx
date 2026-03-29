import { cn } from "@/lib/cn";

function Textarea({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"textarea"> & { size?: "xs" | "sm" | "default" | "lg" | "xl" }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "field-sizing-content no-scrollbar min-h-16 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none transition-colors selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 max-sm:min-h-20 dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "aria-invalid:border-danger aria-invalid:ring-danger/30",
        size === "xs" && "min-h-14 rounded-sm px-2 py-1 text-xs focus-visible:ring-2",
        size === "sm" && "min-h-15 rounded-md px-2.5 py-1.5 text-[0.8125rem] focus-visible:ring-2",
        size === "lg" && "min-h-17",
        size === "xl" && "min-h-18 text-base",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
