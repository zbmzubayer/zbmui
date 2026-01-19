import { Button } from "@/registry/default/ui/button";

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-outline">Danger Outline</Button>
    </div>
  );
}
