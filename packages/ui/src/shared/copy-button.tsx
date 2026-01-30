"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";

import { Button } from "@zbmui/ui/components/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@zbmui/ui/components/tooltip";
import { useCopyToClipboard } from "@zbmui/ui/hooks/use-copy-to-clipboard";
import { cn } from "@zbmui/ui/lib/cn";

export function CopyButton({
  value,
  className,
  size = "icon",
  variant = "ghost",
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
  src?: string;
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            data-slot="copy-button"
            size={size}
            variant={variant}
            className={cn("opacity-70 hover:opacity-100 focus-visible:opacity-100", className)}
            onClick={() => copyToClipboard(value)}
            {...props}
          >
            <span className="sr-only">Copy</span>
            {isCopied ? <IconCheck strokeWidth={2} /> : <IconCopy strokeWidth={2} />}
          </Button>
        }
      />
      <TooltipContent>{isCopied ? "Copied" : "Copy to Clipboard"}</TooltipContent>
    </Tooltip>
  );
}
