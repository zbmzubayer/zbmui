"use client";

import { useState } from "react";

import { NumberField } from "@/registry/default/ui/number-field";

export function NumberFieldDemo() {
  const [quantity, setQuantity] = useState<number | null>(null);

  return (
    <div>
      <label htmlFor="quantity" className="mb-2 inline-block font-medium">
        Quantity
      </label>
      <NumberField
        id="quantity"
        inputProps={{ className: "w-[calc(4ch+20px)]" }}
        min={1}
        max={100}
        value={quantity}
        onValueChange={setQuantity}
      />
      <p className="mt-2 text-muted-foreground text-sm">Your quantity: {quantity ?? "null"}</p>
    </div>
  );
}
