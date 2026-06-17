"use client";

import { useActionState } from "react";

import { Button } from "@/registry/default/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Form } from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";

interface FormState {
  serverErrors?: React.ComponentProps<typeof Form>["errors"];
}

export default function ActionStateForm() {
  const [state, formAction, loading] = useActionState<FormState, FormData>(submitForm, {});

  return (
    <Form
      errors={state.serverErrors}
      action={formAction}
      className="flex w-full max-w-64 flex-col gap-4"
    >
      <Field name="username">
        <FieldLabel>Username</FieldLabel>
        <Input type="username" required defaultValue="admin" placeholder="e.g. alice132" />
        <FieldError />
      </Field>
      <Button type="submit" disabled={loading} focusableWhenDisabled>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </Form>
  );
}

async function submitForm(_previousState: FormState, formData: FormData) {
  // Mimic a server response delay.
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const username = formData.get("username") as string | null;

    if (username === "admin") {
      return { success: false, serverErrors: { username: "'admin' is reserved for system use" } };
    }

    // 50% chance the username is taken
    const success = Math.random() > 0.5;

    if (!success) {
      return {
        serverErrors: { username: `${username} is unavailable` },
      };
    }
  } catch {
    return { serverErrors: { username: "A server error has occurred" } };
  }

  return {};
}
