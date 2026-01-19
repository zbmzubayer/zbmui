import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function FieldDemo() {
  return (
    <Field>
      <FieldLabel showRequiredIndicator>Name</FieldLabel>
      <Input placeholder="Enter your name" type="text" required />
      <FieldError>Please fill out this field.</FieldError>
    </Field>
  );
}
