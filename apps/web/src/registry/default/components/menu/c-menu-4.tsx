import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Theme</MenuTrigger>
      <MenuPopup>
        <MenuRadioGroup>
          <MenuRadioItem value="light">Light</MenuRadioItem>
          <MenuRadioItem value="dark">Dark</MenuRadioItem>
          <MenuRadioItem value="system">System</MenuRadioItem>
        </MenuRadioGroup>
      </MenuPopup>
    </Menu>
  );
}
