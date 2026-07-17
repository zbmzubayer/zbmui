import { Button } from "@/registry/default/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/registry/default/ui/tooltip";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
      <TooltipPopup arrow={false}>Helpful hint</TooltipPopup>
    </Tooltip>
  );
}
