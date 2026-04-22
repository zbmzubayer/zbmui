import { IconSearch } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";

const sizes = ["xs", "sm", "default", "lg", "xl"] as const;

export function InputGroupDemo() {
  return (
    <div className="flex flex-col gap-5">
      {sizes.map((size) => (
        <InputGroup key={size} size={size} className="max-w-xs">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <IconSearch />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
      ))}
    </div>
  );
}
