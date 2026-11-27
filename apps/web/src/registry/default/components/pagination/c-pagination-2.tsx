import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";

const sizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const;

export function PaginationDemo() {
  return (
    <div className="space-y-4">
      {sizes.map((size) => (
        <Pagination key={size}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" size={size} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size={size}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size={size} isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size={size}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" size={size} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ))}
    </div>
  );
}
