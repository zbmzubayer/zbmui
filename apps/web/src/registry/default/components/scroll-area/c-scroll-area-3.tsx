import { ScrollArea } from "@/registry/default/ui/scroll-area";

const tags = Array.from({ length: 100 }, (_, i) => `Item - ${i}`);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-80 w-xs rounded-lg border">
      <div className="inline-grid grid-cols-[repeat(10,6.25rem)] grid-rows-[repeat(10,6.25rem)] gap-2 p-4">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex shrink-0 items-center justify-center rounded-md border bg-muted text-xs"
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
