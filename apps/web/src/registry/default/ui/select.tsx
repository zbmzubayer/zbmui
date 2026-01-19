import { Select as SelectPrimitive } from "@base-ui/react/select";
import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

function Select(props: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default" | "lg";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "inline-flex h-9 w-full select-none items-center justify-between gap-2 rounded-lg border border-input px-3 text-left text-sm shadow-xs outline-none transition-[color,shadow] hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-disabled:pointer-events-none data-disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [[data-disabled],:focus-visible,[aria-invalid],[data-pressed]]:shadow-none",
        "aria-invalid:border-danger aria-invalid:ring-danger/30",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        size === "sm" && "h-8 gap-1.5 px-2.5",
        size === "lg" && "h-10",
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

function SelectValue({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
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

function SelectPositioner({
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
      className={cn("z-50 min-w-(--anchor-width) select-none", className)}
      {...props}
    />
  );
}

function SelectPopup({
  className,
  children,
  nativeScroll = false,
  showArrow = false,
  positionerProps,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup> & {
  nativeScroll?: boolean;
  showArrow?: boolean;
  positionerProps?: React.ComponentProps<typeof SelectPositioner>;
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPositioner {...positionerProps}>
        <SelectPrimitive.Popup
          data-slot="select-popup"
          className="origin-(--transform-origin) overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-md transition-[scale,opacity] has-data-[side=none]:scale-100 has-data-starting-style:scale-98 has-data-starting-style:opacity-0 has-data-[side=none]:transition-none"
          {...props}
        >
          {showArrow && (
            <SelectPrimitive.Arrow
              data-slot="tooltip-arrow"
              className="flex transition duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-[side=bottom]:-top-2 data-[side=left]:-right-3.25 data-[side=top]:-bottom-2 data-[side=right]:-left-3.25 data-[side=bottom]:rotate-0 data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180 data-instant:transition-none"
            >
              <ArrowSvg />
            </SelectPrimitive.Arrow>
          )}
          {!nativeScroll && (
            <SelectPrimitive.ScrollUpArrow
              data-slot="select-scroll-up-arrow"
              className="top-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[200%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-linear-to-b before:from-50% before:from-popover"
            >
              <IconChevronUp className="relative size-4.5 sm:size-4" />
            </SelectPrimitive.ScrollUpArrow>
          )}
          <SelectPrimitive.List
            className={cn("max-h-(--available-height) overflow-y-auto p-1", className)}
            data-slot="select-list"
          >
            {children}
          </SelectPrimitive.List>
          {!nativeScroll && (
            <SelectPrimitive.ScrollDownArrow
              className="bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[200%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-linear-to-t before:from-50% before:from-popover"
              data-slot="select-scroll-down-arrow"
            >
              <IconChevronDown className="relative size-4" />
            </SelectPrimitive.ScrollDownArrow>
          )}
        </SelectPrimitive.Popup>
      </SelectPositioner>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "grid min-h-8 cursor-pointer select-none grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1 ps-2 pe-4 text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-60 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator data-slot="select-item-indicator" className="col-start-1">
        <IconCheck />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="col-start-2 min-w-0">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
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

function SelectGroup(props: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectGroupLabel({
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

export function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-popover"
      />
      {/* <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-border"
      /> */}
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-border"
      />
    </svg>
  );
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPositioner,
  SelectPopup,
  SelectItem,
  SelectSeparator,
  SelectGroup,
  SelectGroupLabel,
};
