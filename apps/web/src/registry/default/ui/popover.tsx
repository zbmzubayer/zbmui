import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cn } from "@/lib/cn";

export const popoverCreateHandle = PopoverPrimitive.createHandle;

export const Popover = PopoverPrimitive.Root;

export function PopoverTrigger(props: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

export function PopoverPortal(props: React.ComponentProps<typeof PopoverPrimitive.Portal>) {
  return <PopoverPrimitive.Portal data-slot="popover-portal" {...props} />;
}

export function PopoverPositioner({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Positioner>) {
  return (
    <PopoverPrimitive.Positioner
      data-slot="popover-positioner"
      sideOffset={sideOffset}
      className={cn(
        "z-50 h-(--positioner-height) max-h-(--available-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        className
      )}
      {...props}
    />
  );
}

export function PopoverViewport({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Viewport>) {
  return (
    <PopoverPrimitive.Viewport
      data-slot="popover-viewport"
      className={cn(
        "[--viewport-inline-padding:--spacing(4)]",
        "relative size-full overflow-clip px-(--viewport-inline-padding) py-4 data-instant:transition-none",

        "**:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-current:translate-x-0 **:data-current:opacity-100 **:data-current:transition-[translate,opacity] **:data-current:duration-200 **:data-current:ease-[cubic-bezier(0.22,1,0.36,1)]",

        "**:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-previous:translate-x-0 **:data-previous:opacity-100 **:data-previous:transition-[translate,opacity] **:data-previous:duration-200 **:data-previous:ease-[cubic-bezier(0.22,1,0.36,1)]",

        "data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-1/2 data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-1/2 data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:opacity-0 data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:opacity-0",

        "data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-1/2 data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-1/2 data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:opacity-0 data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:opacity-0",
        className
      )}
      {...props}
    />
  );
}

export function PopoverPopup({
  children,
  className,
  showArrow = false,
  tooltipStyle = false,
  portalProps,
  positionerProps,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Popup> & {
  showArrow?: boolean;
  tooltipStyle?: boolean;
  portalProps?: React.ComponentProps<typeof PopoverPortal>;
  positionerProps?: React.ComponentProps<typeof PopoverPrimitive.Positioner>;
}) {
  return (
    <PopoverPortal {...portalProps}>
      <PopoverPositioner sideOffset={showArrow ? 8 : 4} {...positionerProps}>
        <PopoverPrimitive.Popup
          data-slot="popover-popup"
          className={cn(
            "relative h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-2xl bg-popover p-4 text-popover-foreground shadow-lg/5 outline outline-border -outline-offset-1 transition-[width,height,opacity,scale] data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0",
            "duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none",
            tooltipStyle && "w-fit text-balance rounded-md px-2 py-1 text-xs shadow-md/5",
            className
          )}
          {...props}
        >
          {showArrow && <PopoverArrow />}
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPositioner>
    </PopoverPortal>
  );
}

export function PopoverClose(props: React.ComponentProps<typeof PopoverPrimitive.Close>) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

export function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Title>) {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("font-medium", className)}
      {...props}
    />
  );
}

export function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Description>) {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export function PopoverArrow({
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Arrow>) {
  return (
    <PopoverPrimitive.Arrow
      data-slot="popover-arrow"
      className={cn(
        "flex transition-[top,right,bottom,left] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-[side=bottom]:-top-2 data-[side=left]:-right-3.25 data-[side=top]:-bottom-2 data-[side=right]:-left-3.25 data-[side=bottom]:rotate-0 data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180 data-instant:transition-none"
      )}
      {...props}
    >
      {children || <ArrowSvg />}
    </PopoverPrimitive.Arrow>
  );
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-popover"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-border"
      />
    </svg>
  );
}

export { PopoverPrimitive };
