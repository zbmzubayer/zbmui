"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { buttonVariants } from "@/registry/default/ui/button";

export function SiteNavItem({ item }: { item: { label: string; href: string } }) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        buttonVariants({ variant: "ghost" }),
        pathname.includes(item.href) && "bg-accent"
      )}
      href={item.href}
    >
      {item.label}
    </Link>
  );
}
