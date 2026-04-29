import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export function CheckboxDemo() {
  return (
    <Label>
      <Checkbox indeterminate />
      Indeterminate
    </Label>
  );
}
