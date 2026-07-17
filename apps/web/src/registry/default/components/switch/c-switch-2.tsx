import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-5">
      <Label>
        <Switch size="sm" />
        Small size
      </Label>
      <Label>
        <Switch />
        Default size
      </Label>
      <Label>
        <Switch size="lg" />
        Large size
      </Label>
      <Label>
        <Switch className="[--thumb-size:--spacing(6)]" />
        Custom size
      </Label>
    </div>
  );
}
