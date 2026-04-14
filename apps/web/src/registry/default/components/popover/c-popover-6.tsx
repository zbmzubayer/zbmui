"use client";

import { IconInfoCircle } from "@tabler/icons-react";

import { Button } from "@/registry/default/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";
import { Popover, PopoverPopup, PopoverTrigger } from "@/registry/default/ui/popover";

export default function Particle() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput aria-label="Password" placeholder="Password" type="password" />
      <InputGroupAddon align="inline-end">
        <Popover>
          <PopoverTrigger
            openOnHover
            render={<Button aria-label="Password requirements" size="icon-xs" variant="ghost" />}
          >
            <IconInfoCircle />
          </PopoverTrigger>
          <PopoverPopup tooltipStyle positionerProps={{ side: "top" }}>
            <p>Min. 8 characters</p>
          </PopoverPopup>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  );
}
