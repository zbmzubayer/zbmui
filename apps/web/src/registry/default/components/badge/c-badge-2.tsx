import { Badge } from "@/registry/default/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap">
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
