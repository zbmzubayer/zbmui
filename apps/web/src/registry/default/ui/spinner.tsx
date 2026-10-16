import { IconLoader2 } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

export function Spinner({ className, ...props }: React.ComponentProps<typeof IconLoader2>) {
  return (
    <IconLoader2
      aria-label="Loading"
      role="status"
      className={cn("animate-spin", className)}
      {...props}
    />
  );
}
