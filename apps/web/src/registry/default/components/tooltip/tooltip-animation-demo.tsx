"use client";

import { IconAlertCircle, IconHelpCircle, IconInfoCircle } from "@tabler/icons-react";

import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
  tooltipCreateHandle,
} from "@/registry/default/ui/tooltip";

function InfoContent() {
  return <span>This is information about the feature</span>;
}

function HelpContent() {
  return <span>Need help?</span>;
}

function AlertContent() {
  return <span>Warning: This action cannot be undone</span>;
}

const demoTooltip = tooltipCreateHandle<React.ComponentType>();

export function TooltipAnimationDemo() {
  return (
    <TooltipProvider>
      <ButtonGroup className="flex *:not-last:rounded-r-none *:not-first:rounded-l-none">
        <TooltipTrigger
          render={<Button variant="outline" />}
          handle={demoTooltip}
          payload={InfoContent}
        >
          <IconInfoCircle />
        </TooltipTrigger>
        <TooltipTrigger
          render={<Button variant="outline" />}
          handle={demoTooltip}
          payload={HelpContent}
        >
          <IconHelpCircle />
        </TooltipTrigger>
        <TooltipTrigger
          render={<Button variant="outline" />}
          handle={demoTooltip}
          payload={AlertContent}
        >
          <IconAlertCircle />
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
