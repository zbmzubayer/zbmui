"use client";

import type { Item } from "fumadocs-core/page-tree";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarMenuButton } from "@zbmui/ui/components/sidebar";

export function DocsSidebarItemActive({
  children,
  item,
}: {
  children: React.ReactNode;
  item: Item;
}) {
  const pathname = usePathname();
  return (
    <SidebarMenuButton
      className="ps-3.5 hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50"
      isActive={item.url === pathname}
      render={<Link href={item.url} />}
    >
      {children}
    </SidebarMenuButton>
  );
}
