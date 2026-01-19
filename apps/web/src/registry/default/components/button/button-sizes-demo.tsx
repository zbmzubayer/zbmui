import { IconTrash } from "@tabler/icons-react";

import { Button } from "@/registry/default/ui/button";

export function ButtonSizesDemo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Button size="xs">Extra small</Button>
        <Button size="icon-xs">
          <IconTrash />
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="icon-sm">
          <IconTrash />
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button>Default</Button>
        <Button size="icon">
          <IconTrash />
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button size="lg">Large</Button>
        <Button size="icon-lg">
          <IconTrash />
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button size="xl">Extra large</Button>
        <Button size="icon-xl">
          <IconTrash />
        </Button>
      </div>
    </div>
  );
}
