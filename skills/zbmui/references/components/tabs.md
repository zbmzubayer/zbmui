# Tabs

Organizes related panels into one active tab at a time.

## Install

```bash
npx @zbmui/cli@latest add tabs --yes --cwd "<app-root>"
```

## Import

```tsx
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
```

## Anatomy

- `Tabs` — root state and orientation
- `TabsList` — tab strip with animated indicator
- `TabsTab` — one tab trigger
- `TabsPanel` — panel associated with a tab value
- `TabsPrimitive` — installed Base UI escape hatch

## Example

```tsx
<Tabs defaultValue="account" className="w-full">
  <TabsList aria-label="Account settings">
    <TabsTab value="account">Account</TabsTab>
    <TabsTab value="security">Security</TabsTab>
    <TabsTab value="billing">Billing</TabsTab>
  </TabsList>
  <TabsPanel value="account">Manage your profile.</TabsPanel>
  <TabsPanel value="security">Manage passwords and devices.</TabsPanel>
  <TabsPanel value="billing">Manage invoices and plans.</TabsPanel>
</Tabs>
```

## Options

- `TabsList` supports `variant="default"` and `variant="underline"`.
- Root supports Base UI orientation and activation behavior; read installed source before changing it.

## Accessibility

- Label the tab list when tabs are not self-evident.
- Keep tab text concise and panel-specific.
- Do not disable active panel content merely because a tab loses focus.
- Preserve arrow-key tab navigation.

## Pitfalls

- Do not use tabs for sequential wizard steps that must be completed in order.
- Do not load all panels as visible content; keep the inactive panel semantics intact.
- Do not remove `TabsList`; the animated indicator depends on it.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/tabs)
- [Base UI Tabs](https://base-ui.com/react/components/tabs)
