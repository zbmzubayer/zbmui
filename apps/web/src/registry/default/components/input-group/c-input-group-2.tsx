import { IconSearch } from "@tabler/icons-react";

import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";

export function InputGroupDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel>Input</FieldLabel>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <IconSearch className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the start.</FieldDescription>
    </Field>
  );
}
