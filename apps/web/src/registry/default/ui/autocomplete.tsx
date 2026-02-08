import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { IconSelector, IconX } from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

function Autocomplete(props: React.ComponentProps<typeof AutocompletePrimitive.Root>) {
  return <AutocompletePrimitive.Root data-slot="autocomplete" {...props} />;
}

function AutocompleteTrigger(props: React.ComponentProps<typeof AutocompletePrimitive.Trigger>) {
  return <AutocompletePrimitive.Trigger data-slot="autocomplete-trigger" {...props} />;
}

function AutocompleteInput({
  className,
  showTrigger = false,
  showClear = false,
  startAddon,
  size = "default",
  ...props
}: Omit<React.ComponentProps<typeof AutocompletePrimitive.Input>, "size"> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
  size?: "xs" | "sm" | "default" | "lg" | "xl" | number;
}) {
  return (
    <div
      data-slot="autocomplete-input-wrapper"
      className="relative w-full not-has-[class*='w-']:max-w-fit"
    >
      {startAddon && (
        <div
          aria-hidden="true"
          data-slot="autocomplete-start-addon"
          className="pointer-events-none absolute inset-y-px start-px z-10 flex items-center ps-[calc(--spacing(3)-1px)] opacity-80 has-[+[data-size=sm]]:ps-[calc(--spacing(2.5)-1px)] [&_svg:not([class*='size-'])]:size-4 [&_svg]:-mx-0.5"
        >
          {startAddon}
        </div>
      )}
      <AutocompletePrimitive.Input
        data-slot="autocomplete-input"
        className={cn(
          "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "aria-invalid:border-danger aria-invalid:ring-danger/30",
          size === "xs" && "h-6 rounded-sm px-2 text-xs focus-visible:ring-2",
          size === "sm" && "h-7 rounded-md px-2.5 text-[0.8125rem] focus-visible:ring-2",
          size === "lg" && "h-9",
          size === "xl" && "h-10 text-base",
          startAddon &&
            "ps-[calc(--spacing(8.5)-1px)] data-[size=sm]:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(7.5)-1px)] sm:data-[size=sm]:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(7)-1px)] sm:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(8)-1px)]",
          size === "xs" &&
            "has-[~[data-slot=autocomplete-trigger],~[data-slot=autocomplete-clear]]:pe-6",
          size === "sm" &&
            "has-[~[data-slot=autocomplete-trigger],~[data-slot=autocomplete-clear]]:pe-7",
          size === "default" &&
            "has-[~[data-slot=autocomplete-trigger],~[data-slot=autocomplete-clear]]:pe-8",
          size === "lg" &&
            "has-[~[data-slot=autocomplete-trigger],~[data-slot=autocomplete-clear]]:pe-8.5",
          size === "xl" &&
            "has-[~[data-slot=autocomplete-trigger],~[data-slot=autocomplete-clear]]:pe-9.5",
          className
        )}
        size={typeof size === "number" ? size : undefined}
        {...props}
      />
      {showTrigger && (
        <AutocompleteTrigger
          className={cn(
            "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md opacity-80 outline-none transition-colors hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            size === "xs" && "end-0.5 size-5 rounded [&_svg:not([class*='size-'])]:size-3.5",
            size === "sm" && "end-0.5 size-6 rounded-sm [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "end-1 size-7",
            size === "xl" && "end-1 size-8 [&_svg:not([class*='size-'])]:size-4.5"
          )}
        >
          <IconSelector />
        </AutocompleteTrigger>
      )}
      {showClear && (
        <AutocompleteClear
          className={cn(
            "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full opacity-80 outline-none transition-colors hover:bg-accent hover:opacity-100 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            size === "xs" && "end-0.5 size-5 [&_svg:not([class*='size-'])]:size-3.5",
            size === "sm" && "end-0.5 size-6 [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "end-1 size-7",
            size === "xl" && "end-1 size-8 [&_svg:not([class*='size-'])]:size-4.5"
          )}
        >
          <IconX />
        </AutocompleteClear>
      )}
    </div>
  );
}

function AutocompletePositioner({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Positioner>) {
  return (
    <AutocompletePrimitive.Positioner
      data-slot="autocomplete-positioner"
      className={cn("z-50 flex select-none", className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  positionerProps,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Popup> & {
  positionerProps?: React.ComponentProps<typeof AutocompletePrimitive.Positioner>;
}) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePositioner {...positionerProps}>
        <AutocompletePrimitive.Popup
          data-slot="autocomplete-popup"
          className="flex max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-hidden rounded-lg border bg-popover shadow-lg/5 transition-[scale,opacity]"
          {...props}
        />
      </AutocompletePositioner>
    </AutocompletePrimitive.Portal>
  );
}

function AutocompleteList({
  className,
  scrollArea = true,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.List> & { scrollArea?: boolean }) {
  return scrollArea ? (
    <ScrollArea scrollbarGutter scrollFade>
      <AutocompletePrimitive.List
        data-slot="autocomplete-list"
        className={cn("not-empty:scroll-py-100 not-empty:p-1", className)}
        {...props}
      />
    </ScrollArea>
  ) : (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn(
        "not-empty:scroll-py-100 overflow-y-auto not-empty:p-1 [scrollbar-width:thin]",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteItem({
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

function AutocompleteSeparator({
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

function AutocompleteGroup({
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

function AutocompleteGroupLabel({
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

function AutocompleteEmpty({
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

function AutocompleteRow(props: React.ComponentProps<typeof AutocompletePrimitive.Row>) {
  return <AutocompletePrimitive.Row data-slot="autocomplete-row" {...props} />;
}

function AutocompleteValue(props: React.ComponentProps<typeof AutocompletePrimitive.Value>) {
  return <AutocompletePrimitive.Value data-slot="autocomplete-value" {...props} />;
}

function AutocompleteClear({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Clear>) {
  return (
    <AutocompletePrimitive.Clear
      data-slot="autocomplete-clear"
      className={cn(
        "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-[color,background-color,box-shadow,opacity] hover:opacity-100 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <IconX />
    </AutocompletePrimitive.Clear>
  );
}

function AutocompleteStatus({
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

function AutocompleteCollection(
  props: React.ComponentProps<typeof AutocompletePrimitive.Collection>
) {
  return <AutocompletePrimitive.Collection data-slot="autocomplete-collection" {...props} />;
}

const useAutocompleteFilter = AutocompletePrimitive.useFilter;

function groupAutocompleteItems<T extends { group: string }>(
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

export {
  Autocomplete,
  AutocompleteInput,
  AutocompleteTrigger,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteItem,
  AutocompleteSeparator,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteEmpty,
  AutocompleteValue,
  AutocompleteList,
  AutocompleteClear,
  AutocompleteStatus,
  AutocompleteRow,
  AutocompleteCollection,
  useAutocompleteFilter,
  groupAutocompleteItems,
};
