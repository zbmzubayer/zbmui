"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import {
  Field,
  FieldControl,
  FieldError,
  FieldItem,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";
import { Spinner } from "@/registry/default/ui/spinner";
import { Textarea } from "@/registry/default/ui/textarea";

const GENDERS = {
  Male: "Male",
  Female: "Female",
  Other: "Other",
} as const;

const ALLOWED_NETWORK_PROTOCOLS = ["HTTP", "HTTPS", "SSH"] as const;

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be at most 100 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(100, "Description must be at most 100 characters."),
  gender: z.enum(GENDERS, "Please select a gender"),
  allowedNetworkProtocols: z
    .array(z.enum(ALLOWED_NETWORK_PROTOCOLS))
    .min(1, "Please select at least one network protocol"),
});

type FormValue = z.infer<typeof formSchema>;

export function BugReportForm() {
  const form = useForm<FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      gender: "Male",
      allowedNetworkProtocols: [],
    },
  });

  function onSubmit(data: FormValue) {
    // Do something with the form values.
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-3">
      <Controller
        name="name"
        control={form.control}
        render={({
          field: { name, ...fieldProps },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Name</FieldLabel>
            <Input {...fieldProps} placeholder="Enter your name" />
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
              render={<Textarea {...fieldProps} placeholder="Enter your description" />}
            />
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Controller
        name="gender"
        control={form.control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <div id="gender-label" className="font-medium text-sm">
              Select Gender
            </div>
            <RadioGroup
              aria-labelledby="gender-label"
              inputRef={ref}
              value={value}
              onValueChange={onChange}
              className="flex-row gap-4"
            >
              {Object.entries(GENDERS).map(([val, label]) => (
                <FieldItem key={val} className="flex items-center">
                  <FieldLabel>
                    <Radio value={val} onBlur={onBlur} />
                    {label}
                  </FieldLabel>
                </FieldItem>
              ))}
            </RadioGroup>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Controller
        name="allowedNetworkProtocols"
        control={form.control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Allowed Network Protocols</FieldLabel>
            <CheckboxGroup value={value} onValueChange={onChange} className="flex-row gap-4">
              {ALLOWED_NETWORK_PROTOCOLS.map((val) => (
                <FieldItem key={val} className="flex items-center">
                  <FieldLabel>
                    <Checkbox
                      inputRef={val === "HTTP" ? ref : undefined}
                      value={val}
                      onBlur={onBlur}
                    />
                    {val}
                  </FieldLabel>
                </FieldItem>
              ))}
            </CheckboxGroup>
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
