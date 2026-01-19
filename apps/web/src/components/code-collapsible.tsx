"use client";

import { useState } from "react";

import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@zbmui/ui/components/collapsible";

import { cn } from "@/lib/cn";
import { Button, buttonVariants } from "@/registry/default/ui/button";
import { Separator } from "@/registry/default/ui/separator";

export function CodeCollapsible({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Collapsible
      className={cn("group/collapsible relative md:-mx-1", className)}
      onOpenChange={setIsOpened}
      open={isOpened}
      {...props}
    >
      <div className="absolute top-1.5 right-10 z-10 flex items-center">
        <CollapsibleTrigger
          render={
            <Button className="text-muted-foreground" variant="ghost" size="sm">
              {isOpened ? "Collapse" : "Expand"}
            </Button>
          }
        />
        <Separator className="mx-1.5 h-5" orientation="vertical" />
      </div>

      <CollapsiblePanel
        className="relative mt-6 h-full overflow-hidden data-closed:max-h-64 *:data-rehype-pretty-code-figure:rounded-b-none *:data-rehype-pretty-code-figure:border-b-0 [&>figure]:mt-0 [&>figure]:md:mx-0!"
        hidden={false}
        keepMounted
      >
        {children}
      </CollapsiblePanel>
      {/* <div className="absolute inset-x-0 -bottom-2 flex h-20 items-center justify-center bg-linear-to-b from-transparent via-50% via-background to-background">
        <CollapsibleTrigger className={cn(buttonVariants({ variant: "ghost" }))}>
        {isOpened ? "Collapse" : "Expand"}
        </CollapsibleTrigger>
        </div> */}

      <CollapsibleTrigger
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "w-full rounded-xl rounded-t-none border border-border text-xs data-panel-open:sticky data-panel-open:bottom-0"
        )}
      >
        {isOpened ? "Collapse" : "Expand"}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
