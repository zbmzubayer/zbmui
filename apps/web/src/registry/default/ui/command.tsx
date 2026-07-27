"use client";

import { Dialog as CommandDialogPrimitive } from "@base-ui/react/dialog";
import { IconSearch } from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteInputGroup,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteSeparator,
} from "@/registry/default/ui/autocomplete";

export const CommandDialog = CommandDialogPrimitive.Root;

export const CommandDialogPortal = CommandDialogPrimitive.Portal;

export const commandCreateHandle = CommandDialogPrimitive.createHandle;

export function CommandDialogTrigger(
  props: React.ComponentProps<typeof CommandDialogPrimitive.Trigger>
) {
  return <CommandDialogPrimitive.Trigger data-slot="command-dialog-trigger" {...props} />;
}

type CommandDialogBackdropVariant = "blur" | "opaque" | "transparent";

export function CommandDialogBackdrop({
  className,
  variant = "blur",
  ...props
}: React.ComponentProps<typeof CommandDialogPrimitive.Backdrop> & {
  variant?: CommandDialogBackdropVariant;
}) {
  return (
    <CommandDialogPrimitive.Backdrop
      data-slot="command-dialog-backdrop"
      className={cn(
        "fixed inset-0 z-50 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0",
        variant === "blur" && "bg-black/30 backdrop-blur-sm",
        variant === "opaque" && "bg-black/50",
        variant === "transparent" && "bg-transparent",
        className
      )}
      {...props}
    />
  );
}

type CommandDialogPopupPosition = "center" | "top-center";

export function CommandDialogViewport({
  className,
  position = "center",
  ...props
}: React.ComponentProps<typeof CommandDialogPrimitive.Viewport> & {
  position?: CommandDialogPopupPosition;
}) {
  return (
    <CommandDialogPrimitive.Viewport
      data-slot="command-dialog-viewport"
      className={cn(
        "fixed inset-0 z-50 flex flex-col p-4",
        position === "center" && "items-center justify-center",
        position === "top-center" &&
          "grid grid-rows-[1fr_auto_4fr] justify-items-center *:data-[slot=command-dialog-popup]:row-start-2",
        className
      )}
      {...props}
    />
  );
}

export function CommandDialogPopup({
  className,
  backdropVariant,
  position,
  portalProps,
  ...props
}: React.ComponentProps<typeof CommandDialogPrimitive.Popup> & {
  backdropVariant?: CommandDialogBackdropVariant;
  position?: CommandDialogPopupPosition;
  portalProps?: React.ComponentProps<typeof CommandDialogPrimitive.Portal>;
}): React.ReactElement {
  return (
    <CommandDialogPortal {...portalProps}>
      <CommandDialogBackdrop variant={backdropVariant} />
      <CommandDialogViewport position={position}>
        <CommandDialogPrimitive.Popup
          data-slot="command-dialog-popup"
          className={cn(
            "relative flex min-h-0 w-full min-w-0 max-w-xl -translate-y-[calc(1.25rem*var(--nested-dialogs))] scale-[calc(1-0.1*var(--nested-dialogs))] flex-col rounded-2xl border bg-muted text-popover-foreground opacity-[calc(1-0.1*var(--nested-dialogs))] shadow-lg/5 transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform data-nested:data-ending-style:translate-y-8 data-nested:data-starting-style:translate-y-8 data-nested-dialog-open:origin-top data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0",
            className
          )}
          {...props}
        />
      </CommandDialogViewport>
    </CommandDialogPortal>
  );
}

export function Command({
  autoHighlight = "always",
  keepHighlight = true,
  ...props
}: React.ComponentProps<typeof Autocomplete>) {
  return (
    <Autocomplete
      autoHighlight={autoHighlight}
      keepHighlight={keepHighlight}
      inline
      open
      {...props}
    />
  );
}

export function CommandInput({
  className,
  startAddon,
  ...props
}: React.ComponentProps<typeof AutocompleteInput>) {
  return (
    <AutocompleteInputGroup>
      <AutocompleteInput
        autoFocus
        startAddon={startAddon || <IconSearch />}
        className={cn("border-0 bg-transparent! shadow-none focus-visible:ring-0", className)}
        {...props}
      />
    </AutocompleteInputGroup>
  );
}

export function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteList>) {
  return (
    <AutocompleteList
      data-slot="command-list"
      className={cn("not-empty:scroll-py-2 not-empty:p-2", className)}
      {...props}
    />
  );
}

export function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteEmpty>) {
  return (
    <AutocompleteEmpty
      data-slot="command-empty"
      className={cn("not-empty:py-6", className)}
      {...props}
    />
  );
}

export function CommandPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-col bg-popover **:data-[slot=scroll-area-scrollbar]:my-2",
        "max-h-80 **:data-[slot=scroll-area-viewport]:data-has-overflow-y:pe-1 **:data-[slot=scroll-area]:flex **:data-[slot=scroll-area]:flex-col",
        className
      )}
      {...props}
    />
  );
}

export function CommandGroup(props: React.ComponentProps<typeof AutocompleteGroup>) {
  return <AutocompleteGroup data-slot="command-group" {...props} />;
}

export function CommandGroupLabel(props: React.ComponentProps<typeof AutocompleteGroupLabel>) {
  return <AutocompleteGroupLabel data-slot="command-group-label" {...props} />;
}

export const CommandCollection = AutocompleteCollection;

export function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteItem>) {
  return (
    <AutocompleteItem data-slot="command-item" className={cn("py-1.5", className)} {...props} />
  );
}

export function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteSeparator>) {
  return (
    <AutocompleteSeparator
      data-slot="command-separator"
      className={cn("my-2", className)}
      {...props}
    />
  );
}

export function CommandShortcut({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="command-shortcut"
      className={cn(
        "ms-auto font-medium font-sans text-muted-foreground/80 text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

export function CommandFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command-footer"
      className={cn(
        "flex items-center justify-between gap-2 border-t px-5 py-3 text-muted-foreground text-xs",
        className
      )}
      {...props}
    />
  );
}

export { CommandDialogPrimitive };
