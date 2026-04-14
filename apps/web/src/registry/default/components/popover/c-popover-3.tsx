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
    <div className="grid grid-cols-3 items-center gap-5">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Top</PopoverTrigger>
        <PopoverPopup positionerProps={{ side: "top" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Bottom</PopoverTrigger>
        <PopoverPopup positionerProps={{ side: "bottom" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Left</PopoverTrigger>
        <PopoverPopup positionerProps={{ side: "left" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Right</PopoverTrigger>
        <PopoverPopup positionerProps={{ side: "right" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Inline start</PopoverTrigger>
        <PopoverPopup positionerProps={{ side: "inline-start" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Inline end</PopoverTrigger>
        <PopoverPopup positionerProps={{ side: "inline-end" }}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description goes here.</PopoverDescription>
        </PopoverPopup>
      </Popover>
    </div>
  );
}
