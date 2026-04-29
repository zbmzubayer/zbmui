"use client";

import { useState } from "react";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Label>
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        Accept terms and conditions
      </Label>
      <p>Checked: {checked.toString()}</p>
    </div>
  );
}
