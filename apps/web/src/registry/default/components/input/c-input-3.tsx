import { Input } from "@/registry/default/ui/input";

export function InputDemo() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="picture">Picture</label>
      <Input id="picture" type="file" />
    </div>
  );
}
