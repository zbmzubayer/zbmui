import { IconTrash } from "@tabler/icons-react";

import { Button } from "@/registry/default/ui/button";

export function ButtonDemo() {
  return (
    <div className="space-y-3 *:grid *:grid-cols-[1fr_auto_1fr] *:justify-items-start *:gap-3">
      <div>
        <Button size="xs">Extra small</Button>
        <Button size="icon-xs">
          <IconTrash />
        </Button>
        <Button size="xs">
          <IconTrash />
          Extra small
        </Button>
      </div>
      <div>
        <Button size="sm">Small</Button>
        <Button size="icon-sm">
          <IconTrash />
        </Button>
        <Button size="sm">
          <IconTrash />
          Small
        </Button>
      </div>
      <div>
        <Button size="default">Default</Button>
        <Button size="icon">
          <IconTrash />
        </Button>
        <Button size="default">
          <IconTrash />
          Default
        </Button>
      </div>
      <div>
        <Button size="lg">Large</Button>
        <Button size="icon-lg">
          <IconTrash />
        </Button>
        <Button size="lg">
          <IconTrash />
          Large
        </Button>
      </div>
      <div>
        <Button size="xl">Extra large</Button>
        <Button size="icon-xl">
          <IconTrash />
        </Button>
        <Button size="xl">
          <IconTrash />
          Extra large
        </Button>
      </div>
    </div>
  );
}
