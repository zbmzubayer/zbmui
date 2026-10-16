import Link from "next/link";

import { Index } from "@/registry/__index__";
import { Button } from "@/registry/default/ui/button";

import { CopyCommand } from "@/components/landing/copy-command";

const INSTALL_COMMAND = "npx zbmui@latest init";
const ROTATING_WORDS = [
  "for a design system.",
  "for your product.",
  "for your brand.",
  "for your team.",
];

export function Hero() {
  const componentCount = Object.values(Index).filter((item) => item.type === "registry:ui").length;

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="dot-grid absolute inset-0" />
      <div className="container relative mx-auto flex min-h-[calc(100svh-var(--header-height))] flex-col items-center justify-center gap-8 px-4 py-24 text-center sm:px-6">
        <p className="rounded-full border bg-background/80 px-3.5 py-1 text-muted-foreground text-sm backdrop-blur-sm">
          {componentCount}+ components · Open code
        </p>

        <h1 className="text-balance font-semibold text-4xl tracking-tight sm:text-5xl xl:text-6xl">
          Solid foundation <br />
          <span className="inline-block h-[1.15em] overflow-hidden align-top">
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

        <p className="max-w-xl text-balance text-lg text-muted-foreground">
          A comprehensive component library and design system built with Base UI and Tailwind CSS —
          accessibility, customization, DX and pixel perfection.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<Link href="/docs/components/button" />} nativeButton={false}>
            Browse components
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link href="/docs/installation" />}
            nativeButton={false}
          >
            Get started
          </Button>
        </div>

        <div className="flex items-center gap-2 rounded-full border bg-background/80 py-1.5 pr-1.5 pl-4 backdrop-blur-sm">
          <span className="font-mono text-sm">{INSTALL_COMMAND}</span>
          <CopyCommand command={INSTALL_COMMAND} />
        </div>
      </div>
    </section>
  );
}
