import { Button } from "@/registry/default/ui/button";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/registry/default/ui/menu";

export function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger openOnHover render={<Button variant="outline">Hover</Button>} />
      <MenuPopup>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Folder</MenuItem>
        <MenuItem>Open recent</MenuItem>
      </MenuPopup>
    </Menu>
  );
}
