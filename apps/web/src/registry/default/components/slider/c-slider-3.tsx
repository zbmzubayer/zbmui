import { Slider, SliderLabel, SliderValue } from "@/registry/default/ui/slider";

export function SliderDemo() {
  return (
    <Slider defaultValue={[10, 90]} className="max-w-xs">
      <div className="mb-2 flex items-center justify-between">
        <SliderLabel>Price range</SliderLabel>
        <SliderValue />
      </div>
    </Slider>
  );
}
