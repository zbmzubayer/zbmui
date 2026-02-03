import { Button } from "@/registry/default/ui/button";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/registry/default/ui/menu";

export function MenuDemo() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="mb-2">Side</p>
        <div className="flex items-center gap-5">
          <Menu>
            <MenuTrigger render={<Button variant="outline">Top</Button>} />
            <MenuPopup positionerProps={{ side: "top" }}>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Folder</MenuItem>
              <MenuItem>Open recent</MenuItem>
            </MenuPopup>
          </Menu>
          <Menu>
            <MenuTrigger render={<Button variant="outline">Bottom</Button>} />
            <MenuPopup positionerProps={{ side: "bottom" }}>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Folder</MenuItem>
              <MenuItem>Open recent</MenuItem>
            </MenuPopup>
          </Menu>
          <Menu>
            <MenuTrigger render={<Button variant="outline">Left</Button>} />
            <MenuPopup positionerProps={{ side: "left" }}>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Folder</MenuItem>
              <MenuItem>Open recent</MenuItem>
            </MenuPopup>
          </Menu>
          <Menu>
            <MenuTrigger render={<Button variant="outline">Right</Button>} />
            <MenuPopup positionerProps={{ side: "right" }}>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Folder</MenuItem>
              <MenuItem>Open recent</MenuItem>
            </MenuPopup>
          </Menu>
        </div>
      </div>
      <div>
        <p className="mb-2">Align</p>
        <div className="flex items-center gap-5">
          <Menu>
            <MenuTrigger render={<Button variant="outline">Start</Button>} />
            <MenuPopup positionerProps={{ align: "start" }}>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Folder</MenuItem>
              <MenuItem>Open recent</MenuItem>
            </MenuPopup>
          </Menu>
          <Menu>
            <MenuTrigger render={<Button variant="outline">Center</Button>} />
            <MenuPopup positionerProps={{ align: "center" }}>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Folder</MenuItem>
              <MenuItem>Open recent</MenuItem>
            </MenuPopup>
          </Menu>
          <Menu>
            <MenuTrigger render={<Button variant="outline">End</Button>} />
            <MenuPopup positionerProps={{ align: "end" }}>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Folder</MenuItem>
              <MenuItem>Open recent</MenuItem>
            </MenuPopup>
          </Menu>
        </div>
      </div>
    </div>
  );
}
