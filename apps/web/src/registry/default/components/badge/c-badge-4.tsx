import { IconBookmark, IconRosetteDiscountCheck } from "@tabler/icons-react";

import { Badge } from "@/registry/default/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="success">
        <IconRosetteDiscountCheck />
        Verified
      </Badge>
      <Badge variant="outline">
        Bookmark
        <IconBookmark />
      </Badge>
    </div>
  );
}
