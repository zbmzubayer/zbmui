import { IconPlus } from "@tabler/icons-react";

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/zbmzubayer.png" alt="ZBM Zubayer" />
      <AvatarFallback>ZM</AvatarFallback>
      <AvatarBadge>
        <IconPlus />
      </AvatarBadge>
    </Avatar>
  );
}
