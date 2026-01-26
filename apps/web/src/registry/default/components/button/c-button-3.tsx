import { IconTrash } from "@tabler/icons-react";

import { Button } from "@/registry/default/ui/button";

export function ButtonDemo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Button size="xs">Extra small</Button>
        <Button size="icon-xs">
          <IconTrash />
        </Button>
        <Button size="xs">
          <IconTrash />
          Extra small
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="icon-sm">
          <IconTrash />
        </Button>
        <Button size="sm">
          <IconTrash />
          Small
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button size="default">Default</Button>
        <Button size="icon">
          <IconTrash />
        </Button>
        <Button size="default">
          <IconTrash />
          Default
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button size="lg">Large</Button>
        <Button size="icon-lg">
          <IconTrash />
        </Button>
        <Button size="lg">
          <IconTrash />
          Large
        </Button>
      </div>
      <div className="flex items-center gap-3">
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
