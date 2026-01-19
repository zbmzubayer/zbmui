import { ScrollArea } from "@/registry/default/ui/scroll-area";

const tags = Array.from({ length: 20 }, (_, i) => `Item - ${i}`);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-64 w-xs rounded-lg border" scrollFade>
      <div className="flex flex-col gap-2 p-4">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex h-20 items-center justify-center rounded-md border bg-muted text-sm"
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
