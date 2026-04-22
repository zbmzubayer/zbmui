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
          <InputGroupInput placeholder="Enter amount" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Footer positioned below the input.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Textarea</FieldLabel>
        <InputGroup>
          <FieldControl render={<InputGroupTextarea placeholder="Write a comment..." />} />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="primary" className="ml-auto">
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Footer positioned below the textarea.</FieldDescription>
      </Field>
    </div>
  );
}
