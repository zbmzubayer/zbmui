import { Label } from "@/registry/default/ui/label";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup aria-labelledby="framework-label" defaultValue="next">
      <div id="framework-label" className="font-medium text-sm">
        Select your framework
      </div>
      <Label>
        <Radio value="next" /> Next.js
      </Label>
      <Label>
        <Radio value="vite" /> Vite
      </Label>
      <Label>
        <Radio value="astro" /> Astro
      </Label>
    </RadioGroup>
  );
}
