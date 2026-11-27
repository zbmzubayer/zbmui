"use client";

import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationSummary,
} from "@/registry/default/ui/pagination";

const totalPages = 20;

/** Returns the page numbers to show, with an `ellipsis-*` key wherever pages are skipped. */
function getPageItems(page: number, total: number) {
  const pages = [...new Set([1, page - 1, page, page + 1, total])]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const items: (number | string)[] = [];
  pages.forEach((p, i) => {
    const gap = i > 0 ? p - pages[i - 1] : 0;
    if (gap === 2) items.push(p - 1);
    else if (gap > 2) items.push(`ellipsis-${p}`);
    items.push(p);
  });
  return items;
}

export function PaginationDemo() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationFirst
              render={<button type="button" disabled={page === 1} />}
              onClick={() => setPage(1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              render={<button type="button" disabled={page === 1} />}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            />
          </PaginationItem>
          {getPageItems(page, totalPages).map((item) =>
            typeof item === "string" ? (
              <PaginationItem key={item}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={item}>
                <PaginationLink
                  render={<button type="button" />}
                  isActive={item === page}
                  onClick={() => setPage(item)}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              render={<button type="button" disabled={page === totalPages} />}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLast
              render={<button type="button" disabled={page === totalPages} />}
              onClick={() => setPage(totalPages)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <PaginationSummary>
        Page {page} of {totalPages}
      </PaginationSummary>
    </div>
  );
}
