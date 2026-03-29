import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { IconX } from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import { buttonVariants } from "@/registry/default/ui/button";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

const dialogCreateHandle = DialogPrimitive.createHandle;

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose(props: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

type DialogBackdropVariant = "opaque" | "blur" | "transparent";

function DialogBackdrop({
  className,
  variant = "blur",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Backdrop> & {
  variant?: DialogBackdropVariant;
}) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-backdrop"
      className={cn(
        "fixed inset-0 z-50 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0",
        variant === "opaque" && "bg-black/50",
        variant === "blur" && "bg-black/30 backdrop-blur-sm",
        variant === "transparent" && "bg-transparent",
        className
      )}
      {...props}
    />
  );
}

type DialogPopupPosition =
  | "top"
  | "center"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

function DialogViewport({
  className,
  position = "center",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Viewport> & {
  position?: DialogPopupPosition;
}) {
  return (
    <DialogPrimitive.Viewport
      data-slot="dialog-viewport"
      className={cn(
        "fixed inset-0 z-50 flex flex-col p-4",
        position === "top" && "items-center justify-start",
        position === "center" && "items-center justify-center",
        position === "bottom" && "items-center justify-end",
        position === "top-left" && "items-start justify-start",
        position === "top-right" && "items-end justify-start",
        position === "bottom-left" && "items-start justify-end",
        position === "bottom-right" && "items-end justify-end",
        position === "top-center" &&
          "grid grid-rows-[1fr_auto_4fr] justify-items-center *:data-[slot=dialog-popup]:row-start-2",
        position === "bottom-center" &&
          "grid grid-rows-[4fr_auto_1fr] justify-items-center *:data-[slot=dialog-popup]:row-start-2",
        className
      )}
      {...props}
    />
  );
}

function DialogPopup({
  className,
  children,
  bottomStickyOnMobile = false,
  showCloseButton = true,
  showNestedParent = false,
  backdropVariant,
  position,
  closeProps: { className: closeClassName, ...closeProps } = {},
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup> & {
  bottomStickyOnMobile?: boolean;
  showCloseButton?: boolean;
  showNestedParent?: boolean;
  backdropVariant?: DialogBackdropVariant;
  position?: DialogPopupPosition;
  closeProps?: React.ComponentProps<typeof DialogPrimitive.Close>;
}) {
  return (
    <DialogPortal>
      <DialogBackdrop variant={backdropVariant} />
      <DialogViewport
        position={position}
        className={cn(
          bottomStickyOnMobile && "max-sm:items-center max-sm:justify-end max-sm:p-0 max-sm:pt-12"
        )}
      >
        <DialogPrimitive.Popup
          data-slot="dialog-popup"
          className={cn(
            "relative flex max-h-full w-full max-w-lg origin-center scale-[calc(1-0.1*var(--nested-dialogs))] flex-col overflow-hidden rounded-2xl border bg-popover text-popover-foreground shadow-lg transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform data-nested:data-ending-style:translate-y-8 data-nested:data-starting-style:translate-y-8 data-nested-dialog-open:origin-top data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0",
            showNestedParent
              ? "-translate-y-[calc(2rem*var(--nested-dialogs))] opacity-[calc(1-0.1*var(--nested-dialogs))]"
              : "opacity-[calc(1-var(--nested-dialogs))]",
            bottomStickyOnMobile &&
              "max-sm:max-w-none max-sm:origin-bottom max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4",
            className
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close
              aria-label="Close"
              data-slot="dialog-close"
              className={cn(
                buttonVariants({ size: "icon", variant: "ghost" }),
                "absolute end-2 top-2",
                closeClassName
              )}
              {...closeProps}
            >
              <IconX />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Popup>
      </DialogViewport>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col gap-2 p-6 in-[[data-slot=dialog-popup]:has([data-slot=dialog-panel])]:pb-2 max-sm:px-4",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("font-heading font-medium text-xl leading-none", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-pretty text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "muted" }) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 p-4 sm:flex-row sm:justify-end sm:px-6",
        variant === "default" && "pt-2 pb-6",
        variant === "muted" && "border-t bg-muted/50",
        className
      )}
      {...props}
    />
  );
}

function DialogBody({
  className,
  scrollArea = true,
  scrollFade = true,
  scrollbarGutter,
  ...props
}: React.ComponentProps<"div"> & {
  scrollArea?: boolean;
  scrollFade?: React.ComponentProps<typeof ScrollArea>["scrollFade"];
  scrollbarGutter?: React.ComponentProps<typeof ScrollArea>["scrollbarGutter"];
}) {
  return scrollArea ? (
    <ScrollArea scrollFade={scrollFade} scrollbarGutter={scrollbarGutter}>
      <div
        data-slot="dialog-panel"
        className={cn(
          "p-6 in-[[data-slot=dialog-popup]:has([data-slot=dialog-header])]:pt-1 in-[[data-slot=dialog-popup]:has([data-slot=dialog-footer])]:pb-1 max-sm:px-4",
          className
        )}
        {...props}
      />
    </ScrollArea>
  ) : (
    <div data-slot="dialog-panel" className={cn("overflow-auto p-6", className)} {...props} />
  );
}

export {
  dialogCreateHandle,
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogBackdrop,
  DialogBackdrop as DialogOverlay,
  DialogPopup,
  DialogPopup as DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogViewport,
};
