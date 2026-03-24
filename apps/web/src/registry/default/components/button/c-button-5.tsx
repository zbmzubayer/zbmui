import { cn } from "@/lib/cn";
import { buttonVariants } from "@/registry/default/ui/button";

export function ButtonDemo() {
  return (
    <a href="#" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
      Login
    </a>
  );
}
