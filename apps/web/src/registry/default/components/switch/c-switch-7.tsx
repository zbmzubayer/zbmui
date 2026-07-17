"use client";

import { useState } from "react";

import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export function SwitchDemo() {
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  return (
    <Label className="flex flex-col items-start gap-2">
      <Switch checked={isEmailEnabled} onCheckedChange={setIsEmailEnabled} />
      Enable marketing emails: {isEmailEnabled ? "Yes" : "No"}
    </Label>
  );
}
