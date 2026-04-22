import { IconEyeOff } from "@tabler/icons-react";

import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";

export function InputGroupDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel>Input</FieldLabel>
      <InputGroup>
        <InputGroupInput type="password" placeholder="Enter password" />
        <InputGroupAddon align="inline-end">
          <IconEyeOff />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  );
}
