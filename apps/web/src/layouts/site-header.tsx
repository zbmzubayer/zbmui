import { NextThemeToggle } from "@zbmui/ui/shared/next-theme-toggle";

import { siteConfig } from "@/config/site-config";
import { SiteLogo } from "@/layouts/site-logo";
import { SiteMobileMenu } from "@/layouts/site-mobile-menu";
import { SiteNavItem } from "@/layouts/site-nav-item";
import { source } from "@/lib/source";

import { CommandSearchMenu } from "@/components/command-search-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-sidebar/80 backdrop-blur-sm after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border/50">
      <div className="container relative flex h-(--header-height) w-full items-center justify-between gap-2 px-4 sm:px-6">
        <SiteLogo />
        <div className="flex items-center gap-2">
          <CommandSearchMenu tree={source.pageTree} />
          <nav className="hidden items-center gap-2 lg:flex">
            {siteConfig.navItems.map((item) => (
              <SiteNavItem key={item.href} item={item} />
            ))}
          </nav>
          <NextThemeToggle />
          <SiteMobileMenu
            tree={source.pageTree}
            items={siteConfig.navItems}
            className="lg:hidden"
          />
        </div>
      </div>
    </header>
  );
}
