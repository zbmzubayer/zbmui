import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export function LabelDemo() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  );
}
