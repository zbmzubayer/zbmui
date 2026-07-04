import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { IconCaretDownFilled, IconCaretRightFilled } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

function NavigationMenu({
  children,
  className,
  showArrow = true,
  portalProps,
  positionerProps = {
    sideOffset: 8,
    collisionPadding: { left: 16, right: 16 },
  },
  popupProps,
  viewportProps,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  showArrow?: boolean;
  portalProps?: React.ComponentProps<typeof NavigationMenuPortal>;
  positionerProps?: React.ComponentProps<typeof NavigationMenuPositioner>;
  popupProps?: React.ComponentProps<typeof NavigationMenuPopup>;
  viewportProps?: React.ComponentProps<typeof NavigationMenuViewport>;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn("min-w-max", className)}
      {...props}
    >
      {children}
      <NavigationMenuPortal {...portalProps}>
        <NavigationMenuPositioner {...positionerProps}>
          <NavigationMenuPopup {...popupProps}>
            {showArrow && <NavigationMenuArrow />}
            <NavigationMenuViewport {...viewportProps} />
          </NavigationMenuPopup>
        </NavigationMenuPositioner>
      </NavigationMenuPortal>
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("relative flex gap-px", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "inline-flex h-8 select-none items-center justify-center gap-1.5 rounded-lg px-2.5 font-medium text-sm hover:bg-accent focus-visible:outline-2 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuIcon>
        <IconCaretDownFilled />
      </NavigationMenuIcon>
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuIcon({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-icon"
      className={cn("transition-transform duration-200 data-popup-open:rotate-180", className)}
      {...props}
    />
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "h-full max-h-(--available-height) w-[calc(100vw-40px)] p-2 transition-[opacity,transform,translate,filter] duration-(--duration) ease-(--easing) data-ending-style:data-[activation-direction=left]:translate-x-1/2 data-ending-style:data-[activation-direction=right]:-translate-x-1/2 data-starting-style:data-[activation-direction=left]:-translate-x-1/2 data-starting-style:data-[activation-direction=right]:translate-x-1/2 data-ending-style:data-[activation-direction=down]:-translate-y-18 data-ending-style:data-[activation-direction=up]:translate-y-18 data-starting-style:data-[activation-direction=down]:translate-y-18 data-starting-style:data-[activation-direction=up]:-translate-y-18 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:blur-[2px] data-starting-style:blur-in-[2px]",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuPortal(props: React.ComponentProps<typeof NavigationMenuPrimitive.Portal>) {
  return <NavigationMenuPrimitive.Portal data-slot="navigation-menu-portal" {...props} />;
}

function NavigationMenuPositioner({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Positioner>) {
  return (
    <NavigationMenuPrimitive.Positioner
      data-slot="navigation-menu-positioner"
      className={cn(
        "[--duration:0.35s] [--easing:cubic-bezier(0.22,1,0.36,1)]",
        "h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-(--duration) ease-(--easing) data-instant:transition-none",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot="navigation-menu-viewport"
      className={cn("relative size-full overflow-hidden", className)}
      {...props}
    />
  );
}

function NavigationMenuPopup({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Popup>) {
  return (
    <NavigationMenuPrimitive.Popup
      data-slot="navigation-menu-popup"
      className={cn(
        "relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-2xl border bg-popover text-popover-foreground outline-none transition-[opacity,transform,width,height,scale] duration-(--duration) ease-(--easing) data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-150 data-ending-style:ease-[ease]",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuArrow({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Arrow>) {
  return (
    <NavigationMenuPrimitive.Arrow
      data-slot="navigation-menu-arrow"
      className={cn(
        "relative block h-1.5 w-3 overflow-clip transition-[left,right] duration-(--duration) ease-(--easing) before:absolute before:bottom-0 before:left-1/2 before:block before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))] before:-translate-x-1/2 before:translate-y-1/2 before:rotate-45 before:border before:border-border before:bg-popover before:content-[''] data-[side=bottom]:-top-1.5 data-[side=left]:-right-2.25 data-[side=top]:-bottom-1.5 data-[side=right]:-left-2.25 data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex items-center gap-2 rounded-lg p-2 text-sm hover:bg-muted focus-visible:outline-2 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function NavigationSubMenu({
  children,
  positionerProps = {
    align: "end",
    side: "right",
    alignOffset: -8,
    sideOffset: 8,
  },
  portalProps,
  popupProps,
  viewportProps,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  positionerProps?: React.ComponentProps<typeof NavigationMenuPositioner>;
  portalProps?: React.ComponentProps<typeof NavigationMenuPortal>;
  popupProps?: React.ComponentProps<typeof NavigationMenuPopup>;
  viewportProps?: React.ComponentProps<typeof NavigationMenuViewport>;
}) {
  return (
    <NavigationMenuPrimitive.Root data-slot="navigation-sub-menu" {...props}>
      {children}
      <NavigationMenuPortal {...portalProps}>
        <NavigationMenuPositioner {...positionerProps}>
          <NavigationMenuPopup {...popupProps}>
            <NavigationMenuViewport {...viewportProps} />
          </NavigationMenuPopup>
        </NavigationMenuPositioner>
      </NavigationMenuPortal>
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationSubMenuTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "flex w-full items-center gap-1 rounded-lg p-2 text-left font-medium text-sm hover:bg-muted focus-visible:outline-2 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuIcon className="ml-auto">
        <IconCaretRightFilled />
      </NavigationMenuIcon>
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationInlineSubMenu(props: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return <NavigationMenuPrimitive.Root data-slot="navigation-inline-sub-menu" {...props} />;
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuIcon,
  NavigationMenuContent,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuViewport,
  NavigationMenuPopup,
  NavigationMenuArrow,
  NavigationMenuLink,
  NavigationSubMenu,
  NavigationSubMenuTrigger,
  NavigationInlineSubMenu,
};
