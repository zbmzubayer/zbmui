import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/registry/default/ui/button";
import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";
import { Spinner } from "@/registry/default/ui/spinner";

export const metadata: Metadata = {
  title: "404 — Page not found",
};

const ROTATING_WORDS = ["Lost.", "Moved.", "Renamed.", "Gone."];

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="dot-grid absolute inset-0" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-bold text-[min(40vw,22rem)] text-muted-foreground/8 leading-none tracking-tighter"
      >
        404
      </span>

      <div className="container relative mx-auto flex min-h-[calc(100svh-var(--header-height))] flex-col items-center justify-center gap-8 px-4 py-24 text-center sm:px-6">
        <p className="rounded-full border bg-background/80 px-3.5 py-1 text-muted-foreground text-sm backdrop-blur-sm">
          Error 404
        </p>

        <h1 className="text-balance font-semibold text-4xl tracking-tight sm:text-5xl xl:text-6xl">
          Page not found. <br />
          <span className="mt-2 inline-block h-[1.15em] overflow-hidden align-top">
            <span className="flex animate-word-rotate flex-col text-muted-foreground">
              {[...ROTATING_WORDS, ROTATING_WORDS[0]].map((word, index) => (
                <span
                  aria-hidden={index !== 0 || undefined}
                  className="h-[1.15em] leading-[1.15]"
                  key={index === ROTATING_WORDS.length ? "loop" : word}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <p className="max-w-md text-balance text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist — but everything else is working just
          fine.
        </p>

        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Spinner className="size-4" />
          Still searching…
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<Link href="/" />} nativeButton={false}>
            Back to home
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link href="/docs/components/button" />}
            nativeButton={false}
          >
            Browse components
          </Button>
        </div>

        <p className="flex items-center gap-1.5 text-muted-foreground text-sm">
          Tip: press
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          to search the docs
        </p>
      </div>
    </main>
  );
}
