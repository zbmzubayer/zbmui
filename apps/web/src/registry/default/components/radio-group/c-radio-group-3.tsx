import { Label } from "@/registry/default/ui/label";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup aria-labelledby="subscription-plan" defaultValue="free">
      <div id="subscription-plan">Choose a subscription plan</div>
      <div className="flex items-start gap-2">
        <Radio id="free" value="free" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="free">Free</Label>
          <p className="text-muted-foreground text-xs">Basic features for personal use.</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Radio id="pro" value="pro" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="pro">Pro</Label>
          <p className="text-muted-foreground text-xs">Advanced tools for professionals.</p>
        </div>
      </div>
    </RadioGroup>
  );
}
