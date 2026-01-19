"use client";

import {
  AnchorProvider,
  ScrollProvider,
  TOCItem,
  type TOCItemType,
  useActiveAnchors,
} from "fumadocs-core/toc";
import { useEffect, useEffectEvent, useRef } from "react";

import { cn } from "@/lib/cn";

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 18H3"></path>
    <path d="M17 6H3"></path>
    <path d="M21 12H3"></path>
  </svg>
);

export function DocsToc({ tocItems }: { tocItems: TOCItemType[] }) {
  const viewRef = useRef<HTMLDivElement>(null);

  if (tocItems.length === 0)
    return <div className="text-muted-foreground text-sm">No table of contents available.</div>;

  return (
    <AnchorProvider toc={tocItems}>
      <h3 className="inline-flex items-center gap-1.5 font-medium text-muted-foreground text-sm">
        <MenuIcon className="size-4" />
        On this page
      </h3>
      <div className="mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] relative ms-px min-h-0 overflow-auto py-2 [scrollbar-width:none]">
        <TocThumb
          containerRef={viewRef}
          className="absolute top-(--fd-top) h-(--fd-height) w-px bg-primary transition-all"
        />
        <div ref={viewRef} className="flex flex-col border-foreground/10 border-s text-[0.8rem]">
          <ScrollProvider containerRef={viewRef}>
            {tocItems.map((item) => (
              <TOCItem
                key={item.url}
                href={item.url}
                className={cn(
                  "prose wrap-anywhere py-1.5 text-muted-foreground transition-colors first:pt-0 last:pb-0 data-[active=true]:text-primary",
                  item.depth <= 2 && "ps-3",
                  item.depth === 3 && "ps-6",
                  item.depth >= 4 && "ps-8"
                )}
              >
                {item.title}
              </TOCItem>
            ))}
          </ScrollProvider>
        </div>
      </div>
    </AnchorProvider>
  );
}

type TocThumb = [top: number, height: number];

interface RefProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export function TocThumb({ containerRef, ...props }: React.ComponentProps<"div"> & RefProps) {
  const thumbRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={thumbRef} role="none" {...props} />
      <Updater containerRef={containerRef} thumbRef={thumbRef} />
    </>
  );
}

function Updater({
  containerRef,
  thumbRef,
}: RefProps & { thumbRef: React.RefObject<HTMLElement | null> }) {
  const active = useActiveAnchors();
  const onPrint = useEffectEvent(() => {
    if (!containerRef.current || !thumbRef.current) return;

    update(thumbRef.current, calc(containerRef.current, active));
  });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const observer = new ResizeObserver(onPrint);
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  if (containerRef.current && thumbRef.current) {
    update(thumbRef.current, calc(containerRef.current, active));
  }

  return null;
}

function calc(container: HTMLElement, active: string[]): TocThumb {
  if (active.length === 0 || container.clientHeight === 0) {
    return [0, 0];
  }

  let upper = Number.MAX_VALUE,
    lower = 0;

  for (const item of active) {
    const element = container.querySelector<HTMLElement>(`a[href="#${item}"]`);
    if (!element) continue;

    const styles = getComputedStyle(element);
    upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
    lower = Math.max(
      lower,
      element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom)
    );
  }

  return [upper, lower - upper];
}

function update(element: HTMLElement, info: TocThumb): void {
  element.style.setProperty("--fd-top", `${info[0]}px`);
  element.style.setProperty("--fd-height", `${info[1]}px`);
}
