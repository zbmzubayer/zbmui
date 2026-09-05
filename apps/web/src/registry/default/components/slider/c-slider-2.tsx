import { Field, FieldLabel } from "@/registry/default/ui/field";
import { Slider, SliderValue } from "@/registry/default/ui/slider";

export function SliderDemo() {
  return (
    <Field className="max-w-xs">
      <Slider defaultValue={50}>
        <div className="mb-2 flex items-center justify-between">
          <FieldLabel>Opacity</FieldLabel>
          <SliderValue />
        </div>
      </Slider>
    </Field>
  );
}
