# Navigation Menu

A collection of navigation links with animated dropdown content.

## Install

```bash
npx @zbmui/cli@latest add navigation-menu --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
```

## Anatomy

- `NavigationMenu` — root plus portal, positioner, popup, arrow, and viewport
- `NavigationMenuList` — top-level navigation list
- `NavigationMenuItem` — one navigation section
- `NavigationMenuTrigger` — opens section content
- `NavigationMenuContent` — dropdown panel content
- `NavigationMenuLink` — semantic navigation link
- `NavigationSubMenu`, `NavigationSubMenuTrigger`, and `NavigationInlineSubMenu` support nested or inline sections

## Example

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Product</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/features">Features</NavigationMenuLink>
        <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Options

- Root accepts `portalProps`, `positionerProps`, `popupProps`, `viewportProps`, and `showArrow`.
- Default positioning uses collision padding on both sides.
- Use local source and Base UI navigation-menu docs for orientation and activation behavior.

## Accessibility

- Use semantic links for destinations and triggers only for dropdown sections.
- Ensure dropdown links remain keyboard reachable.
- Do not hide primary navigation only behind hover.

## Pitfalls

- Do not use navigation menu for application action menus; use `Menu`.
- Preserve root portal and viewport structure; they coordinate animation and sizing.
- Keep dropdown content concise enough for small screens.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/navigation-menu.md)
- [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
