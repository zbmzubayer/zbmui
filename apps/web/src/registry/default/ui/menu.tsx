import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { IconChevronRight } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

const menuCreateHandle = MenuPrimitive.createHandle;

function Menu({ ...props }: React.ComponentProps<typeof MenuPrimitive.Root>) {
  return <MenuPrimitive.Root data-slot="menu" {...props} />;
}

function MenuPortal(props: React.ComponentProps<typeof MenuPrimitive.Portal>) {
  return <MenuPrimitive.Portal data-slot="menu-portal" {...props} />;
}

function MenuTrigger(props: React.ComponentProps<typeof MenuPrimitive.Trigger>) {
  return <MenuPrimitive.Trigger data-slot="menu-trigger" {...props} />;
}

function MenuPositioner({
  className,
  align = "center",
  side = "bottom",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Positioner>) {
  return (
    <MenuPrimitive.Positioner
      data-slot="menu-positioner"
      align={align}
      side={side}
      sideOffset={sideOffset}
      className={cn("z-50", className)}
      {...props}
    />
  );
}

function MenuPopup({
  children,
  className,
  positionerProps,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Popup> & {
  positionerProps?: React.ComponentProps<typeof MenuPositioner>;
}) {
  return (
    <MenuPrimitive.Portal>
      <MenuPositioner {...positionerProps}>
        <MenuPrimitive.Popup
          data-slot="menu-popup"
          className={cn(
            "flex not-[class*='w-']:min-w-(--anchor-width) origin-(--transform-origin) overflow-hidden rounded-lg border bg-popover not-dark:bg-clip-padding shadow-lg outline-none transition-[transform,scale,opacity] focus:outline-none data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0",
            className
          )}
          {...props}
        >
          <div className="max-h-(--available-height) w-full overflow-y-auto p-1">{children}</div>
        </MenuPrimitive.Popup>
      </MenuPositioner>
    </MenuPrimitive.Portal>
  );
}

function MenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "danger";
}) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "flex min-h-7 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none data-highlighted:data-[variant=danger]:bg-danger/10 data-disabled:pointer-events-none data-highlighted:bg-accent data-inset:ps-8 data-[variant=danger]:text-danger data-highlighted:text-accent-foreground data-disabled:opacity-50 [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4 [&>svg]:pointer-events-none [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

function MenuCheckboxItem({
  className,
  children,
  checked,
  variant = "default",
  indicatorPosition = "end",
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItem> & {
  variant?: "default" | "switch";
  indicatorPosition?: "start" | "end";
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menu-checkbox-item"
      checked={checked}
      className={cn(
        "grid min-h-7 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        variant === "switch"
          ? "grid-cols-[1fr_auto] [--switch-thumb:--spacing(3)]"
          : indicatorPosition === "start"
            ? "grid-cols-[1rem_1fr] pe-4"
            : "grid-cols-[1fr_1rem]",
        variant === "switch" && indicatorPosition === "start" && "grid-cols-[auto_1fr] pe-4",
        className
      )}
      {...props}
    >
      {variant === "switch" ? (
        <>
          <span
            className={cn(
              "flex items-center gap-2",
              indicatorPosition === "start" && "order-1 col-start-2 gap-1.5"
            )}
          >
            {children}
          </span>
          <MenuPrimitive.CheckboxItemIndicator
            data-slot="menu-checkbox-item-indicator"
            className={cn(
              "inset-shadow-[0_1px_--theme(--color-black/6%)] inline-flex h-[calc(var(--switch-thumb)+2px)] w-[calc(var(--switch-thumb)*2-2px)] shrink-0 items-center rounded-full p-px outline-none transition-[background-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-checked:bg-primary data-unchecked:bg-input data-disabled:opacity-50"
            )}
            keepMounted
          >
            <span className="pointer-events-none block aspect-square h-full in-[[data-slot=menu-checkbox-item][data-checked]]:origin-[var(--switch-thumb)_50%] origin-left in-[[data-slot=menu-checkbox-item][data-checked]]:translate-x-[calc(var(--switch-thumb)-4px)] in-[[data-slot=menu-checkbox-item]:active]:not-data-disabled:scale-x-110 in-[[data-slot=menu-checkbox-item]:active]:rounded-[var(--switch-thumb)/calc(var(--switch-thumb)*1.10)] rounded-full bg-background shadow-sm/5 will-change-transform [transition:translate_.15s,border-radius_.15s,scale_.1s_.1s,transform-origin_.15s]" />
          </MenuPrimitive.CheckboxItemIndicator>
        </>
      ) : (
        <>
          <span
            className={cn(
              "flex items-center gap-2",
              indicatorPosition === "start" && "order-1 col-start-2 gap-1.5"
            )}
          >
            {children}
          </span>
          <MenuPrimitive.CheckboxItemIndicator data-slot="menu-checkbox-item-indicator">
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
            </svg>
          </MenuPrimitive.CheckboxItemIndicator>
        </>
      )}
    </MenuPrimitive.CheckboxItem>
  );
}

function MenuRadioGroup(props: React.ComponentProps<typeof MenuPrimitive.RadioGroup>) {
  return <MenuPrimitive.RadioGroup data-slot="menu-radio-group" {...props} />;
}

function MenuRadioItem({
  className,
  children,
  indicatorPosition = "end",
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItem> & {
  indicatorPosition?: "start" | "end";
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menu-radio-item"
      className={cn(
        "grid min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default items-center gap-2 rounded-sm px-2 py-1 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        indicatorPosition === "start" ? "grid-cols-[1rem_1fr] pe-4" : "grid-cols-[1fr_1rem]",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center gap-1.5",
          indicatorPosition === "start" && "order-1 col-start-2"
        )}
      >
        {children}
      </span>
      <MenuPrimitive.RadioItemIndicator data-slot="menu-radio-item-indicator">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
        </svg>
      </MenuPrimitive.RadioItemIndicator>
    </MenuPrimitive.RadioItem>
  );
}
function MenuGroup(props: React.ComponentProps<typeof MenuPrimitive.Group>) {
  return <MenuPrimitive.Group data-slot="menu-group" {...props} />;
}

function MenuGroupLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.GroupLabel> & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-9 sm:data-inset:ps-8",
        className
      )}
      {...props}
    />
  );
}

