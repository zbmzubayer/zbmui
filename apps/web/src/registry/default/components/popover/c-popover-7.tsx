"use client";

import { IconBell, IconList, IconUserCircle } from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Button, buttonVariants } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
  PopoverViewport,
  popoverCreateHandle,
} from "@/registry/default/ui/popover";

const popoverHandler = popoverCreateHandle<React.ComponentType>();

export function PopoverDemo() {
  return (
    <div className="flex items-center gap-3">
      <PopoverTrigger
        handle={popoverHandler}
        payload={NotificationsContent}
        render={<Button variant="outline" size="icon" />}
      >
        <IconBell />
      </PopoverTrigger>
      <PopoverTrigger
        handle={popoverHandler}
        payload={ActivityContent}
        render={<Button variant="outline" size="icon" />}
      >
        <IconList />
      </PopoverTrigger>
      <PopoverTrigger
        handle={popoverHandler}
        payload={ProfileContent}
        render={<Button variant="outline" size="icon" />}
      >
        <IconUserCircle />
      </PopoverTrigger>

      <Popover handle={popoverHandler}>
        {({ payload: Payload }) => (
          <PopoverPopup showArrow className="p-0">
            <PopoverViewport>{Payload !== undefined && <Payload />}</PopoverViewport>
          </PopoverPopup>
        )}
      </Popover>
    </div>
  );
}

function NotificationsContent() {
  return (
    <>
      <PopoverTitle>Notifications</PopoverTitle>
      <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
    </>
  );
}

function ActivityContent() {
  return (
    <>
      <PopoverTitle>Activity</PopoverTitle>
      <PopoverDescription>Nothing interesting happened recently.</PopoverDescription>
    </>
  );
}

function ProfileContent() {
  return (
    <div>
      <div className="grid grid-cols-[auto_auto] gap-x-4">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/zbmzubayer.png" alt="Zbm Zubayer" />
          <AvatarFallback>ZM</AvatarFallback>
        </Avatar>
        <div>
          <PopoverTitle>ZBM Zubayer</PopoverTitle>
          <span className="text-muted-foreground text-sm">Pro plan</span>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2 border-muted border-t pt-2 text-sm">
        <a href="#" className={cn(buttonVariants({ variant: "secondary" }))}>
          Profile settings
        </a>
        <Button variant="danger-soft">Log out</Button>
      </div>
    </div>
  );
}
