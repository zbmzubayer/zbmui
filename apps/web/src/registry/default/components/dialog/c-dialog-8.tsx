import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

const backdropVariants: React.ComponentProps<typeof DialogPopup>["backdropVariant"][] = [
  "blur",
  "opaque",
  "transparent",
];

export function DialogDemo() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {backdropVariants.map((variant) => (
        <Dialog key={variant}>
          <DialogTrigger render={<Button variant="outline" className="capitalize" />}>
            {variant}
          </DialogTrigger>
          <DialogPopup backdropVariant={variant}>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
          </DialogPopup>
        </Dialog>
      ))}
    </div>
  );
}
