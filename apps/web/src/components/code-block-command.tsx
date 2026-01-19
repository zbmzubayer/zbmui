"use client";

import { useCallback, useMemo } from "react";

import { IconCheck, IconCopy, IconTerminal2 } from "@tabler/icons-react";

import { useCopyToClipboard } from "@zbmui/ui/hooks/use-copy-to-clipboard";

import { useCliConfigStore } from "@/hooks/use-cli-config";
import { Button } from "@/registry/default/ui/button";
import { ScrollArea } from "@/registry/default/ui/scroll-area";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/default/ui/tabs";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/registry/default/ui/tooltip";

export function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<"pre"> & {
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
}) {
  const storePackageManager = useCliConfigStore((state) => state.packageManager);
  const setPackageManager = useCliConfigStore((state) => state.setPackageManager);
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const packageManager = storePackageManager || "pnpm";
  const tabs = useMemo(() => {
    return {
      npm: __npm__,
      pnpm: __pnpm__,
      yarn: __yarn__,
      bun: __bun__,
    };
  }, [__npm__, __pnpm__, __yarn__, __bun__]);

  const copyCommand = useCallback(() => {
    const command = tabs[packageManager];

    if (!command) {
      return;
    }

    copyToClipboard(command);
  }, [packageManager, tabs, copyToClipboard]);

  return (
    <div>
      <Tabs className="gap-0" onValueChange={setPackageManager} value={packageManager}>
        <div className="flex items-center gap-2 border-border/64 border-b px-4 py-1 font-mono">
          <IconTerminal2 className="size-5 text-code-foreground" />
          <TabsList className="bg-transparent p-0 *:data-[slot=tab-indicator]:rounded-lg *:data-[slot=tab-indicator]:bg-accent *:data-[slot=tab-indicator]:shadow-none">
            {Object.entries(tabs).map(([key]) => {
              return (
                <TabsTab className="h-8 rounded-lg" key={key} value={key}>
                  {key}
                </TabsTab>
              );
            })}
          </TabsList>
        </div>
        <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:data-[orientation=horizontal]:mx-2 **:data-[slot=scroll-area-scrollbar]:data-[orientation=vertical]:my-2">
          {Object.entries(tabs).map(([key, value]) => {
            return (
              <TabsPanel className="mt-0 w-max px-4 py-3.5" key={key} value={key}>
                <pre>
                  <code
                    className="relative font-mono text-[0.8125rem] leading-none"
                    data-language="bash"
                  >
                    {value}
                  </code>
                </pre>
              </TabsPanel>
            );
          })}
        </ScrollArea>
      </Tabs>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              className="absolute top-1.5 right-1.5 z-3 opacity-70 hover:opacity-100 focus-visible:opacity-100"
              data-slot="copy-button"
              onClick={copyCommand}
              size="icon-sm"
              variant="ghost"
            >
              <span className="sr-only">Copy</span>
              {isCopied ? <IconCheck strokeWidth={2} /> : <IconCopy strokeWidth={2} />}
            </Button>
          }
        />
        <TooltipPopup>{isCopied ? "Copied" : "Copy to Clipboard"}</TooltipPopup>
      </Tooltip>
    </div>
  );
}
