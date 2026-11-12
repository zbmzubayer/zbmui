import { NumberInput } from "@/registry/default/ui/number-input";

export function NumberInputDemo() {
  return (
    <div className="flex flex-col gap-4">
      <NumberInput placeholder="Enter a number" size="xs" />
      <NumberInput placeholder="Enter a number" size="sm" />
      <NumberInput placeholder="Enter a number" size="default" />
      <NumberInput placeholder="Enter a number" size="lg" />
      <NumberInput placeholder="Enter a number" size="xl" />
    </div>
  );
}
