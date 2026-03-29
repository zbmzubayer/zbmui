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
import { Button } from "@/registry/default/ui/button";

const backdropVariants: React.ComponentProps<typeof AlertDialogPopup>["backdropVariant"][] = [
  "blur",
  "opaque",
  "transparent",
];

export function AlertDialogDemo() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {backdropVariants.map((variant) => (
        <AlertDialog key={variant}>
          <AlertDialogTrigger render={<Button className="capitalize" />}>
            {variant}
          </AlertDialogTrigger>
          <AlertDialogPopup backdropVariant={variant}>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter variant="muted">
              <AlertDialogClose render={<Button variant="outline" />}>Cancel</AlertDialogClose>
              <AlertDialogClose render={<Button variant="danger" />}>
                Delete Account
              </AlertDialogClose>
            </AlertDialogFooter>
          </AlertDialogPopup>
        </AlertDialog>
      ))}
    </div>
  );
}
