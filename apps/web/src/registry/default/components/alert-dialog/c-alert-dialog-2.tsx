import { buttonVariants } from "@zbmui/ui/components/button";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/default/ui/alert-dialog";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonVariants({ variant: "danger-soft" })}>
        Delete Account
      </AlertDialogTrigger>
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter variant="muted">
          <AlertDialogClose className={buttonVariants({ variant: "ghost" })}>
            Cancel
          </AlertDialogClose>
          <AlertDialogClose className={buttonVariants({ variant: "danger" })}>
            Delete Account
          </AlertDialogClose>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
