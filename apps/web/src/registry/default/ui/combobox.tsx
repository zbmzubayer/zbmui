"use client";

import { createContext, useContext, useRef } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { IconSelector, IconX } from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

const ComboboxContext = createContext<{ chipsRef: React.RefObject<HTMLDivElement | null> | null }>({
  chipsRef: null,
});

function Combobox(props: React.ComponentProps<typeof ComboboxPrimitive.Root>) {
  const chipsRef = useRef<HTMLDivElement | null>(null);

  return (
    <ComboboxContext.Provider value={{ chipsRef }}>
      <ComboboxPrimitive.Root {...props} />
    </ComboboxContext.Provider>
  );
}

function ComboboxInput({
  className,
  showTrigger = true,
  showClear = false,
  startAddon,
  size,
  inputGroupProps,
  triggerProps: { className: triggerClassName, ...triggerRestProps } = {},
  clearProps: { className: clearClassName, ...clearRestProps } = {},
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Input>, "size"> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
  size?: "xs" | "sm" | "default" | "lg" | "xl" | number;
  inputGroupProps?: React.ComponentProps<typeof ComboboxInputGroup>;
  triggerProps?: React.ComponentProps<typeof ComboboxTrigger>;
  clearProps?: React.ComponentProps<typeof ComboboxClear>;
}) {
  return (
    <ComboboxInputGroup {...inputGroupProps}>
      {startAddon && (
        <div
          aria-hidden="true"
          data-slot="combobox-start-addon"
          className={cn(
            "pointer-events-none absolute inset-y-px start-px z-10 flex items-center ps-2.25 opacity-80 [&_svg:not([class*='size-'])]:size-4",
            size === "xs" && "ps-1.75 [&_svg:not([class*='size-'])]:size-3.25",
            size === "sm" && "ps-2 [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "ps-2.5",
            size === "xl" && "ps-2.75 [&_svg:not([class*='size-'])]:size-4.5"
          )}
        >
          {startAddon}
        </div>
      )}
      <ComboboxPrimitive.Input
        data-slot="combobox-input"
        data-size={typeof size === "string" ? size : undefined}
        size={typeof size === "number" ? size : undefined}
        className={cn(
          "h-8 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "aria-invalid:border-danger aria-invalid:ring-danger/30",
          size === "xs" && "h-6 rounded-sm px-2 text-xs focus-visible:ring-2",
          size === "sm" && "h-7 rounded-md px-2.5 text-[0.8125rem] focus-visible:ring-2",
          size === "lg" && "h-9",
          size === "xl" && "h-10 text-base",
          startAddon &&
            "ps-7.25 data-[size=lg]:ps-8 data-[size=sm]:ps-6.5 data-[size=xl]:ps-8.5 data-[size=xs]:ps-6.25",
          size === "xs" && "has-[~[data-slot=combobox-trigger],~[data-slot=combobox-clear]]:pe-6",
          size === "sm" && "has-[~[data-slot=combobox-trigger],~[data-slot=combobox-clear]]:pe-7",
          size === "default" &&
            "has-[~[data-slot=combobox-trigger],~[data-slot=combobox-clear]]:pe-8",
          size === "lg" && "has-[~[data-slot=combobox-trigger],~[data-slot=combobox-clear]]:pe-8.5",
          size === "xl" && "has-[~[data-slot=combobox-trigger],~[data-slot=combobox-clear]]:pe-9.5",
          className
        )}
        {...props}
      />
      {showTrigger && (
        <ComboboxTrigger
          className={cn(
            "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md opacity-80 outline-none transition-[color,opacity] hover:opacity-100 has-[+[data-slot=combobox-clear]]:hidden [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            size === "xs" && "size-5 rounded [&_svg:not([class*='size-'])]:size-3.5",
            size === "sm" && "size-6 rounded-sm [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "end-1 size-7",
            size === "xl" && "end-1 size-8 [&_svg:not([class*='size-'])]:size-4.5",
            triggerClassName
          )}
          {...triggerRestProps}
        >
          <IconSelector />
        </ComboboxTrigger>
      )}
      {showClear && (
        <ComboboxClear
          className={cn(
            "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full opacity-80 outline-none transition-[color,opacity] hover:bg-accent hover:opacity-100 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            size === "xs" && "size-5 [&_svg:not([class*='size-'])]:size-3.5",
            size === "sm" && "size-6 [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "end-1 size-7",
            size === "xl" && "end-1 size-8 [&_svg:not([class*='size-'])]:size-4.5",
            clearClassName
          )}
          {...clearRestProps}
        >
          <IconX />
        </ComboboxClear>
      )}
    </ComboboxInputGroup>
  );
}

function ComboboxInputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="combobox-input-group"
      className={cn("relative w-full has-disabled:opacity-50", className)}
      {...props}
    />
  );
}

function ComboboxChipsInput({
  className,
  size,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Input>, "size"> & {
  size?: "xs" | "sm" | "default" | "lg" | "xl" | number;
}) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chips-input"
      data-size={typeof size === "string" ? size : undefined}
      size={typeof size === "number" ? size : undefined}
      className={cn(
        "min-w-12 flex-1 ps-2 pe-2 outline-none [[data-slot=combobox-chip]+&]:ps-0.5",
        className
      )}
      {...props}
    />
  );
}

function ComboboxChips({
  children,
  className,
  startAddon,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Chips> & {
  startAddon?: React.ReactNode;
}) {
  const { chipsRef } = useContext(ComboboxContext);

  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      ref={chipsRef}
      className={cn(
        "relative inline-flex min-h-8 w-full flex-wrap items-center gap-1 rounded-lg border border-input bg-background p-[calc(--spacing(1)-1px)] text-[0.8125rem] shadow-xs/5 outline-none ring-ring/50 transition-shadow *:h-6 focus-within:border-ring focus-within:ring-3 has-disabled:pointer-events-none has-aria-invalid:border-danger has-disabled:opacity-50 has-[:disabled,:focus-within,[aria-invalid]]:shadow-none has-aria-invalid:ring-danger/30 dark:not-has-disabled:bg-input/30",
        "has-data-[size=xs]:min-h-6 has-data-[size=xs]:gap-0.5 has-data-[size=xs]:rounded-sm has-data-[size=xs]:p-0.5 has-data-[size=xs]:text-[0.6875rem] has-data-[size=xs]:focus-within:ring-2 has-data-[size=xs]:*:h-4.5 has-data-[size=xs]:*:rounded-[calc(var(--radius-sm)-2px)]",
        "has-data-[size=sm]:min-h-7 has-data-[size=sm]:gap-0.5 has-data-[size=sm]:rounded-md has-data-[size=sm]:p-0.5 has-data-[size=sm]:text-xs has-data-[size=sm]:focus-within:ring-2 has-data-[size=sm]:*:h-5.5 has-data-[size=sm]:*:rounded-[calc(var(--radius-md)-2px)]",
        "has-data-[size=lg]:min-h-9 has-data-[size=lg]:text-sm has-data-[size=lg]:*:h-7",
        "has-data-[size=xl]:min-h-10 has-data-[size=xl]:text-[0.9375rem] has-data-[size=xl]:*:h-8",
        startAddon && "*:data-[slot=combobox-chips-input]:ps-1",
        className
      )}
      {...props}
    >
      {startAddon && (
        <div
          data-slot="combobox-start-addon"
          aria-hidden="true"
          className="flex shrink-0 items-center ps-2.25 opacity-80 has-[~[data-size=lg]]:ps-2.5 has-[~[data-size=sm]]:ps-2 has-[~[data-size=xl]]:ps-2.75 has-[~[data-size=xs]]:ps-1.75 [&_svg:not([class*='size-'])]:size-4 has-[~[data-size=sm]]:[&_svg:not([class*='size-'])]:size-3.5 has-[~[data-size=xl]]:[&_svg:not([class*='size-'])]:size-4.5 has-[~[data-size=xs]]:[&_svg:not([class*='size-'])]:size-3.25 [&_svg]:pointer-events-none"
        >
          {startAddon}
        </div>
      )}
      {children}
    </ComboboxPrimitive.Chips>
  );
}

function ComboboxChip({
  children,
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Chip>) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "flex items-center rounded-[calc(var(--radius-lg)-3px)] bg-accent ps-2 font-medium text-accent-foreground outline-none focus-within:ring-1 focus-within:ring-ring [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxChipRemove />
    </ComboboxPrimitive.Chip>
  );
}

