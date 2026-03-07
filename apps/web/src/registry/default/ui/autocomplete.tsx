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

function AutocompleteValue(props: React.ComponentProps<typeof AutocompletePrimitive.Value>) {
  return <AutocompletePrimitive.Value data-slot="autocomplete-value" {...props} />;
}

function AutocompleteInput({
  className,
  showTrigger = false,
  showClear = false,
  startAddon,
  size = "default",
  triggerProps: { className: triggerClassName, ...triggerRestProps } = {},
  clearProps: { className: clearClassName, ...clearRestProps } = {},
  ...props
}: Omit<React.ComponentProps<typeof AutocompletePrimitive.Input>, "size"> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
  size?: "xs" | "sm" | "default" | "lg" | "xl" | number;
  triggerProps?: React.ComponentProps<typeof AutocompleteTrigger>;
  clearProps?: React.ComponentProps<typeof AutocompleteClear>;
}) {
  return (
    <>
      {startAddon && (
        <div
          aria-hidden="true"
          data-slot="autocomplete-start-addon"
          className={cn(
            "pointer-events-none absolute inset-y-px start-px z-10 flex items-center ps-2.25 [&_svg:not([class*='size-'])]:size-4 [&_svg]:opacity-80",
            size === "xs" && "ps-1.75 [&_svg:not([class*='size-'])]:size-3.25",
            size === "sm" && "ps-2 [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "ps-2.5",
            size === "xl" && "ps-2.75 [&_svg:not([class*='size-'])]:size-4.5"
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
          "h-8 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "aria-invalid:border-danger aria-invalid:ring-danger/30",
          size === "xs" && "h-6 rounded-sm px-2 text-xs focus-visible:ring-2",
          size === "sm" && "h-7 rounded-md px-2.5 text-[0.8125rem] focus-visible:ring-2",
          size === "lg" && "h-9",
          size === "xl" && "h-10 text-base",
          startAddon &&
            "ps-7.25 data-[size=lg]:ps-8 data-[size=sm]:ps-6.5 data-[size=xl]:ps-8.5 data-[size=xs]:ps-6.25",
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
        {...props}
      />
      {showTrigger && (
        <AutocompleteTrigger
          className={cn(
            "absolute end-0.5 top-1/2 inline-flex size-7 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md opacity-80 outline-none transition-[color,opacity] hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            size === "xs" && "size-5 rounded [&_svg:not([class*='size-'])]:size-3.5",
            size === "sm" && "size-6 rounded-sm [&_svg:not([class*='size-'])]:size-3.5",
            size === "lg" && "end-1 size-7",
            size === "xl" && "end-1 size-8 [&_svg:not([class*='size-'])]:size-4.5",
            triggerClassName
          )}
          {...triggerRestProps}
        >
          <IconSelector />
        </AutocompleteTrigger>
      )}
      {showClear && (
        <AutocompleteClear
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
        </AutocompleteClear>
      )}
    </>
  );
}

function AutocompleteInputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="autocomplete-input-group"
      className={cn("relative w-full has-disabled:opacity-50", className)}
      {...props}
    />
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
      sideOffset={sideOffset}
      className={cn("z-50 flex select-none", className)}
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
          className={cn(
            "flex not-has-data-[slot=scroll-area]:max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-hidden rounded-lg border bg-popover shadow-lg/5 transition-[transform,scale,opacity] data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0",
            className
          )}
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
    <ScrollArea scrollbarGutter scrollFade className="max-h-[min(var(--available-height),23rem)]">
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
  AutocompleteInputGroup,
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
