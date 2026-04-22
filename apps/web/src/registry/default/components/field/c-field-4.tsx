import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function FieldDemo() {
  return (
    <Field disabled className="max-w-xs">
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="Enter your name" type="text" />
    </Field>
  );
}
