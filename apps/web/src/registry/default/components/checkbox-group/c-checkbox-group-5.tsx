"use client";

import { useState } from "react";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

const frameworks = [
  { id: "next", name: "Next.js" },
  { id: "solid", name: "Solid Start" },
  { id: "angular", name: "Angular" },
];

export function CheckboxGroupDemo() {
  const [value, setValue] = useState<string[]>(["solid"]);

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <CheckboxGroup aria-labelledby="frameworks" onValueChange={setValue} value={value}>
        <Label id="frameworks">Select Frameworks</Label>
        {frameworks.map((framework) => (
          <Label className="ms-4" key={framework.id}>
            <Checkbox value={framework.id} />
            {framework.name}
          </Label>
        ))}
      </CheckboxGroup>
      <pre className="rounded-lg bg-muted px-3 py-2 text-sm">
        <code>{JSON.stringify(value)}</code>
      </pre>
    </div>
  );
}
