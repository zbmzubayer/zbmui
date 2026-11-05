import { Slider, SliderLabel, SliderValue } from "@/registry/default/ui/slider";

export function SliderDemo() {
  return (
    <Slider defaultValue={50} className="max-w-xs">
      <div className="mb-2 flex items-center justify-between">
        <SliderLabel>Opacity</SliderLabel>
        <SliderValue />
      </div>
    </Slider>
  );
}
