"use client";

import { useCliConfigStore } from "@/hooks/use-cli-config";
import { Tabs } from "@/registry/default/ui/tabs";

export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const { installationType, setInstallationType } = useCliConfigStore();

  return (
    <Tabs
      className="relative mt-6 w-full"
      value={installationType}
      onValueChange={(value: Parameters<typeof setInstallationType>[0]) =>
        setInstallationType(value)
      }
    >
      {children}
    </Tabs>
  );
}
