import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export const positions: React.ComponentProps<typeof DialogPopup>["position"][] = [
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

export function DialogDemo() {
  return (
    <div className="grid grid-cols-2 items-center gap-5 sm:grid-cols-3">
      {positions.map((position) => (
        <Dialog key={position}>
          <DialogTrigger render={<Button variant="outline" className="capitalize" />}>
            {position}
          </DialogTrigger>
          <DialogPopup position={position}>
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
