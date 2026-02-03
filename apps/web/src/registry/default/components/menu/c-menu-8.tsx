"use client";

import { useState } from "react";

import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
} from "@/registry/default/ui/dialog";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/registry/default/ui/menu";

export function MenuDemo() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Menu>
        <MenuTrigger render={<Button variant="outline" />}>Menu</MenuTrigger>
        <MenuPopup>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Folder</MenuItem>
          <MenuItem onClick={() => setDialogOpen(true)}>Open settings</MenuItem>
        </MenuPopup>
      </Menu>
      <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>Change your preferences</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>Close</DialogClose>
          </DialogFooter>
        </DialogPopup>
      </Dialog>
    </>
  );
}
