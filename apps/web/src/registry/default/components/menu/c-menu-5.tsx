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
      <MenuTrigger render={<Button variant="outline" />}>Dropdown menu</MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>View</MenuGroupLabel>
          <MenuCheckboxItem>Sidebar</MenuCheckboxItem>
          <MenuCheckboxItem>Status bar</MenuCheckboxItem>
          <MenuCheckboxItem>Activity bar</MenuCheckboxItem>
        </MenuGroup>
        <MenuGroup>
          <MenuGroupLabel>Theme</MenuGroupLabel>
          <MenuRadioGroup>
            <MenuRadioItem indicatorPosition="start" value="light">
              Light
            </MenuRadioItem>
            <MenuRadioItem indicatorPosition="start" value="dark">
              Dark
            </MenuRadioItem>
            <MenuRadioItem indicatorPosition="start" value="system">
              System
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuGroup>
          <MenuGroupLabel>Notifications</MenuGroupLabel>
          <MenuCheckboxItem variant="switch" indicatorPosition="start">
            Email notifications
          </MenuCheckboxItem>
          <MenuCheckboxItem variant="switch" indicatorPosition="start">
            Push notifications
          </MenuCheckboxItem>
          <MenuCheckboxItem variant="switch" indicatorPosition="start">
            SMS notifications
          </MenuCheckboxItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
