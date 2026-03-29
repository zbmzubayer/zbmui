import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field";
import { Textarea } from "@/registry/default/ui/textarea";

export function TextareaDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="message">Enter your message</FieldLabel>
      <Textarea id="message" placeholder="Type your message here." className="max-w-sm" />
      <FieldDescription>
        Make sure to be respectful and follow our community guidelines.
      </FieldDescription>
    </Field>
  );
}
