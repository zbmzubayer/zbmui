"use client";

import { IconClock, IconHeadphones, IconTrash } from "@tabler/icons-react";

import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
  tooltipCreateHandle,
} from "@/registry/default/ui/tooltip";

function HeadphoneContent() {
  return <span>Listen to audio preview</span>;
}

function ClockContent() {
  return <span>Set a timer</span>;
}

function TrashContent() {
  return <span>Delete: This action cannot be undone</span>;
}

const demoTooltip = tooltipCreateHandle<React.ComponentType>();

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <ButtonGroup className="flex *:not-last:rounded-r-none *:not-first:rounded-l-none">
        <TooltipTrigger
          render={<Button variant="outline" />}
          handle={demoTooltip}
          payload={HeadphoneContent}
        >
          <IconHeadphones />
        </TooltipTrigger>
        <TooltipTrigger
          render={<Button variant="outline" />}
          handle={demoTooltip}
          payload={ClockContent}
        >
          <IconClock />
        </TooltipTrigger>
        <TooltipTrigger
          render={<Button variant="outline" />}
          handle={demoTooltip}
          payload={TrashContent}
        >
          <IconTrash />
        </TooltipTrigger>
        <Tooltip handle={demoTooltip}>
          {({ payload: Payload }) => (
            <TooltipPopup>{Payload !== undefined && <Payload />}</TooltipPopup>
          )}
        </Tooltip>
      </ButtonGroup>
    </TooltipProvider>
  );
}
