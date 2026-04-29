import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

export function CheckboxGroupDemo() {
  return (
    <CheckboxGroup aria-label="Select frameworks" defaultValue={["next"]}>
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
  );
}
