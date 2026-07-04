import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Handbook</NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-sm">
            <ul>
              {handbookLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink href={item.href} className="flex-col items-start gap-0.5">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/mui/base-ui" className="h-8">
            GitHub
          </NavigationMenuLink>
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
    description: "See what’s new in the latest Base UI versions.",
  },
  {
    href: "/react/overview/about",
    title: "About",
    description: "Learn more about Base UI and our mission.",
  },
] as const;

const handbookLinks = [
  {
    href: "/react/handbook/styling",
    title: "Styling",
    description:
      "Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.",
  },
  {
    href: "/react/handbook/animation",
    title: "Animation",
    description:
      "Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.",
  },
  {
    href: "/react/handbook/composition",
    title: "Composition",
    description:
      "Base UI components can be replaced and composed with your own existing components.",
  },
] as const;
