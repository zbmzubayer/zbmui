import { Badge } from "@/registry/default/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Destructive</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  );
}
