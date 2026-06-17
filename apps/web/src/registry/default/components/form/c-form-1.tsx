"use client";

import { useState } from "react";

import { Button } from "@/registry/default/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";
import { Spinner } from "@/registry/default/ui/spinner";

export function FormDemo() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert(`Email: ${formData.get("email") || ""}`);
  };

  return (
    <Form className="flex w-full max-w-64 flex-col gap-4" onSubmit={onSubmit}>
      <Field name="email">
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="you@example.com" required />
        <FieldError>Please enter a valid email.</FieldError>
      </Field>
      <Button type="submit" disabled={loading} focusableWhenDisabled>
        {loading && <Spinner />}
        Submit
      </Button>
    </Form>
  );
}
