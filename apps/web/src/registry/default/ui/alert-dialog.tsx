import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

import { cn } from "@/lib/cn";

const alertDialogCreateHandle = AlertDialogPrimitive.createHandle;

function AlertDialog({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogPortal({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />;
}

function AlertDialogTrigger(props: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />;
}

type AlertDialogBackdropVariant = "opaque" | "blur" | "transparent";

function AlertDialogBackdrop({
  className,
  variant = "blur",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Backdrop> & {
  variant?: AlertDialogBackdropVariant;
}) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-backdrop"
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

type AlertDialogPopupPosition =
  | "top"
  | "center"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

function AlertDialogViewport({
  className,
  position = "center",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Viewport> & {
  position?: AlertDialogPopupPosition;
}) {
  return (
    <AlertDialogPrimitive.Viewport
      data-slot="alert-dialog-viewport"
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
          "grid grid-rows-[1fr_auto_4fr] justify-items-center *:data-[slot=alert-dialog-popup]:row-start-2",
        position === "bottom-center" &&
          "grid grid-rows-[4fr_auto_1fr] justify-items-center *:data-[slot=alert-dialog-popup]:row-start-2",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogPopup({
  className,
  bottomStickyOnMobile = false,
  showNestedParent = false,
  backdropVariant = "blur",
  position = "center",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Popup> & {
  bottomStickyOnMobile?: boolean;
  showNestedParent?: boolean;
  backdropVariant?: AlertDialogBackdropVariant;
  position?: AlertDialogPopupPosition;
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop variant={backdropVariant} />
      <AlertDialogViewport
        position={position}
        className={cn(
          bottomStickyOnMobile && "max-sm:items-center max-sm:justify-end max-sm:p-0 max-sm:pt-12"
        )}
      >
        <AlertDialogPrimitive.Popup
          data-slot="alert-dialog-popup"
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
        />
      </AlertDialogViewport>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 p-6 pb-4 text-center max-sm:px-4 sm:text-left", className)}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("font-heading font-medium text-xl leading-none", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-pretty text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "muted" }) {
  return (
    <div
      data-slot="alert-dialog-footer"
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

function AlertDialogClose(props: React.ComponentProps<typeof AlertDialogPrimitive.Close>) {
  return <AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />;
}

export {
  alertDialogCreateHandle,
  AlertDialog,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogBackdrop as AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogPopup as AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
  AlertDialogViewport,
};
