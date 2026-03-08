import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/zbmzubayer.png" alt="ZBM Zubayer" />
        <AvatarFallback>ZM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/zbmzubayer.png" alt="ZBM Zubayer" />
        <AvatarFallback>ZM</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/zbmzubayer.png" alt="ZBM Zubayer" />
        <AvatarFallback>ZM</AvatarFallback>
      </Avatar>
    </div>
  );
}
