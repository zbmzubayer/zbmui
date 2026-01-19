"use client";

import { useState } from "react";

import { NumberField } from "@/registry/default/ui/number-field";

export function NumberFieldDemo() {
  const [age, setAge] = useState<number | null>(null);

  return (
    <>
      <label htmlFor="age" className="mb-2 inline-block font-medium">
        Enter your age
      </label>
      <NumberField id="age" min={0} max={200} value={age} onValueChange={setAge} />
      <p className="mt-2 text-muted-foreground text-sm">Your age is: {age ?? "null"}</p>
    </>
  );
}
