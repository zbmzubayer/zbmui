import { cn } from "@/lib/cn";

import { PreviewCell } from "@/components/landing/preview-cell";

const ROW_ONE = [
  "c-button-2",
  "c-badge-1",
  "c-switch-1",
  "c-slider-1",
  "c-avatar-1",
  "c-kbd-1",
  "c-spinner-1",
  "c-checkbox-1",
];

const ROW_TWO = [
  "c-input-1",
  "c-tooltip-1",
  "c-select-1",
  "c-otp-field-1",
  "c-tabs-1",
  "c-meter-1",
  "c-button-6",
  "c-avatar-4",
];

function MarqueeRow({ names, reverse }: { names: string[]; reverse?: boolean }) {
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={cn(
          "flex w-max animate-marquee hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {[false, true].map((hidden) => (
          <div aria-hidden={hidden || undefined} className="flex gap-4 pr-4" key={String(hidden)}>
            {names.map((name) => (
              <PreviewCell key={name} name={name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComponentMarquee() {
  return (
    <section className="flex flex-col gap-10 border-y bg-muted/30 py-16">
      <p className="text-center text-muted-foreground text-sm">
        Don&apos;t take our word for it — play with them. Hover to pause.
      </p>
      <div className="flex flex-col gap-4">
        <MarqueeRow names={ROW_ONE} />
        <MarqueeRow names={ROW_TWO} reverse />
      </div>
    </section>
  );
}
