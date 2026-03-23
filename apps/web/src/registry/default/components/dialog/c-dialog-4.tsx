import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Open Dialog</DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>
            Description text goes here. You can provide additional information about the dialog
            content or instructions for the user.
          </DialogDescription>
        </DialogHeader>
      </DialogPopup>
    </Dialog>
  );
}
