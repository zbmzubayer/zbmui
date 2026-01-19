import { Input } from "@/registry/default/ui/input";

export function InputDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Name" size="xs" />
      <Input placeholder="Name" size="sm" />
      <Input placeholder="Name" size="default" />
      <Input placeholder="Name" size="lg" />
      <Input placeholder="Name" size="xl" />
    </div>
  );
}
