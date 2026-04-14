import { Button } from "@/registry/default/ui/button";
import { Field } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { Textarea } from "@/registry/default/ui/textarea";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open Popover</PopoverTrigger>
      <PopoverPopup className="w-xs">
        <PopoverTitle>Send us feedback</PopoverTitle>
        <PopoverDescription>Let us know how we can improve.</PopoverDescription>
        <Form className="mt-4">
          <Field>
            <Textarea aria-label="Send feedback" id="feedback" placeholder="How can we improve?" />
          </Field>
          <Button type="submit">Send feedback</Button>
        </Form>
      </PopoverPopup>
    </Popover>
  );
}
