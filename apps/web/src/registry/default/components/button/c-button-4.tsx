import { Button } from "@/registry/default/ui/button";

export function ButtonDemo() {
  return (
    <Button nativeButton={false} render={<div />}>
      Click me
    </Button>
  );
}
