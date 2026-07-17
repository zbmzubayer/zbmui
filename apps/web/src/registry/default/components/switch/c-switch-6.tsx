import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export function SwitchDemo() {
  return (
    <Label
      className="flex items-start gap-6 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50"
      htmlFor="enable-notifications"
    >
      <div className="flex flex-col gap-1">
        <p>Enable notifications</p>
        <p className="text-muted-foreground text-xs">
          You can enable or disable notifications at any time.
        </p>
      </div>
      <Switch className="[--thumb-size:--spacing(3.5)]" defaultChecked id="enable-notifications" />
    </Label>
  );
}
