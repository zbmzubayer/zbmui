import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/default/ui/avatar";

export function AvatarDemo() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/zbmzubayer.png" alt="ZBM Zubayer" />
        <AvatarFallback>ZM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/learnwithsumit.png" alt="Learn with Sumit" />
        <AvatarFallback>LS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  );
}
