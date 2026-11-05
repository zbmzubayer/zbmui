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
import { NumberField } from "@/registry/default/ui/number-field";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";
import { Slider, SliderLabel, SliderValue } from "@/registry/default/ui/slider";
import { Spinner } from "@/registry/default/ui/spinner";
import { Switch } from "@/registry/default/ui/switch";
import { Textarea } from "@/registry/default/ui/textarea";

const GENDERS = {
  Male: "Male",
  Female: "Female",
  Other: "Other",
} as const;

const ALLOWED_NETWORK_PROTOCOLS = ["HTTP", "HTTPS", "SSH"] as const;

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be at most 100 characters."),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters.")
    .max(100, "Bio must be at most 100 characters."),
  age: z
    .number("Age is required")
    .min(18, "Age must be at least 18")
    .max(120, "Age must be at most 120")
    .nullable()
    .refine((age): age is number => age !== null, "Age is required"),
  gender: z.enum(GENDERS, "Please select a gender"),
  notification: z.boolean(),
  allowedNetworkProtocols: z
    .array(z.enum(ALLOWED_NETWORK_PROTOCOLS))
    .min(1, "Please select at least one network protocol"),
  priceRange: z.tuple([z.number().min(0), z.number().max(1000)]),
});

type FormInput = z.input<typeof formSchema>;
type FormValue = z.output<typeof formSchema>;

export function BugReportForm() {
  const form = useForm<FormInput, unknown, FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      age: null,
      gender: "Male",
      notification: false,
      priceRange: [0, 1000],
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
        name="bio"
        control={form.control}
        render={({
          field: { name, ...fieldProps },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Bio</FieldLabel>
            <FieldControl render={<Textarea {...fieldProps} placeholder="Enter your bio" />} />
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Controller
        name="age"
        control={form.control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Age</FieldLabel>
            <NumberField
              placeholder="Enter your age"
              min={18}
              max={120}
              inputProps={{ ref, onBlur }}
              value={value}
              onValueChange={onChange}
              className="max-w-36"
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
              Gender
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
        name="notification"
        control={form.control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>
              Enable Notifications
              <Switch inputRef={ref} checked={value} onCheckedChange={onChange} onBlur={onBlur} />
            </FieldLabel>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Controller
        name="priceRange"
        control={form.control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Slider
              value={value}
              min={0}
              max={1000}
              step={10}
              format={{
                style: "currency",
                currency: "USD",
              }}
              onValueChange={(val) => {
                onChange(val);
              }}
              thumbProps={[
                { "aria-label": "Minimum price", inputRef: ref, onBlur },
                { "aria-label": "Maximum price", onBlur },
              ]}
            >
              <div className="mb-2 flex items-center justify-between">
                <SliderLabel>Price range</SliderLabel>
                <SliderValue />
              </div>
            </Slider>
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
