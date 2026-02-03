import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline">Settings</Button>} />
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>View</MenuGroupLabel>
          <MenuCheckboxItem closeOnClick>Sidebar</MenuCheckboxItem>
          <MenuCheckboxItem closeOnClick>Status bar</MenuCheckboxItem>
          <MenuCheckboxItem closeOnClick>Activity bar</MenuCheckboxItem>
        </MenuGroup>
        <MenuGroup>
          <MenuGroupLabel>Theme</MenuGroupLabel>
          <MenuRadioGroup>
            <MenuRadioItem closeOnClick value="light">
              Light
            </MenuRadioItem>
            <MenuRadioItem closeOnClick value="dark">
              Dark
            </MenuRadioItem>
            <MenuRadioItem closeOnClick value="system">
              System
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
