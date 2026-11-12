import { NumberInput } from "@/registry/default/ui/number-input";

export function NumberInputDemo() {
  return (
    <div>
      <label htmlFor="number-input" className="mb-2 inline-block font-medium">
        Number Input
      </label>
      <NumberInput id="number-input" placeholder="Enter a number" />
    </div>
  );
}
