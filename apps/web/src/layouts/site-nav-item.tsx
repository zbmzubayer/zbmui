"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@zbmui/ui/components/button";

import { cn } from "@/lib/cn";

export function SiteNavItem({ item }: { item: { label: string; href: string } }) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        buttonVariants({ variant: "ghost" }),
        pathname.includes(item.href) && "text-primary"
      )}
      href={item.href}
    >
      {item.label}
    </Link>
  );
}
