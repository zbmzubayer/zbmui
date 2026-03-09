import { NumberField } from "@/registry/default/ui/number-field";

export function NumberFieldDemo() {
  return (
    <div className="flex flex-col gap-4">
      <NumberField placeholder="Enter a number" size="xs" />
      <NumberField placeholder="Enter a number" size="sm" />
      <NumberField placeholder="Enter a number" size="default" />
      <NumberField placeholder="Enter a number" size="lg" />
      <NumberField placeholder="Enter a number" size="xl" />
    </div>
  );
}