function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) {
  return (
    <MenuPrimitive.Separator
      className={cn("mx-2 my-1 h-px bg-border", className)}
      data-slot="menu-separator"
      {...props}
    />
  );
}

function MenuShortcut({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="menu-shortcut"
      className={cn(
        "ms-auto font-medium font-sans text-muted-foreground/70 text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function MenuSub(props: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>) {
  return <MenuPrimitive.SubmenuRoot data-slot="menu-sub" {...props} />;
}

function MenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger> & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex min-h-7 items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-popup-open:bg-accent data-inset:ps-8 data-highlighted:text-accent-foreground data-popup-open:text-accent-foreground data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
      <IconChevronRight className="ms-auto -me-0.5 opacity-80" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function MenuSubPopup({
  className,
  positionerProps: {
    align = "start",
    side = "inline-end",
    alignOffset,
    sideOffset = 1,
    ...restPositionProps
  } = {},
  ...props
}: React.ComponentProps<typeof MenuPopup>) {
  return (
    <MenuPopup
      data-slot="menu-sub-popup"
      positionerProps={{
        align,
        alignOffset: alignOffset ?? (align !== "center" ? -5 : undefined),
        side,
        sideOffset,
        ...restPositionProps,
      }}
      {...props}
    />
  );
}

export {
  menuCreateHandle,
  menuCreateHandle as DropdownMenuCreateHandle,
  Menu,
  Menu as DropdownMenu,
  MenuPortal,
  MenuPortal as DropdownMenuPortal,
  MenuTrigger,
  MenuTrigger as DropdownMenuTrigger,
  MenuPositioner,
  MenuPositioner as DropdownMenuPositioner,
  MenuPopup,
  MenuPopup as DropdownMenuContent,
  MenuGroup,
  MenuGroup as DropdownMenuGroup,
  MenuItem,
  MenuItem as DropdownMenuItem,
  MenuCheckboxItem,
  MenuCheckboxItem as DropdownMenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioGroup as DropdownMenuRadioGroup,
  MenuRadioItem,
  MenuRadioItem as DropdownMenuRadioItem,
  MenuGroupLabel,
  MenuGroupLabel as DropdownMenuLabel,
  MenuSeparator,
  MenuSeparator as DropdownMenuSeparator,
  MenuShortcut,
  MenuShortcut as DropdownMenuShortcut,
  MenuSub,
  MenuSub as DropdownMenuSub,
  MenuSubTrigger,
  MenuSubTrigger as DropdownMenuSubTrigger,
  MenuSubPopup,
  MenuSubPopup as DropdownMenuSubContent,
};
