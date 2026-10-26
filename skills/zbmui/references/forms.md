# Forms

Use this reference when building or debugging forms with ZBM UI in a consumer React project.

ZBM UI supplies field structure and styled controls. For schema-driven React forms, use React Hook Form and Zod explicitly; they are not automatic dependencies of every component.

## Imports

Use consumer aliases:

```tsx
import { Button } from "@/components/ui/button";
import { Field, FieldControl, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
```

Never copy imports from `@/registry/default/*`.

## Field anatomy

Use the compound field exports:

- `Field` — connects a named field and validation state
- `FieldLabel` — accessible label
- `FieldControl` — control adapter
- `FieldDescription` — supplementary text
- `FieldError` — error message
- `FieldValidity` — Base UI validity details when needed

The installed source is authoritative for props and rendering behavior.

## React Hook Form and Zod

Install integrations only when the feature needs them:

```bash
<consumer-package-manager> add react-hook-form zod @hookform/resolvers
```

Use a native `<form>` element with `form.handleSubmit` for React Hook Form. Do not confuse Base UI's `Form` wrapper with the required native form element.

```tsx
"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldControl, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function BugReportForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", description: "" },
  });

  function onSubmit(values: FormValues) {
    // Submit values here.
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
            <FieldDescription>Bug description</FieldDescription>
            <FieldControl render={<Textarea {...fieldProps} placeholder="Describe the bug" />} />
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <div className="flex items-center gap-2">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button type="submit" disabled={form.formState.isSubmitting} focusableWhenDisabled>
          {form.formState.isSubmitting ? <Spinner aria-label="Submitting" /> : "Submit"}
        </Button>
      </div>
    </form>
  );
}
```

Use `Controller` for controlled values. Pass the field `name` into `Field` and spread the remaining field props into the control.

Use `FieldControl` with `render` for controls that need explicit Base UI field integration, including the documented `Textarea` case. Read local source because consumers may have customized this behavior.

## Native Base UI forms

ZBM UI's `Form` re-exports a styled Base UI form wrapper and exposes `FormPrimitive`. For native Base UI validation behavior, use local source and the underlying Base UI form documentation.

Do not guess `onSubmit`, reset, or validity props. Resolve them from installed local source before writing code.

## Validation and errors

- Keep field `name` values stable and match the schema keys.
- Show errors only after a field is touched/dirty or after submission, according to the consumer's UX rules.
- Keep `FieldError` text specific and associated with the field.
- Do not replace accessible error text with color alone.
- Preserve native HTML validation attributes only when they do not conflict with the chosen schema.
- For checkboxes, switches, radio-like groups, select, combobox, autocomplete, number fields, OTP fields, and sliders, read the component reference and local source for controlled-value shape.

## Submit and loading states

- Disable submission while a request is in flight, but keep the control focusable if the installed button API supports it.
- Pair a spinner with an accessible label or visible text.
- Reset only when the product flow expects it.
- Handle server-side errors by mapping them back to the corresponding fields when possible.

## Verification

Run the consumer's type-check, tests, and build. Exercise:

1. Empty submission and schema errors.
2. Valid submission and loading state.
3. Reset and resubmission.
4. Keyboard-only completion.
5. Screen-reader association for labels, descriptions, and errors where tooling is available.

Never claim form behavior was verified from types or compilation alone.
