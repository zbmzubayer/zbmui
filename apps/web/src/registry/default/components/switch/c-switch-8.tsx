"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/registry/default/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Switch } from "@/registry/default/ui/switch";

const formSchema = z.object({
  marketing: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

export function SwitchDemo() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { marketing: undefined },
  });

  const onSubmit = async (data: FormValues) => {
    alert(`Form submitted with data: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-sm flex-col gap-4">
      <Controller
        name="marketing"
        control={form.control}
        render={({
          field: { name, value, onChange, ...fieldProps },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <div className="flex w-full items-center justify-between">
              <FieldLabel>Marketing Emails</FieldLabel>
              <Switch checked={value} onCheckedChange={onChange} {...fieldProps} />
            </div>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
