import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open Popover</PopoverTrigger>
      <PopoverPopup showArrow positionerProps={{ className: "max-w-xs w-full", side: "top" }}>
        <PopoverTitle>Title</PopoverTitle>
        <PopoverDescription>Description goes here.</PopoverDescription>
      </PopoverPopup>
    </Popover>
  );
}
