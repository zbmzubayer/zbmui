import { Suspense } from "react";

import { cn } from "@/lib/cn";
import { Index } from "@/registry/__index__";

export function PreviewCell({ name, className }: { name: string; className?: string }) {
  const Component = Index[name]?.component;

  if (!Component) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex h-24 min-w-48 shrink-0 items-center justify-center rounded-xl border bg-card px-8",
        className
      )}
    >
      <Suspense fallback={<div className="h-8 w-24 animate-pulse rounded-md bg-muted" />}>
        <Component />
      </Suspense>
    </div>
  );
}
