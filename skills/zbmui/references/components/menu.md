# Menu

A popup menu of actions, links, checkable options, radio options, and submenus.

## Install

```bash
npx @zbmui/cli@latest add menu --yes --cwd "<app-root>"
```

## Import

```tsx
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/components/ui/menu";
```

## Anatomy

- `Menu` — root state
- `MenuTrigger` — opens the menu
- `MenuPopup` — portal, positioner, and popup wrapper
- `MenuItem` — action or link row
- `MenuCheckboxItem` — checkable row
- `MenuRadioGroup` and `MenuRadioItem` — mutually exclusive choices
- `MenuGroup`, `MenuGroupLabel`, `MenuSeparator`, and `MenuShortcut` — organization
- `MenuSub`, `MenuSubTrigger`, `MenuSubPopup` — nested submenu
- `menuCreateHandle` supports imperative control; prefer root state where possible

## Example

```tsx
<Menu>
  <MenuTrigger render={<Button variant="outline">Open menu</Button>} />
  <MenuPopup>
    <MenuGroup>
      <MenuGroupLabel>Account</MenuGroupLabel>
      <MenuItem onClick={() => console.log("Profile")}>Profile</MenuItem>
      <MenuItem onClick={() => console.log("Settings")}>
        Settings <MenuShortcut>⌘,</MenuShortcut>
      </MenuItem>
    </MenuGroup>
    <MenuSeparator />
    <MenuItem variant="danger" onClick={() => console.log("Sign out")}>
      Sign out
    </MenuItem>
  </MenuPopup>
</Menu>
```

## Options

- `MenuItem` supports `variant="danger"` and `inset`.
- `MenuCheckboxItem` supports `variant="switch"` and `indicatorPosition`.
- `MenuRadioItem` supports `indicatorPosition`.
- `MenuPopup` supports `scrollArea` and `positionerProps`.
- Use Base UI root props from local source for modal, open, disabled, and hover behavior.

## Accessibility

- Use menus for actions or options, not site navigation.
- Keep item text actionable and specific.
- Do not disable keyboard focus or Escape behavior.
- Keep submenu triggers clear and reachable by keyboard.

## Pitfalls

- Do not use `Select` and `Menu` interchangeably.
- Do not nest unrelated interactive controls inside menu items.
- Do not remove the popup portal/positioner layers to solve clipping; diagnose the ancestor first.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/menu)
- [Base UI Menu](https://base-ui.com/react/components/menu)
