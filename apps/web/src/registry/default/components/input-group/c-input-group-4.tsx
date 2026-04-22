import { IconCopy, IconFileCode } from "@tabler/icons-react";

import { Field, FieldControl, FieldDescription, FieldLabel } from "@/registry/default/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";

export function InputGroupDemo() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <Field>
        <FieldLabel>Input</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput placeholder="Enter your name" />
          <InputGroupAddon align="block-start">
            <InputGroupText>Full Name</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Header positioned above the input.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Textarea</FieldLabel>
        <InputGroup>
          <FieldControl
            render={
              <InputGroupTextarea
                placeholder="console.log('Hello, world!');"
                className="font-mono"
              />
            }
          />
          <InputGroupAddon align="block-start">
            <IconFileCode className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto rounded-sm">
              <IconCopy />
              <span className="sr-only">Copy</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Header positioned above the textarea.</FieldDescription>
      </Field>
    </div>
  );
}
