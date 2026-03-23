"use client";

import { useState } from "react";

import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export function DialogDemo() {
  const [position, setPosition] =
    useState<React.ComponentProps<typeof DialogPopup>["position"]>("center");

  return (
    <Dialog>
      <div className="flex flex-wrap items-center gap-3">
        <DialogTrigger render={<Button variant="outline" onClick={() => setPosition("top")} />}>
          Top
        </DialogTrigger>
        <DialogTrigger render={<Button variant="outline" onClick={() => setPosition("center")} />}>
          Center
        </DialogTrigger>
        <DialogTrigger render={<Button variant="outline" onClick={() => setPosition("bottom")} />}>
          Bottom
        </DialogTrigger>
        <DialogTrigger
          render={<Button variant="outline" onClick={() => setPosition("top-center")} />}
        >
          Top center
        </DialogTrigger>
        <DialogTrigger
          render={<Button variant="outline" onClick={() => setPosition("bottom-center")} />}
        >
          Bottom center
        </DialogTrigger>
      </div>
      <DialogPopup position={position}>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
      </DialogPopup>
    </Dialog>
  );
}
