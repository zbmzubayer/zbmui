import { NumberField } from "@/registry/default/ui/number-field";

export function NumberFieldDemo() {
  return (
    <>
      <label htmlFor="number-field" className="mb-2 inline-block font-medium">
        Number Field
      </label>
      <NumberField id="number-field" placeholder="Enter a number" />
    </>
  );
}
