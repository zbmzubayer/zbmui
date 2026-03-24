import { buttonVariants } from "@zbmui/ui/components/button";

import { cn } from "@/lib/cn";

export function ButtonDemo() {
  return (
    <a href="#" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
      Login
    </a>
  );
}
