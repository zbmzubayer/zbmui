import Link from "next/link";

import { IconMenu } from "@tabler/icons-react";

import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/cn";
import type { source } from "@/lib/source";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { Sheet, SheetClose, SheetPopup, SheetTrigger } from "@/registry/default/ui/sheet";

export function SiteMobileMenu({
  tree,
  items,
  className,
}: {
  tree: typeof source.pageTree;
  items: typeof siteConfig.navItems;
  className?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button size="icon" variant="ghost" className={className}>
            <IconMenu className="size-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        }
      />
      <SheetPopup side="left">
        <div className="flex flex-col gap-8 overflow-auto p-6 pt-8">
          <div className="flex flex-col gap-3">
            <div className="font-medium text-sm">Menu</div>
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <MobileLink href={item.href} key={item.label}>
                  {item.label}
                </MobileLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {tree.children.map((group) => {
              if (group.type === "folder") {
                return (
                  <div className="flex flex-col gap-3" key={group.$id}>
                    <div className="font-medium text-sm">{group.name}</div>
                    <div className="flex flex-col gap-0.5">
                      {group.children.map(
                        (item) =>
                          item.type === "page" && (
                            <MobileLink href={item.url} key={item.url}>
                              {item.name}
                              {siteConfig.docs.pages_new.length > 0 &&
                                siteConfig.docs.pages_new.includes(item.url as never) && (
                                  <Badge variant="info">New</Badge>
                                )}
                            </MobileLink>
                          )
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </SheetPopup>
    </Sheet>
  );
}

function MobileLink({ className, href, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <SheetClose
      render={
        <Link
          className={cn("flex items-center gap-2 py-1.5 text-muted-foreground", className)}
          href={href}
          {...props}
        />
      }
    />
  );
}
