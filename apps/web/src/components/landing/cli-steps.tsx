const STEPS = [
  {
    step: "01",
    title: "Initialize",
    command: "npx @zbmui/cli@latest init",
    description: "Sets up the registry aliases and installs the base dependencies once.",
  },
  {
    step: "02",
    title: "Add components",
    command: "npx @zbmui/cli@latest add button",
    description: "Pulls the source into your components folder — dependencies included.",
  },
  {
    step: "03",
    title: "Ship it",
    command: 'import { Button } from "@/components/ui/button"',
    description: "Import, use, customize. The code is yours now.",
  },
];

export function CliSteps() {
  return (
    <section className="border-t">
      <div className="container mx-auto grid gap-px overflow-hidden px-4 py-24 sm:grid-cols-3 sm:px-6">
        {STEPS.map((item) => (
          <div className="flex flex-col gap-3 p-2" key={item.step}>
            <span className="font-mono text-muted-foreground text-xs">{item.step}</span>
            <h3 className="font-medium text-lg tracking-tight">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
            <div className="mt-2 overflow-x-auto rounded-lg border bg-muted/50 p-3 font-mono text-xs">
              {item.command}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
