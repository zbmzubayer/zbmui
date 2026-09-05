import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { cn } from "@/lib/cn";

export const tooltipCreateHandle = TooltipPrimitive.createHandle;

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = TooltipPrimitive.Root;

export function TooltipTrigger(props: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export function TooltipPositioner({
  className,
  sideOffset = 10,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Positioner>) {
  return (
    <TooltipPrimitive.Positioner
      data-slot="tooltip-positioner"
      sideOffset={sideOffset}
      className={cn(
        (className =
          "z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none"),
        className
      )}
      {...props}
    />
  );
}

export function TooltipPopup({
  children,
  className,
  arrow = true,
  portalProps,
  positionerProps,
  ...props
}: TooltipPrimitive.Popup.Props & {
  arrow?: boolean;
  portalProps?: React.ComponentProps<typeof TooltipPrimitive.Portal>;
  positionerProps?: React.ComponentProps<typeof TooltipPrimitive.Positioner>;
}) {
  return (
    <TooltipPrimitive.Portal data-slot="tooltip-portal" {...portalProps}>
      <TooltipPositioner
        sideOffset={positionerProps?.sideOffset ?? (arrow ? 10 : 4)}
        {...positionerProps}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-popup"
          className={cn(
            "data-ending-style:transform-[scale(0.9)] data-starting-style:transform-[scale(0.9)] relative flex h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) text-balance rounded-md border border-border bg-popover text-xs transition-[width,height,opacity,transform] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-ending-style:opacity-0 data-starting-style:opacity-0 data-instant:transition-none",
            className
          )}
          {...props}
        >
          {arrow && (
            <TooltipPrimitive.Arrow
              data-slot="tooltip-arrow"
              className={cn(
                "before:transform-[translate(-50%,50%)_rotate(45deg)] relative block h-1.5 w-3 overflow-clip transition-[left,right] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:bottom-0 before:left-1/2 before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))] before:border before:border-border before:bg-popover before:content-[''] data-[side=bottom]:-top-1.5 data-[side=left]:-right-2.25 data-[side=top]:-bottom-1.5 data-[side=right]:-left-2.25 data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180 data-instant:transition-none"
              )}
            />
          )}
          <TooltipPrimitive.Viewport
            data-slot="tooltip-viewport"
            className="relative size-full overflow-clip px-(--viewport-inline-padding) py-1.5 [--viewport-inline-padding:--spacing(2)] **:data-current:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-ending-style:opacity-0 **:data-previous:data-starting-style:opacity-0 **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-current:translate-x-0 **:data-previous:translate-x-0 **:data-previous:truncate **:data-current:opacity-100 **:data-previous:opacity-100 **:data-current:transition-[translate,opacity] **:data-previous:transition-[translate,opacity] **:data-current:duration-[350ms,175ms] **:data-previous:duration-[350ms,175ms] **:data-current:ease-[cubic-bezier(0.22,1,0.36,1)] **:data-previous:ease-[cubic-bezier(0.22,1,0.36,1)] data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-1/2 data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-1/2 data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:opacity-0 data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:opacity-0 data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-1/2 data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-1/2 data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:opacity-0 data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:opacity-0 [[data-instant]_&_[data-current]]:transition-none [[data-instant]_&_[data-previous]]:transition-none"
          >
            {children}
          </TooltipPrimitive.Viewport>
        </TooltipPrimitive.Popup>
      </TooltipPositioner>
    </TooltipPrimitive.Portal>
  );
}

export { TooltipPopup as TooltipContent, TooltipPrimitive };
