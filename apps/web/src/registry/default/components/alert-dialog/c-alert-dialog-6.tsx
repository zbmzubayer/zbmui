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

const positions: React.ComponentProps<typeof AlertDialogPopup>["position"][] = [
  "top-left",
  "top",
  "top-right",
  "top-center",
  "center",
  "bottom-center",
  "bottom-left",
  "bottom",
  "bottom-right",
];

export function AlertDialogDemo() {
  return (
    <div className="grid grid-cols-2 items-center gap-5 sm:grid-cols-3">
      {positions.map((position) => (
        <AlertDialog key={position}>
          <AlertDialogTrigger render={<Button className="capitalize" />}>
            {position}
          </AlertDialogTrigger>
          <AlertDialogPopup position={position}>
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
