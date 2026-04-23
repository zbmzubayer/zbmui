import { Field, FieldControl, FieldDescription, FieldLabel } from "@/registry/default/ui/field";
import { Textarea } from "@/registry/default/ui/textarea";

export function TextareaDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel>Enter your message</FieldLabel>
      <FieldControl render={<Textarea placeholder="Type your message here." />} />
      <FieldDescription>
        Make sure to be respectful and follow our community guidelines.
      </FieldDescription>
    </Field>
  );
}
