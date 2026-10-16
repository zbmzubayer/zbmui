import { Index } from "@/registry/__index__";

export function StatsBand() {
  const items = Object.entries(Index);
  const componentCount = items.filter(([, item]) => item.type === "registry:ui").length;
  const demoCount = items.filter(([name]) => name.startsWith("c-")).length;

  const stats = [
    { value: `${componentCount}`, label: "Components" },
    { value: `${demoCount}`, label: "Live demos" },
    { value: "4 × 11", label: "Status color steps" },
    { value: "100%", label: "Open code" },
  ];

  return (
    <section className="border-y bg-muted/30">
      <dl className="container mx-auto grid grid-cols-2 divide-x divide-border px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => (
          <div className="flex flex-col items-center gap-1 py-10" key={stat.label}>
            <dt className="order-2 text-muted-foreground text-sm">{stat.label}</dt>
            <dd className="order-1 font-semibold text-3xl tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
