import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { IconSelector, IconX } from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

export const Autocomplete = AutocompletePrimitive.Root;

export function AutocompleteTrigger(
  props: React.ComponentProps<typeof AutocompletePrimitive.Trigger>
) {
  return <AutocompletePrimitive.Trigger data-slot="autocomplete-trigger" {...props} />;
}

export function AutocompleteClear({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Clear>) {
  return (
    <AutocompletePrimitive.Clear
      data-slot="autocomplete-clear"
      className={cn(
        "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full outline-none transition-[color,opacity] not-data-disabled:hover:bg-accent hover:opacity-100 data-disabled:cursor-default [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <IconX />
    </AutocompletePrimitive.Clear>
  );
}

export const AutocompleteValue = AutocompletePrimitive.Value;

export function AutocompleteInput({
  className,
  showTrigger = false,
  showClear = false,
  startAddon,
  size = "default",
  inputGroupProps,
  triggerProps: { className: triggerClassName, ...triggerProps } = {},
  clearProps: { className: clearClassName, ...clearProps } = {},
  ...props
}: Omit<React.ComponentProps<typeof AutocompletePrimitive.Input>, "size"> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
  size?: "xs" | "sm" | "default" | "lg" | "xl" | number;
  inputGroupProps?: React.ComponentProps<typeof AutocompleteInputGroup>;
  triggerProps?: React.ComponentProps<typeof AutocompleteTrigger>;
  clearProps?: React.ComponentProps<typeof AutocompleteClear>;
}) {
  return (
    <AutocompleteInputGroup {...inputGroupProps}>
      {startAddon && (
        <div
          aria-hidden="true"
          data-slot="autocomplete-start-addon"
          className={cn(
            "pointer-events-none absolute inset-y-px start-px z-10 flex items-center justify-center ps-2 [&_svg:not([class*='size-'])]:size-4",
            size === "xs" && "ps-1.5 [&_svg:not([class*='size-'])]:size-3",
            size === "sm" && "ps-1.75 [&_svg:not([class*='size-'])]:size-3.5",
            size === "xl" && "ps-2.5 [&_svg:not([class*='size-'])]:size-4.5"
          )}
        >
          {startAddon}
        </div>
      )}
      <AutocompletePrimitive.Input
        data-slot="autocomplete-input"
        data-size={typeof size === "string" ? size : undefined}
        size={typeof size === "number" ? size : undefined}
        className={cn(
          "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "aria-invalid:border-danger aria-invalid:ring-danger/30",
          size === "xs" && "h-6 rounded-sm px-2 text-xs focus-visible:ring-2",
          size === "sm" && "h-7 rounded-md px-2 text-[0.8125rem] focus-visible:ring-2",
          size === "lg" && "h-9",
          size === "xl" && "h-10 px-3 text-base",
          startAddon && "ps-7.5 data-[size=sm]:ps-6 data-[size=xl]:ps-8.5 data-[size=xs]:ps-5.5",
          size === "xs" &&
            "has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:pe-6",
          size === "sm" &&
            "has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:pe-7",
          size === "default" &&
            "has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:pe-8",
          size === "lg" &&
            "has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:pe-8.5",
          size === "xl" &&
            "has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:pe-9.5",
          className
        )}
        {...props}
      />
      {showTrigger && (
        <AutocompleteTrigger
          className={cn(
            "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md not-data-disabled:opacity-80 outline-none transition-[color,opacity] hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden data-disabled:cursor-default [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            size === "xs" && "size-5 rounded [&_svg:not([class*='size-'])]:size-3.5",
            size === "sm" && "size-6 rounded-sm [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "end-1 size-7",
            size === "xl" && "end-1 size-8 [&_svg:not([class*='size-'])]:size-4.5",
            triggerClassName
          )}
          {...triggerProps}
        >
          <IconSelector />
        </AutocompleteTrigger>
      )}
      {showClear && (
        <AutocompleteClear
          className={cn(
            "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full outline-none transition-[color,opacity] not-data-disabled:hover:bg-accent hover:opacity-100 data-disabled:cursor-default [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            size === "xs" && "size-5 [&_svg:not([class*='size-'])]:size-3.5",
            size === "sm" && "size-6 [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "end-1 size-7",
            size === "xl" && "end-1 size-8 [&_svg:not([class*='size-'])]:size-4.5",
            clearClassName
          )}
          {...clearProps}
        >
          <IconX />
        </AutocompleteClear>
      )}
    </AutocompleteInputGroup>
  );
}

export function AutocompleteInputGroup({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.InputGroup>) {
  return (
    <AutocompletePrimitive.InputGroup
      data-slot="autocomplete-input-group"
      className={cn("relative w-full data-disabled:opacity-50", className)}
      {...props}
    />
  );
}

export function AutocompletePortal(
  props: React.ComponentProps<typeof AutocompletePrimitive.Portal>
) {
  return <AutocompletePrimitive.Portal data-slot="autocomplete-portal" {...props} />;
}

export function AutocompletePositioner({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Positioner>) {
  return (
    <AutocompletePrimitive.Positioner
      data-slot="autocomplete-positioner"
      sideOffset={sideOffset}
      className={cn("z-50 flex select-none", className)}
      {...props}
    />
  );
}

export function AutocompletePopup({
  className,
  portalProps,
  positionerProps,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Popup> & {
  portalProps?: React.ComponentProps<typeof AutocompletePortal>;
  positionerProps?: React.ComponentProps<typeof AutocompletePositioner>;
}) {
  return (
    <AutocompletePortal {...portalProps}>
      <AutocompletePositioner {...positionerProps}>
        <AutocompletePrimitive.Popup
          data-slot="autocomplete-popup"
          className={cn(
            "flex max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-hidden rounded-lg border bg-popover shadow-lg/5 transition-[transform,scale,opacity] data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0",
            className
          )}
          {...props}
        />
      </AutocompletePositioner>
    </AutocompletePortal>
  );
}

export function AutocompleteList({
  className,
  scrollArea = true,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.List> & { scrollArea?: boolean }) {
  return scrollArea ? (
    <ScrollArea scrollbarGutter scrollFade>
      <AutocompletePrimitive.List
        data-slot="autocomplete-list"
        className={cn("not-empty:scroll-py-1 not-empty:p-1", className)}
        {...props}
      />
    </ScrollArea>
  ) : (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn(
        "not-empty:scroll-py-1 overflow-y-auto not-empty:p-1 [scrollbar-width:thin]",
        className
      )}
      {...props}
    />
  );
}

export function AutocompleteItem({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Item>) {
  return (
    <AutocompletePrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "flex min-h-7 cursor-default select-none items-center rounded-sm px-2 py-1 text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export function AutocompleteSeparator({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Separator>) {
  return (
    <AutocompletePrimitive.Separator
      data-slot="autocomplete-separator"
      className={cn("mx-2 my-1 h-px bg-border last:hidden", className)}
      {...props}
    />
  );
}

export function AutocompleteGroup({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Group>) {
  return (
    <AutocompletePrimitive.Group
      data-slot="autocomplete-group"
      className={cn("[[role=group]+&]:mt-1.5", className)}
      {...props}
    />
  );
}

export function AutocompleteGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.GroupLabel>) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="autocomplete-group-label"
      className={cn("px-2 py-1.5 font-medium text-muted-foreground text-xs", className)}
      {...props}
    />
  );
}

export function AutocompleteEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Empty>) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn("not-empty:p-2 text-center text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export function AutocompleteRow(props: React.ComponentProps<typeof AutocompletePrimitive.Row>) {
  return <AutocompletePrimitive.Row data-slot="autocomplete-row" {...props} />;
}

export function AutocompleteStatus({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Status>) {
  return (
    <AutocompletePrimitive.Status
      data-slot="autocomplete-status"
      className={cn(
        "px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0",
        className
      )}
      {...props}
    />
  );
}

export const AutocompleteCollection = AutocompletePrimitive.Collection;

export const useAutocompleteFilter = AutocompletePrimitive.useFilter;

export function groupAutocompleteItems<T extends { group: string }>(
  tags: T[]
): { value: string; items: T[] }[] {
  const groups: Record<string, T[]> = {};

  tags.forEach((tag) => {
    (groups[tag.group] ??= []).push(tag);
  });

  return Object.entries(groups).map(([value, items]) => ({
    value,
    items,
  }));
}

export { AutocompletePrimitive };
