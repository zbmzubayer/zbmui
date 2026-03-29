import { Textarea } from "@/registry/default/ui/textarea";

export function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Textarea size="xs" placeholder="Type your message here." />
      <Textarea size="sm" placeholder="Type your message here." />
      <Textarea size="default" placeholder="Type your message here." />
      <Textarea size="lg" placeholder="Type your message here." />
      <Textarea size="xl" placeholder="Type your message here." />
    </div>
  );
}
