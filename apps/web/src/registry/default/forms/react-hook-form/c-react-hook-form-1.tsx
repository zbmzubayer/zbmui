"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/registry/default/ui/button";
import { Field, FieldControl, FieldError, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";
import { Spinner } from "@/registry/default/ui/spinner";
import { Textarea } from "@/registry/default/ui/textarea";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(100, "Description must be at most 100 characters."),
});

type FormValue = z.infer<typeof formSchema>;

export function BugReportForm() {
  const form = useForm<FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(data: FormValue) {
    // Do something with the form values.
    console.log(data);
    alert(`Bug Title: ${data.title}\nDescription: ${data.description}`);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-3">
      <Controller
        name="title"
        control={form.control}
        render={({
          field: { name, ...fieldProps },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Title</FieldLabel>
            <Input {...fieldProps} placeholder="Enter the bug title" />
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Controller
        name="description"
        control={form.control}
        render={({
          field: { name, ...fieldProps },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Description</FieldLabel>
            <FieldControl
              render={<Textarea {...fieldProps} placeholder="Enter the bug description" />}
            />
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <div className="flex items-center gap-2">
        <Button type="button" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button type="submit" disabled={form.formState.isSubmitting} focusableWhenDisabled>
          {form.formState.isSubmitting ? <Spinner /> : "Submit"}
        </Button>
      </div>
    </form>
  );
}
