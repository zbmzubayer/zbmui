import { IconBell, IconX } from "@tabler/icons-react";

import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="icon" />}>
        <IconBell />
      </PopoverTrigger>
      <PopoverPopup className="w-full max-w-xs">
        <PopoverClose
          aria-label="Close"
          className="absolute end-2 top-2"
          render={<Button size="icon-sm" variant="ghost" />}
        >
          <IconX />
        </PopoverClose>
        <div>
          <PopoverTitle>Notifications</PopoverTitle>
          <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
        </div>
        <PopoverClose render={<Button variant="outline" className="mt-5" />}>Close</PopoverClose>
      </PopoverPopup>
    </Popover>
  );
}
