import { Button } from "@/registry/default/ui/button";
import { Menu, MenuCheckboxItem, MenuPopup, MenuTrigger } from "@/registry/default/ui/menu";

export function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline">Settings</Button>} />
      <MenuPopup>
        <MenuCheckboxItem>Sidebar</MenuCheckboxItem>
        <MenuCheckboxItem>Status bar</MenuCheckboxItem>
        <MenuCheckboxItem>Activity bar</MenuCheckboxItem>
      </MenuPopup>
    </Menu>
  );
}
