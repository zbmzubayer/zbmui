import Link from "next/link";

import { Button } from "@/registry/default/ui/button";

import { CopyCommand } from "@/components/landing/copy-command";

const INSTALL_COMMAND = "npx @zbmui/cli@latest init";

export function Cta() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-28 text-center sm:px-6">
      <h2 className="text-balance font-semibold text-3xl tracking-tight sm:text-4xl">
        Start building today.
      </h2>
      <div className="flex items-center gap-2 rounded-full border bg-background py-1.5 pr-1.5 pl-4">
        <span className="font-mono text-sm">{INSTALL_COMMAND}</span>
        <CopyCommand command={INSTALL_COMMAND} />
      </div>
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
    </section>
  );
}
