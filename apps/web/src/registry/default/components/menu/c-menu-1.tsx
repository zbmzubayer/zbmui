"use client";

import { useState } from "react";

import {
  IconBell,
  IconCreditCard,
  IconDeviceDesktop,
  IconDeviceFloppy,
  IconDots,
  IconDownload,
  IconEye,
  IconFile,
  IconFileCode,
  IconFileText,
  IconFolder,
  IconFolderOpen,
  IconFolderSearch,
  IconHelpCircle,
  IconKeyboard,
  IconLanguage,
  IconLayout,
  IconLogout,
  IconMail,
  IconMoon,
  IconPalette,
  IconSettings,
  IconShield,
  IconSun,
  IconUser,
} from "@tabler/icons-react";

import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/default/ui/menu";

export function MenuDemo() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [theme, setTheme] = useState("light");

  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline">Menu</Button>} />
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>File</MenuGroupLabel>
          <MenuItem>
            <IconFile />
            New File
            <MenuShortcut>⌘N</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <IconFolder />
            New Folder
            <MenuShortcut>⇧⌘N</MenuShortcut>
          </MenuItem>
          <MenuSub>
            <MenuSubTrigger>
              <IconFolderOpen />
              Open Recent
            </MenuSubTrigger>
            <MenuSubPopup>
              <MenuGroup>
                <MenuGroupLabel>Recent Projects</MenuGroupLabel>
                <MenuItem>
                  <IconFileCode />
                  Project Alpha
                </MenuItem>
                <MenuItem>
                  <IconFileCode />
                  Project Beta
                </MenuItem>
                <MenuSub>
                  <MenuSubTrigger>
                    <IconDots />
                    More Projects
                  </MenuSubTrigger>
                  <MenuSubPopup>
                    <MenuItem>
                      <IconFileCode />
                      Project Gamma
                    </MenuItem>
                    <MenuItem>
                      <IconFileCode />
                      Project Delta
                    </MenuItem>
                  </MenuSubPopup>
                </MenuSub>
              </MenuGroup>
              <MenuSeparator />
              <MenuGroup>
                <MenuItem>
                  <IconFolderSearch />
                  Browse...
                </MenuItem>
              </MenuGroup>
            </MenuSubPopup>
          </MenuSub>
          <MenuSeparator />
          <MenuItem>
            <IconDeviceFloppy />
            Save
            <MenuShortcut>⌘S</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <IconDownload />
            Export
            <MenuShortcut>⇧⌘E</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>View</MenuGroupLabel>
          <MenuCheckboxItem>
            <IconLayout />
            Show Sidebar
          </MenuCheckboxItem>
          <MenuCheckboxItem>
            <IconEye />
            Show Status Bar
          </MenuCheckboxItem>
          <MenuSub>
            <MenuSubTrigger>
              <IconPalette />
              Theme
            </MenuSubTrigger>
            <MenuSubPopup>
              <MenuGroup>
                <MenuGroupLabel>Appearance</MenuGroupLabel>
                <MenuRadioGroup value={theme} onValueChange={setTheme}>
                  <MenuRadioItem value="light">
                    <IconSun />
                    Light
                  </MenuRadioItem>
                  <MenuRadioItem value="dark">
                    <IconMoon />
                    Dark
                  </MenuRadioItem>
                  <MenuRadioItem value="system">
                    <IconDeviceDesktop />
                    System
                  </MenuRadioItem>
                </MenuRadioGroup>
              </MenuGroup>
            </MenuSubPopup>
          </MenuSub>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Account</MenuGroupLabel>
          <MenuItem>
            <IconUser />
            Profile
            <MenuShortcut>⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem disabled>
            <IconCreditCard />
            Billing
          </MenuItem>
          <MenuSub>
            <MenuSubTrigger>
              <IconSettings />
              Settings
            </MenuSubTrigger>
            <MenuSubPopup>
              <MenuGroup>
                <MenuGroupLabel>Preferences</MenuGroupLabel>
                <MenuItem>
                  <IconKeyboard />
                  Keyboard Shortcuts
                </MenuItem>
                <MenuItem>
                  <IconLanguage />
                  Language
                </MenuItem>
                <MenuSub>
                  <MenuSubTrigger>
                    <IconBell />
                    Notifications
                  </MenuSubTrigger>
                  <MenuSubPopup>
                    <MenuGroup>
                      <MenuGroupLabel>Notification Types</MenuGroupLabel>
                      <MenuCheckboxItem
                        variant="switch"
                        checked={notifications.push}
                        onCheckedChange={(checked) =>
                          setNotifications({
                            ...notifications,
                            push: checked === true,
                          })
                        }
                      >
                        <IconBell />
                        Push Notifications
                      </MenuCheckboxItem>
                      <MenuCheckboxItem
                        variant="switch"
                        checked={notifications.email}
                        onCheckedChange={(checked) =>
                          setNotifications({
                            ...notifications,
                            email: checked === true,
                          })
                        }
                      >
                        <IconMail />
                        Email Notifications
                      </MenuCheckboxItem>
                    </MenuGroup>
                  </MenuSubPopup>
                </MenuSub>
              </MenuGroup>
              <MenuSeparator />
              <MenuGroup>
                <MenuItem>
                  <IconShield />
                  Privacy & Security
                </MenuItem>
              </MenuGroup>
            </MenuSubPopup>
          </MenuSub>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem>
            <IconHelpCircle />
            Help & Support
          </MenuItem>
          <MenuItem>
            <IconFileText />
            Documentation
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem variant="danger">
            <IconLogout />
            Sign Out
            <MenuShortcut>⇧⌘Q</MenuShortcut>
          </MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
