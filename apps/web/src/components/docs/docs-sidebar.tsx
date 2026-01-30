import { Badge } from "@zbmui/ui/components/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@zbmui/ui/components/sidebar";

import { siteConfig } from "@/config/site-config";
import type { source } from "@/lib/source";

import { DocsSidebarItemActive } from "@/components/docs/docs-sidebar-item-active";

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  return (
    <Sidebar
      className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar px-4 py-2">
        <div className="h-(--top-spacing) shrink-0" />
        {tree.children.map((item) => (
          <SidebarGroup className="gap-1" key={item.$id}>
            <SidebarGroupLabel className="h-7 px-0 text-muted-foreground">
              {item.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {item.type === "folder" && (
                <SidebarMenu className="gap-0.5">
                  {item.children.map((item) => {
                    return (
                      item.type === "page" && (
                        <SidebarMenuItem key={item.url}>
                          <DocsSidebarItemActive item={item}>
                            {item.name}
                            {siteConfig.docs.pages_new.length > 0 &&
                              siteConfig.docs.pages_new.includes(item.url as never) && (
                                <Badge variant="info">New</Badge>
                              )}
                          </DocsSidebarItemActive>
                        </SidebarMenuItem>
                      )
                    );
                  })}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
