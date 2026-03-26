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
    <div className="flex flex-wrap items-center gap-5">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>Blur</DialogTrigger>
        <DialogPopup backdropVariant="blur">
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogPopup>
      </Dialog>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>Opaque</DialogTrigger>
        <DialogPopup backdropVariant="opaque">
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogPopup>
      </Dialog>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>Transparent</DialogTrigger>
        <DialogPopup backdropVariant="transparent">
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogPopup>
      </Dialog>
    </div>
  );
}
