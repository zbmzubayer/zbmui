"use client";

import { useState } from "react";
import { z } from "zod";

import { Button } from "@/registry/default/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Form, type FormPrimitive } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.coerce.number("Age must be a number").positive("Age must be a positive number"),
});

async function submitForm(formValues: FormPrimitive.Values) {
  const result = formSchema.safeParse(formValues);

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return {
    errors: {},
  };
}

export function FormDemo() {
  const [errors, setErrors] = useState({});

  return (
    <Form
      errors={errors}
      onFormSubmit={async (formValues) => {
        const response = await submitForm(formValues);
        setErrors(response.errors);
      }}
      className="flex w-full max-w-64 flex-col gap-4"
    >
      <Field name="name">
        <FieldLabel>Name</FieldLabel>
        <Input type="text" placeholder="Enter your name" required />
        <FieldError>{formSchema.shape.name.safeParse("").error?.issues[0].message}</FieldError>
      </Field>
      <Field name="age">
        <FieldLabel>Age</FieldLabel>
        <Input type="number" placeholder="Enter your age" required />
        <FieldError>{formSchema.shape.age.safeParse("").error?.issues[0].message}</FieldError>
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
