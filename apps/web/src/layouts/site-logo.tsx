import Link from "next/link";

import { cn } from "@/lib/cn";

export function SiteLogo({ className, ...props }: Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href="/"
      className={cn(
        "flex shrink-0 items-center gap-1.5 font-heading text-2xl sm:text-[1.625em]",
        className
      )}
      {...props}
    >
      <span>ZBM</span>
      <span className="text-muted-foreground/60">ui</span>
    </Link>
  );
}
