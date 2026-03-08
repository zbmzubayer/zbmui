import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/zbmzubayer.png"
        alt="ZBM Zubayer"
        render={
          <Image src="https://github.com/zbmzubayer.png" alt="ZBM Zubayer" width={40} height={40} />
        }
      />
      <AvatarFallback>ZM</AvatarFallback>
    </Avatar>
  );
}
