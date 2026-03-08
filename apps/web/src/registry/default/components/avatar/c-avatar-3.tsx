import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/zbmzubayer.png" alt="ZBM Zubayer" />
      <AvatarFallback>ZM</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-500" />
    </Avatar>
  );
}
