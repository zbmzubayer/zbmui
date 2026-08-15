import { Select as SelectPrimitive } from "@base-ui/react/select";
import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

export const Select = SelectPrimitive.Root;

export function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "xs" | "sm" | "default" | "lg" | "xl";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "inline-flex h-8 w-full select-none items-center justify-between gap-2 rounded-lg border border-input px-2.5 text-left text-sm shadow-xs outline-none transition-[color,shadow] hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-disabled:pointer-events-none data-disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [[data-disabled],:focus-visible,[aria-invalid],[data-pressed]]:shadow-none",
        "aria-invalid:border-danger aria-invalid:ring-danger/30 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        size === "xs" &&
          "h-6 gap-1.5 rounded px-2 text-xs focus-visible:ring-2 [&_svg:not([class*='size-'])]:size-3.5",
        size === "sm" &&
          "h-7 gap-1.5 rounded-sm px-2 text-[0.8125rem] focus-visible:ring-2 [&_svg:not([class*='size-'])]:size-3.5",
        size === "lg" && "h-9",
        size === "xl" && "h-10 px-3 text-base [&_svg:not([class*='size-'])]:size-4.5",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon data-slot="select-icon">
        <IconChevronDown className="-me-1" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn(
        "line-clamp-1 flex-1 truncate data-placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function SelectPositioner({
  className,
  align = "start",
  side = "bottom",
  sideOffset = 4,
  alignItemWithTrigger = false,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Positioner>) {
  return (
    <SelectPrimitive.Positioner
      data-slot="select-positioner"
      align={align}
      side={side}
      sideOffset={sideOffset}
      alignItemWithTrigger={alignItemWithTrigger}
      className={cn("z-50 min-w-(--anchor-width) select-none outline-hidden", className)}
      {...props}
    />
  );
}

export function SelectPopup({
  className,
  children,
  nativeScroll = false,
  portalProps,
  positionerProps,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup> & {
  nativeScroll?: boolean;
  portalProps?: React.ComponentProps<typeof SelectPrimitive.Portal>;
  positionerProps?: React.ComponentProps<typeof SelectPositioner>;
}) {
  return (
    <SelectPrimitive.Portal data-slot="select-portal" {...portalProps}>
      <SelectPositioner {...positionerProps}>
        <SelectPrimitive.Popup
          data-slot="select-popup"
          className="origin-(--transform-origin) overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-md transition-[scale,opacity] data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-ending-style:transition-none data-[side=none]:data-starting-style:transition-none data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0"
          {...props}
        >
          {!nativeScroll && (
            <SelectPrimitive.ScrollUpArrow
              data-slot="select-scroll-up-arrow"
              className="top-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[200%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-linear-to-b before:from-50% before:from-popover"
            >
              <IconChevronUp className="relative size-4" />
            </SelectPrimitive.ScrollUpArrow>
          )}
          <SelectPrimitive.List
            data-slot="select-list"
            className={cn(
              "max-h-(--available-height) overflow-y-auto p-1 [scrollbar-width:thin]",
              className
            )}
          >
            {children}
          </SelectPrimitive.List>
          {!nativeScroll && (
            <SelectPrimitive.ScrollDownArrow
              data-slot="select-scroll-down-arrow"
              className="bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[200%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-linear-to-t before:from-50% before:from-popover"
            >
              <IconChevronDown className="relative size-4" />
            </SelectPrimitive.ScrollDownArrow>
          )}
        </SelectPrimitive.Popup>
      </SelectPositioner>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "grid min-h-7 cursor-pointer select-none grid-cols-[1fr_1rem] items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="col-start-1 min-w-0">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator data-slot="select-item-indicator" className="col-start-2">
        <IconCheck />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

export function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

export function SelectGroup(props: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

export function SelectGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-group-label"
      className={cn("px-2 py-1.5 font-medium text-muted-foreground text-xs", className)}
      {...props}
    />
  );
}

export { SelectPrimitive };
