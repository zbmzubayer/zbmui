import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-col gap-1">
        <Label htmlFor="marketing-emails">Marketing emails</Label>
        <p className="text-muted-foreground text-xs">
          By enabling marketing emails, you agree to receive emails.
        </p>
      </div>
      <Switch defaultChecked id="marketing-emails" />
    </div>
  );
}
