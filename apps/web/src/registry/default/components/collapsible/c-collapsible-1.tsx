import { IconChevronDown } from "@tabler/icons-react";

import { buttonVariants } from "@zbmui/ui/components/button";

import { cn } from "@/lib/cn";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "data-panel-open:[&_svg]:rotate-180"
        )}
      >
        Show recovery keys
        <IconChevronDown className="size-4" />
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <ul className="flex flex-col gap-1 py-2 text-muted-foreground text-sm">
          <li className="rounded-sm bg-muted px-2 py-1 font-mono">847362951023</li>
          <li className="rounded-sm bg-muted px-2 py-1 font-mono">293847561829</li>
          <li className="rounded-sm bg-muted px-2 py-1 font-mono">618293847562</li>
        </ul>
      </CollapsiblePanel>
    </Collapsible>
  );
}
