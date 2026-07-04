import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationSubMenu,
  NavigationSubMenuTrigger,
} from "@/registry/default/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-sm">
            <ul className="grid grid-cols-2">
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink href={item.href} className="flex-col items-start gap-0.5">
                    <span className="font-medium">{item.title}</span>
                    <p className="text-muted-foreground">{item.description}</p>
                  </NavigationMenuLink>
                </li>
              ))}
              <li>
                <NavigationSubMenu>
                  <NavigationMenuItem>
                    <NavigationSubMenuTrigger>
                      <div className="flex flex-col items-start gap-0.5">
                        <div className="font-medium">Handbook</div>
                        <div className="text-muted-foreground">How to use Base UI effectively.</div>
                      </div>
                    </NavigationSubMenuTrigger>
                    <NavigationMenuContent className="max-w-sm">
                      <ul>
                        {handbookLinks.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink
                              href={item.href}
                              className="flex-col items-start gap-0.5"
                            >
                              <h3 className="font-medium">{item.title}</h3>
                              <p className="text-muted-foreground">{item.description}</p>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationSubMenu>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const overviewLinks = [
  {
    href: "/react/overview/quick-start",
    title: "Quick Start",
    description: "Install and assemble your first component.",
  },
  {
    href: "/react/overview/accessibility",
    title: "Accessibility",
    description: "Learn how we build accessible components.",
  },
  {
    href: "/react/overview/releases",
    title: "Releases",
    description: "See what’s new in the latest Base UI versions.",
  },
] as const;

const handbookLinks = [
  {
    href: "/react/handbook/styling",
    title: "Styling",
    description:
      "Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.",
  },
  {
    href: "/react/handbook/animation",
    title: "Animation",
    description:
      "Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.",
  },
  {
    href: "/react/handbook/composition",
    title: "Composition",
    description:
      "Base UI components can be replaced and composed with your own existing components.",
  },
] as const;
