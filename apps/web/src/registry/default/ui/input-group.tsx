"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/cn";
import { Button } from "@/registry/default/ui/button";

function InputGroup({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "xs" | "sm" | "default" | "lg" | "xl" }) {
  return (
    <div
      data-slot="input-group"
      data-size={size}
      role="group"
      className={cn(
        "group/input-group relative flex h-8 w-full min-w-0 items-center overflow-hidden rounded-lg border border-input text-sm outline-none transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[>textarea]:h-auto has-disabled:opacity-50 dark:bg-input/30 [&_svg:not([class*='size-'])]:size-4",
        "has-[input:focus-visible,textarea:focus-visible]:border-ring has-[input:focus-visible,textarea:focus-visible]:ring-3 has-[input:focus-visible,textarea:focus-visible]:ring-ring/50",
        "has-[input:focus-visible,textarea:focus-visible]:has-[input[aria-invalid],textarea[aria-invalid]]:ring-danger/30 has-[input[aria-invalid],textarea[aria-invalid]]:border-danger",
        "has-[>[data-align=inline-start]]:*:data-[align=inline-start]:ps-2 has-[>[data-align=inline-end]]:*:data-[align=inline-end]:pe-2 has-[>[data-align=inline-start]]:[&>input]:ps-1.5 has-[>[data-align=inline-end]]:[&>input]:pe-1.5",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input,textarea]:pt-1.5 has-[>[data-align=block-start]]:[&>input,textarea]:pb-1.5",
        size === "xs" &&
          "h-6 rounded-sm text-xs has-[input:focus-visible,textarea:focus-visible]:ring-2 has-[>[data-align=block-end]]:*:data-[align=block-end]:py-1 has-[>[data-align=block-start]]:*:data-[align=block-start]:py-1 has-[>[data-align=inline-start]]:*:data-[align=inline-start]:ps-1.5 has-[>[data-align=inline-end]]:*:data-[align=inline-end]:pe-1.5 has-[>[data-align=block-end]]:[&>input,textarea]:pt-1 has-[>[data-align=block-start]]:[&>input,textarea]:pb-1 has-[>[data-align=inline-start]]:[&>input]:ps-1 has-[>[data-align=inline-end]]:[&>input]:pe-1 [&_svg:not([class*='size-'])]:size-3 has-[>[data-align=block-end]]:*:[[data-align=block-end],input,textarea]:px-2 has-[>[data-align=block-start]]:*:[[data-align=block-start],input,textarea]:px-2",
        size === "sm" &&
          "h-7 rounded-md text-[0.8125rem] has-[input:focus-visible,textarea:focus-visible]:ring-2 has-[>[data-align=block-end]]:*:data-[align=block-end]:py-1.25 has-[>[data-align=block-start]]:*:data-[align=block-start]:py-1.25 has-[>[data-align=inline-start]]:*:data-[align=inline-start]:ps-1.75 has-[>[data-align=inline-end]]:*:data-[align=inline-end]:pe-1.75 has-[>[data-align=block-end]]:[&>input,textarea]:pt-1.25 has-[>[data-align=block-start]]:[&>input,textarea]:pb-1.25 has-[>[data-align=inline-start]]:[&>input]:ps-1.25 has-[>[data-align=inline-end]]:[&>input]:pe-1.25 [&_svg:not([class*='size-'])]:size-3.5 has-[>[data-align=block-end]]:*:[[data-align=block-end],input,textarea]:px-2 has-[>[data-align=block-start]]:*:[[data-align=block-start],input,textarea]:px-2",
        size === "lg" && "h-9",
        size === "xl" &&
          "h-10 text-base has-[>[data-align=block-end]]:*:data-[align=block-end]:py-2 has-[>[data-align=block-start]]:*:data-[align=block-start]:py-2 has-[>[data-align=inline-start]]:*:data-[align=inline-start]:ps-2.5 has-[>[data-align=inline-end]]:*:data-[align=inline-end]:pe-2.5 has-[>[data-align=block-end]]:[&>input,textarea]:pt-2 has-[>[data-align=block-start]]:[&>input,textarea]:pb-2 [&_svg:not([class*='size-'])]:size-4.5 has-[>[data-align=block-end]]:*:[[data-align=block-end],input,textarea]:px-3 has-[>[data-align=block-start]]:*:[[data-align=block-start],input,textarea]:px-3",
        className
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  "flex cursor-text select-none items-center justify-center gap-2 not-has-[button]:**:[svg:not([class*='opacity-'])]:opacity-80",
  {
    variants: {
      align: {
        "inline-start": "order-first h-full has-[>button]:ms-[-0.3rem] has-[>kbd]:ms-[-0.15rem]",
        "inline-end": "order-last h-full has-[>button]:ms-[-0.3rem] has-[>kbd]:me-[-0.15rem]",
        "block-start":
          "order-first w-full justify-start px-2.5 py-1.5 has-[>button]:[&>button]:-me-1 in-data-[size=sm]:has-[>button]:[&>button]:-me-0.75 [.border-b]:pb-2",
        "block-end":
          "order-last w-full justify-start px-2.5 py-1.5 has-[>button]:[&>button]:-me-1 in-data-[size=sm]:has-[>button]:[&>button]:-me-0.75 [.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
);

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onMouseDown={(e) => {
        const target = e.target as HTMLElement;
        const isInteractive = target.closest(
          "button, a, input, select, textarea, [role='button'], [role='combobox'], [role='listbox'], [data-slot='select-trigger']"
        );
        if (isInteractive) return;
        e.preventDefault();
        const parent = e.currentTarget.parentElement;
        const input = parent?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          "input, textarea"
        );
        if (input && !parent?.querySelector("input:focus, textarea:focus")) {
          input.focus();
        }
      }}
      {...props}
    />
  );
}

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      size={size}
      className={cn(
        "rounded-sm",
        size === "xs" && "rounded-[calc(var(--radius)-4px)]",
        size === "icon-xs" && "rounded-[calc(var(--radius)-4px)]",
        className
      )}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "line-clamp-1 inline-flex items-center justify-center gap-2 whitespace-nowrap text-muted-foreground [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

function InputGroupInput({ className, ...props }: React.ComponentProps<typeof InputPrimitive>) {
  return (
    <InputPrimitive
      data-slot="input-group-input"
      className={cn(
        "w-full flex-1 px-2.5 outline-none transition-colors selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

function InputGroupTextarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="input-group-textarea"
      className={cn(
        "flex-1 resize-none bg-transparent px-2.5",
        "field-sizing-content no-scrollbar min-h-16 w-full outline-none transition-colors selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground max-sm:min-h-20",
        className
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
