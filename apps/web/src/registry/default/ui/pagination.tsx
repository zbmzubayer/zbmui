import type { VariantProps } from "class-variance-authority";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDots,
} from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import { buttonVariants } from "@/registry/default/ui/button";

export function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="pagination"
      data-slot="pagination"
      className={cn("flex items-center justify-center", className)}
      {...props}
    />
  );
}

export function PaginationSummary({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="pagination-summary"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

export function PaginationItem(props: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

export type PaginationLinkProps = {
  isActive?: boolean;
  activeVariant?: VariantProps<typeof buttonVariants>["variant"];
} & VariantProps<typeof buttonVariants> &
  useRender.ComponentProps<"a">;

export function PaginationLink({
  className,
  isActive,
  size = "icon",
  variant = "ghost",
  activeVariant = "outline",
  render,
  ...props
}: PaginationLinkProps) {
  const defaultProps = {
    "aria-current": isActive ? ("page" as const) : undefined,
    className: cn(buttonVariants({ size, variant: isActive ? activeVariant : variant }), className),
    "data-active": isActive,
    "data-slot": "pagination-link",
  };

  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(defaultProps, props),
    render,
  });
}

export type PaginationNavProps = Omit<PaginationLinkProps, "isActive" | "activeVariant"> & {
  label?: React.ReactNode;
  icon?: React.ReactNode;
};

export function PaginationPrevious({
  label,
  icon,
  size = label ? "default" : "icon",
  className,
  ...props
}: PaginationNavProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size={size}
      className={cn(
        label && "max-sm:aspect-square max-sm:p-0 sm:[&>svg:first-child]:-ms-1",
        className
      )}
      {...props}
    >
      {icon ?? <IconChevronLeft />}
      {label && <span className="max-sm:hidden">{label}</span>}
    </PaginationLink>
  );
}

export function PaginationNext({
  label,
  icon,
  size = label ? "default" : "icon",
  className,
  ...props
}: PaginationNavProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size={size}
      className={cn(
        label && "max-sm:aspect-square max-sm:p-0 sm:[&>svg:last-child]:-me-1",
        className
      )}
      {...props}
    >
      {label && <span className="max-sm:hidden">{label}</span>}
      {icon ?? <IconChevronRight />}
    </PaginationLink>
  );
}

export function PaginationFirst({ icon, ...props }: Omit<PaginationNavProps, "label">) {
  return (
    <PaginationLink aria-label="Go to first page" size="icon" {...props}>
      {icon ?? <IconChevronsLeft />}
    </PaginationLink>
  );
}

export function PaginationLast({ icon, ...props }: Omit<PaginationNavProps, "label">) {
  return (
    <PaginationLink aria-label="Go to last page" size="icon" {...props}>
      {icon ?? <IconChevronsRight />}
    </PaginationLink>
  );
}

export function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex min-w-7 justify-center", className)}
      {...props}
    >
      <IconDots className="size-5 sm:size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
