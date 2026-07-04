"use client";

import { useMediaQuery } from "@base-ui/react/unstable-use-media-query";

import {
  NavigationInlineSubMenu,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationSubMenuTrigger,
} from "@/registry/default/ui/navigation-menu";

export function NavigationMenuDemo() {
  const isDesktop = useMediaQuery("(min-width: 700px)", { defaultMatches: true });

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-2xl p-0">
            <NavigationInlineSubMenu
              orientation={isDesktop ? "vertical" : "horizontal"}
              defaultValue="developers"
            >
              <div className="grid grid-cols-1 overflow-hidden min-[700px]:grid-cols-[13rem_minmax(0,1fr)]">
                <NavigationMenuList className="overflow-x-auto p-2 md:flex-col md:overflow-y-clip md:overflow-x-visible md:border-r">
                  {audienceMenus.map((menu) => (
                    <NavigationMenuItem key={menu.value} value={menu.value}>
                      <NavigationSubMenuTrigger>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium">{menu.label}</span>
                          <span className="text-muted-foreground">{menu.hint}</span>
                        </div>
                      </NavigationSubMenuTrigger>
                      <NavigationMenuContent className="flex w-auto flex-col gap-4 p-4">
                        <div>
                          <h4 className="font-medium text-base">{menu.title}</h4>
                          <p className="text-muted-foreground text-sm">{menu.description}</p>
                        </div>
                        <ul className="-mx-2">
                          {menu.links.map((link) => (
                            <li key={link.href}>
                              <NavigationMenuLink
                                href={link.href}
                                className="flex-col items-start gap-0.5"
                              >
                                <h5 className="font-medium">{link.title}</h5>
                                <p className="text-muted-foreground">{link.description}</p>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
                <NavigationMenuViewport />
              </div>
            </NavigationInlineSubMenu>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-md p-4 pb-2">
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="font-normal text-base">{guidesPanel.title}</h4>
                <p className="mt-1 text-muted-foreground text-sm">{guidesPanel.description}</p>
              </div>
              <ul className="-mx-2">
                {guideLinks.map((link) => (
                  <li key={link.href}>
                    <NavigationMenuLink href={link.href} className="flex-col items-start gap-0.5">
                      <h5 className="m-0 font-normal text-sm leading-4">{link.title}</h5>
                      <p className="m-0 text-neutral-500 text-sm dark:text-neutral-400">
                        {link.description}
                      </p>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/react/overview/releases" className="h-8">
            Releases
          </NavigationMenuLink>
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

export const audienceMenus = [
  {
    value: "developers",
    label: "Developers",
    hint: "Go from idea to UI faster.",
    title: "Build product UI without giving up control",
    description:
      "Start with accessible parts and shape them to your app instead of working around a preset design system.",
    links: [
      {
        href: "/react/overview/quick-start",
        title: "Quick start",
        description: "Install Base UI and get your first interactive primitive on screen fast.",
      },
      {
        href: "/react/handbook/composition",
        title: "Composition",
        description: "Wrap and combine parts to match your product structure without hacks.",
      },
    ],
  },
  {
    value: "systems",
    label: "Design Systems",
    hint: "Keep patterns aligned across teams.",
    title: "Turn shared standards into working components",
    description:
      "Connect tokens, states, and accessibility rules once, then give every product team the same solid starting point.",
    links: [
      {
        href: "/react/handbook/styling",
        title: "Styling",
        description: "Map tokens and component states to your own CSS or utility setup.",
      },
      {
        href: "/react/overview/accessibility",
        title: "Accessibility",
        description: "Review keyboard support and semantic defaults before anything ships.",
      },
      {
        href: "/react/components/tooltip",
        title: "Tooltip",
        description: "Set one clear pattern for lightweight help, hints, and field guidance.",
      },
      {
        href: "/react/components/popover",
        title: "Popover",
        description: "Handle richer anchored panels like menus, inspectors, and onboarding.",
      },
    ],
  },
  {
    value: "managers",
    label: "Engineering Leads",
    hint: "Roll out shared UI without drag.",
    title: "Give squads clear defaults and room to move",
    description:
      "Use the docs to align on quality bars, upgrades, and extension points while still leaving teams space to customize.",
    links: [
      {
        href: "/react/overview/releases",
        title: "Releases",
        description: "Track version changes and migration notes before upgrades surprise teams.",
      },
      {
        href: "/react/handbook/typescript",
        title: "TypeScript",
        description: "See how the primitives type custom wrappers and shared abstractions.",
      },
      {
        href: "/react/handbook/forms",
        title: "Forms",
        description: "Standardize validation and field patterns teams reach for constantly.",
      },
    ],
  },
  {
    value: "startups",
    label: "Startups",
    hint: "Ship polished basics while things change.",
    title: "Get sturdy UI foundations in place early",
    description:
      "Cover the hard interaction details now so your team can spend more time on the product ideas that actually differentiate you.",
    links: [
      {
        href: "/react/overview/quick-start",
        title: "Quick start",
        description: "Get the package installed and your first component working in minutes.",
      },
      {
        href: "/react/components/menu",
        title: "Menu",
        description: "Add action menus with keyboard support and focus handling already done.",
      },
      {
        href: "/react/components/dialog",
        title: "Dialog",
        description: "Launch settings or upgrade flows without rebuilding focus management.",
      },
    ],
  },
] as const;

export const guidesPanel = {
  title: "Where teams usually start",
  description:
    "These are the docs people reach for first when they are turning a prototype into shared UI.",
} as const;

export const guideLinks = [
  {
    href: "/react/overview/accessibility",
    title: "Accessibility handbook",
    description: "Take a practical pass over focus order, semantics, and keyboard support.",
  },
  {
    href: "/react/handbook/composition",
    title: "Composition handbook",
    description: "Learn when to wrap parts, share behavior, and expose flexible APIs.",
  },
  {
    href: "/react/handbook/styling",
    title: "Styling handbook",
    description: "Apply tokens and state styles without fighting the underlying markup.",
  },
] as const;
