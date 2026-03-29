import { Textarea } from "@/registry/default/ui/textarea";

export function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5 *:flex *:flex-col *:gap-2">
      <div>
        <label htmlFor="resize-horizontal" className="inline-block font-medium text-sm">
          Resize horizontal:
        </label>
        <Textarea
          id="resize-horizontal"
          placeholder="Type your message here."
          className="max-w-sm resize-x"
        />
      </div>
      <div>
        <label htmlFor="resize-both" className="inline-block font-medium text-sm">
          Resize both:
        </label>
        <Textarea
          id="resize-both"
          placeholder="Type your message here."
          className="max-w-sm resize"
        />
      </div>
      <div>
        <label htmlFor="resize-none" className="inline-block font-medium text-sm">
          Resize none:
        </label>
        <Textarea
          id="resize-none"
          placeholder="Type your message here."
          className="max-w-sm resize-none"
        />
      </div>
    </div>
  );
}
