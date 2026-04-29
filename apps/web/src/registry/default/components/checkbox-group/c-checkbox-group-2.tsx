import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

export function CheckboxGroupDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Label id="frameworks-label">Select frameworks</Label>
      <CheckboxGroup aria-labelledby="frameworks-label" defaultValue={["next"]}>
        <Label>
          <Checkbox value="next" />
          Next.js
        </Label>
        <Label>
          <Checkbox value="solid" />
          Solid Start
        </Label>
        <Label>
          <Checkbox value="angular" />
          Angular
        </Label>
      </CheckboxGroup>
    </div>
  );
}
