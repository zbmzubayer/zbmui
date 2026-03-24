"use client";

import { useState } from "react";

import { Button } from "@/registry/default/ui/button";
import { Spinner } from "@/registry/default/ui/spinner";

export function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      disabled={loading}
      focusableWhenDisabled
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }}
    >
      {loading && <Spinner />}
      {loading ? "Submitting" : "Submit"}
    </Button>
  );
}
