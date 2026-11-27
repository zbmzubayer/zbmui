import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";

const totalPages = 5;
const currentPage = 2;

// Replace with your own route, e.g. `/posts?page=${page}`.
const getHref = (page: number) => `#page-${page}`;

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst render={<Link href={getHref(1)} />} />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious render={<Link href={getHref(Math.max(1, currentPage - 1))} />} />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink render={<Link href={getHref(page)} />} isActive={page === currentPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext render={<Link href={getHref(Math.min(totalPages, currentPage + 1))} />} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast render={<Link href={getHref(totalPages)} />} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