function ComboboxChipRemove({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.ChipRemove>) {
  return (
    <ComboboxPrimitive.ChipRemove
      aria-label="Remove"
      data-slot="combobox-chip-remove"
      className={cn(
        "h-full shrink-0 cursor-pointer rounded-sm px-1.5 opacity-80 hover:opacity-100 [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    >
      <IconX />
    </ComboboxPrimitive.ChipRemove>
  );
}

function ComboboxTrigger(props: React.ComponentProps<typeof ComboboxPrimitive.Trigger>) {
  return <ComboboxPrimitive.Trigger data-slot="combobox-trigger" {...props} />;
}

function ComboboxPositioner({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Positioner>) {
  const { chipsRef } = useContext(ComboboxContext);

  return (
    <ComboboxPrimitive.Positioner
      data-slot="combobox-positioner"
      anchor={chipsRef ?? undefined}
      sideOffset={sideOffset}
      className={cn("z-50 flex select-none", className)}
      {...props}
    />
  );
}

function ComboboxPopup({
  className,
  positionerProps,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Popup> & {
  positionerProps?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>;
}) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPositioner {...positionerProps}>
        <ComboboxPrimitive.Popup
          data-slot="combobox-popup"
          className={cn(
            "flex not-has-data-[slot=scroll-area]:max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-hidden rounded-lg border bg-popover shadow-lg/5 transition-[transform,scale,opacity] duration-200 data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0",
            className
          )}
          {...props}
        />
      </ComboboxPositioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxList({
  className,
  scrollArea = true,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.List> & { scrollArea?: boolean }) {
  return scrollArea ? (
    <ScrollArea scrollbarGutter scrollFade className="max-h-[min(var(--available-height),23rem)]">
      <ComboboxPrimitive.List
        data-slot="combobox-list"
        className={cn("not-empty:scroll-py-1 not-empty:p-1", className)}
        {...props}
      />
    </ScrollArea>
  ) : (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "not-empty:scroll-py-1 overflow-y-auto not-empty:p-1 [scrollbar-width:thin]",
        className
      )}
      {...props}
    />
  );
}

function ComboboxItem({
  children,
  className,
  indicatorPosition = "end",
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Item> & {
  indicatorPosition?: "start" | "end";
}) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "grid min-h-7 cursor-default grid-cols-[1fr_1rem] items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        indicatorPosition === "start" && "grid-cols-[1rem_1fr] pe-4",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center gap-2",
          indicatorPosition === "start" && "order-1 col-start-2 gap-1.5"
        )}
      >
        {children}
      </span>
      <ComboboxPrimitive.ItemIndicator>
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/1500/svg"
        >
          <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
        </svg>
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
}

function ComboboxSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Separator>) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("mx-2 my-1 h-px bg-border last:hidden", className)}
      {...props}
    />
  );
}

function ComboboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Group>) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn("[[role=group]+&]:mt-1.5", className)}
      {...props}
    />
  );
}

function ComboboxGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-group-label"
      className={cn("px-2 py-1.5 font-medium text-muted-foreground text-xs", className)}
      {...props}
    />
  );
}

function ComboboxEmpty({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Empty>) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm",
        className
      )}
      {...props}
    />
  );
}

function ComboboxRow(props: React.ComponentProps<typeof ComboboxPrimitive.Row>) {
  return <ComboboxPrimitive.Row data-slot="combobox-row" {...props} />;
}

function ComboboxValue(props: React.ComponentProps<typeof ComboboxPrimitive.Value>) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxClear(props: React.ComponentProps<typeof ComboboxPrimitive.Clear>) {
  return <ComboboxPrimitive.Clear data-slot="combobox-clear" {...props} />;
}

function ComboboxStatus({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Status>) {
  return (
    <ComboboxPrimitive.Status
      data-slot="combobox-status"
      className={cn(
        "px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0",
        className
      )}
      {...props}
    />
  );
}

function ComboboxCollection(props: React.ComponentProps<typeof ComboboxPrimitive.Collection>) {
  return <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />;
}

const useComboboxFilter = ComboboxPrimitive.useFilter;

export {
  Combobox,
  ComboboxInput,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxPositioner,
  ComboboxPopup,
  ComboboxItem,
  ComboboxSeparator,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxEmpty,
  ComboboxValue,
  ComboboxList,
  ComboboxClear,
  ComboboxStatus,
  ComboboxRow,
  ComboboxCollection,
  ComboboxChips,
  ComboboxChip,
  useComboboxFilter,
};
