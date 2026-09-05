import {
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue,
} from "@/registry/default/ui/meter";

export function MeterDemo() {
  return (
    <Meter value={75} className="max-w-xs">
      <div className="flex items-center justify-between gap-2">
        <MeterLabel>Storage usage</MeterLabel>
        <MeterValue />
      </div>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}
