import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Label className="flex items-center gap-2 text-xs">
        <Checkbox size="xs" />
        Size xs
      </Label>
      <Label className="flex items-center gap-2">
        <Checkbox size="sm" />
        Size sm
      </Label>
      <Label className="flex items-center gap-2">
        <Checkbox size="default" />
        Size md
      </Label>
      <Label className="flex items-center gap-2 text-base">
        <Checkbox size="lg" />
        Size lg
      </Label>
      <Label className="flex items-center gap-2 text-base">
        <Checkbox size="xl" />
        Size xl
      </Label>
    </div>
  );
}
