"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";

import { Button } from "@zbmui/ui/components/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@zbmui/ui/components/tooltip";
import { useCopyToClipboard } from "@zbmui/ui/hooks/use-copy-to-clipboard";
import { cn } from "@zbmui/ui/lib/cn";

export function CopyButton({
  value,
  className,
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
            className={cn(
              "absolute top-1.5 right-1.5 z-3 bg-code opacity-70 hover:opacity-100 focus-visible:opacity-100",
              className
            )}
            data-slot="copy-button"
            onClick={() => copyToClipboard(value)}
            size="icon"
            variant={variant}
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
