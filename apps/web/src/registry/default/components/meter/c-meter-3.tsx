"use client";

import {
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue,
} from "@/registry/default/ui/meter";

const MAX = 5;

export function MeterDemo() {
  return (
    <Meter max={MAX} value={3} className="max-w-xs">
      <div className="flex items-center justify-between gap-2">
        <MeterLabel>Rating</MeterLabel>
        <MeterValue>{(_formatted, value) => `${value} / ${MAX}`}</MeterValue>
      </div>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}
