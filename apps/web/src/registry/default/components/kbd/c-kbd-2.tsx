import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";

export function KbdDemo() {
  return (
    <p className="text-muted-foreground text-sm">
      Use{" "}
      <KbdGroup>
        <Kbd>Ctrl + B</Kbd>
        <Kbd>Ctrl + K</Kbd>
      </KbdGroup>{" "}
      to open the command palette
    </p>
  );
}
