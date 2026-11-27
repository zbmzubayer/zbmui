import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";

const variants = [
  { variant: "outline", activeVariant: "primary" },
  { variant: "secondary", activeVariant: "primary" },
  { variant: "ghost", activeVariant: "secondary" },
] as const;

export function PaginationDemo() {
  return (
    <div className="space-y-4">
      {variants.map(({ variant, activeVariant }) => (
        <Pagination key={`${variant}-${activeVariant}`}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" variant={variant} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" variant={variant}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" variant={variant} activeVariant={activeVariant} isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" variant={variant}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" variant={variant} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ))}
    </div>
  );
}
