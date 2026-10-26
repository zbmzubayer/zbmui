# Sidebar

A composable application sidebar with desktop collapse states and a mobile sheet fallback.

## Install

```bash
npx @zbmui/cli@latest add sidebar --yes --cwd "<app-root>"
```

The CLI resolves required dependencies such as `Sheet`, `Tooltip`, `Separator`, `Skeleton`, and `use-mobile` as registry dependencies.

## Import

```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
```

## Anatomy

Core shell:

- `SidebarProvider` — shared state, mobile detection, cookie persistence, and `useSidebar()`
- `Sidebar` — desktop sidebar or mobile sheet
- `SidebarInset` — main content area
- `SidebarTrigger` — accessible toggle button
- `SidebarRail` — pointer-edge resize/toggle control
- `useSidebar()` — state and toggle hook

Content areas:

- `SidebarHeader`, `SidebarContent`, `SidebarFooter`
- `SidebarInput`, `SidebarSeparator`
- `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupAction`, `SidebarGroupContent`
- `SidebarMenu`, `SidebarMenuItem`
- `SidebarMenuButton`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuSkeleton`
- `SidebarMenuSub`, `SidebarMenuSubItem`, `SidebarMenuSubButton`

## Example

```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <SidebarTrigger />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive tooltip="Dashboard">
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>{/* User or workspace switcher */}</SidebarFooter>
  </Sidebar>
  <SidebarInset>{/* Main application content */}</SidebarInset>
</SidebarProvider>
```

## Options

`Sidebar`:

- `side="left" | "right"`
- `variant="sidebar" | "floating" | "inset"` — default `sidebar`
- `collapsible="offcanvas" | "icon" | "none"` — default `offcanvas`

`SidebarProvider`:

- Controlled with `open` and `onOpenChange`, or uncontrolled with `defaultOpen`.
- Persists desktop state in the `sidebar_state` cookie.
- Registers `Ctrl/Cmd+B` to toggle.

`SidebarMenuButton`:

- `variant="default" | "outline"`
- `size="default" | "sm" | "lg"`
- `isActive`
- `tooltip` supplies a tooltip when collapsed

## Accessibility

- Wrap the shell in one `SidebarProvider`; `useSidebar()` throws outside it.
- Use `SidebarTrigger` or an equivalently labeled control for opening/closing.
- Keep menu buttons as buttons and route-like subitems as links.
- Test keyboard access in expanded, collapsed-icon, and mobile-sheet states.

## Pitfalls

- Do not render `Sidebar` without `SidebarProvider`.
- Do not remove the mobile sheet fallback when the shell must work on small screens.
- Do not store main content outside `SidebarInset` if the layout depends on peer state.
- Avoid `SidebarMenuSkeleton` random-width changes after hydration in performance-sensitive routes.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/sidebar.md)
