import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

export function CheckboxGroupDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Label id="frameworks-label">Select frameworks</Label>
      <CheckboxGroup aria-labelledby="frameworks-label" defaultValue={["next"]}>
        <div className="flex items-center gap-2">
          <Checkbox id="next-checkbox" value="next" className="peer" />
          <Label htmlFor="next-checkbox" className="peer-data-disabled:opacity-50">
            Next.js
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="solid-checkbox" value="solid" disabled className="peer" />
          <Label htmlFor="solid-checkbox" className="peer-data-disabled:opacity-50">
            Solid Start
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="angular-checkbox" value="angular" className="peer" />
          <Label htmlFor="angular-checkbox" className="peer-data-disabled:opacity-50">
            Angular
          </Label>
        </div>
      </CheckboxGroup>
    </div>
  );
}
