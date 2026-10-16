"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cn } from "@/lib/cn";

export function Checkbox({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  size?: "xs" | "sm" | "default" | "lg" | "xl";
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "inline-flex size-4 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded border-input text-primary-foreground outline-none ring-ring focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background data-disabled:cursor-not-allowed data-unchecked:border data-checked:bg-primary data-indeterminate:bg-primary data-disabled:opacity-50 dark:data-unchecked:bg-input/30",
        "aria-invalid:border-danger aria-invalid:ring-danger/30",
        size === "xs" && "size-3 [&_svg]:size-2.5",
        size === "sm" && "size-3.5 [&_svg]:size-2.75",
        size === "lg" && "size-5 [&_svg]:size-3.5",
        size === "xl" && "size-5.5 [&_svg]:size-4",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex size-full items-center justify-center data-unchecked:hidden"
        render={(props: React.ComponentProps<"span">, state: CheckboxPrimitive.Indicator.State) => (
          <span {...props}>
            {state.indeterminate ? (
              <svg
                aria-hidden="true"
                className="size-3"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.252 12h13.496" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="size-3"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
              </svg>
            )}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  );
}

export { CheckboxPrimitive };
