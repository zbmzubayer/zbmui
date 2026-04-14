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
    <div className="flex items-center gap-5">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Start</PopoverTrigger>
        <PopoverPopup positionerProps={{ align: "start" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Center</PopoverTrigger>
        <PopoverPopup positionerProps={{ align: "center" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>End</PopoverTrigger>
        <PopoverPopup positionerProps={{ align: "end" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
    </div>
  );
}
