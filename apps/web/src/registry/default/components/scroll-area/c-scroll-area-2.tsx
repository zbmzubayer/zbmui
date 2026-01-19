import { ScrollArea } from "@/registry/default/ui/scroll-area";

const tags = Array.from({ length: 20 }, (_, i) => `Item - ${i}`);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-fit max-w-xs rounded-lg border">
      <div className="inline-flex gap-2 p-4">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex h-20 w-40 shrink-0 items-center justify-center rounded-md border bg-muted text-sm"
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
