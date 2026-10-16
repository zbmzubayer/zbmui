import { cn } from "@/lib/cn";

import { PreviewCell } from "@/components/landing/preview-cell";

function BentoCell({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2 rounded-xl border bg-card p-6", className)}>
      <h3 className="font-medium text-lg tracking-tight">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      {children}
    </div>
  );
}

export function FeatureBento() {
  return (
    <section className="container mx-auto flex flex-col gap-10 px-4 py-24 sm:px-6">
      <div className="mx-auto flex max-w-xl flex-col gap-3 text-center">
        <h2 className="text-balance font-semibold text-3xl tracking-tight sm:text-4xl">
          Built the way you&apos;d build it
        </h2>
        <p className="text-muted-foreground">
          Every decision in the library is one you could defend in a design review.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <BentoCell
          className="md:col-span-2"
          title="Themeable to the last pixel"
          description="Plain CSS variables and oklch color ramps — no runtime theme engine. Change one variable, restyle the whole system."
        >
          <div className="mt-4 flex flex-1 items-center justify-center rounded-lg border border-dashed p-8">
            <PreviewCell
              className="min-w-0 flex-1 border-0 bg-transparent p-0"
              name="c-input-group-1"
            />
          </div>
        </BentoCell>

        <BentoCell
          title="Accessible by default"
          description="Built on Base UI primitives with WAI-ARIA semantics, focus management and keyboard support baked in."
        >
          <div className="mt-4 flex flex-1 items-center justify-center rounded-lg border border-dashed p-8">
            <PreviewCell
              className="min-w-0 flex-1 border-0 bg-transparent p-0"
              name="c-tooltip-1"
            />
          </div>
        </BentoCell>

        <BentoCell
          title="npx, not npm install"
          description="Components live in your codebase, not in node_modules. Pull in what you need, own every line."
        >
          <div className="mt-4 flex flex-1 items-center rounded-lg border border-dashed p-6 font-mono text-muted-foreground text-sm">
            npx zbmui@latest add
          </div>
        </BentoCell>

        <BentoCell
          title="TypeScript-first"
          description="Fully typed props and variants out of the box — autocomplete is the documentation."
        >
          <div className="mt-4 flex-1 overflow-hidden rounded-lg border border-dashed p-6 font-mono text-muted-foreground text-sm">
            <pre className="whitespace-pre-wrap">{`variant?: "primary" | "outline"
  | "ghost" | "danger"`}</pre>
          </div>
        </BentoCell>

        <BentoCell
          className="dark bg-background"
          title="Dark mode out of the box"
          description="Not a claim — this very card renders in dark mode, whatever your page theme is."
        >
          <div className="mt-4 flex flex-1 items-center justify-center rounded-lg border border-dashed p-8">
            <PreviewCell className="min-w-0 flex-1 border-0 bg-transparent p-0" name="c-tabs-1" />
          </div>
        </BentoCell>
      </div>
    </section>
  );
}
