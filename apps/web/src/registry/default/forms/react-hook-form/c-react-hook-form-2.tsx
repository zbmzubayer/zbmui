"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/registry/default/ui/autocomplete";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/default/ui/combobox";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";
import { NumberField } from "@/registry/default/ui/number-field";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Slider, SliderLabel, SliderValue } from "@/registry/default/ui/slider";
import { Spinner } from "@/registry/default/ui/spinner";
import { Switch } from "@/registry/default/ui/switch";
import { Textarea } from "@/registry/default/ui/textarea";

const GENDERS = {
  Male: "Male",
  Female: "Female",
  Other: "Other",
} as const;

const SERVER_TYPES = [
  { label: "Select server type", value: null },
  { label: "Web Server", value: "web" },
  { label: "Database Server", value: "database" },
  { label: "File Server", value: "file" },
  { label: "Mail Server", value: "mail" },
  { label: "Application Server", value: "application" },
] as const;

const SERVER_TYPE_VALUES = SERVER_TYPES.map((option) => option.value).filter(Boolean) as Array<
  Exclude<(typeof SERVER_TYPES)[number]["value"], null>
>;

export const REGIONS = [
  { label: "US Central", value: "us-central" },
  { label: "US East", value: "us-east" },
  { label: "US West", value: "us-west" },
  { label: "Europe", value: "europe" },
  { label: "Asia South", value: "asia-south" },
  { label: "Asia East", value: "asia-east" },
] as const;

const IMAGES = ["nginx:1.29-alpine", "node:22-slim", "postgres:18", "redis:8.2.2-alpine"].map(
  (name) => ({
    url: `docker.io/library/${name}`,
    name,
  })
);

const ALLOWED_NETWORK_PROTOCOLS = ["HTTP", "HTTPS", "SSH"] as const;

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters."),
  email: z
    .email({
      error: (issues) => (issues.input ? "Invalid email address" : "Email is required"),
    })
    .trim(),
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
  priceRange: z.tuple([z.number().min(0), z.number().max(1000)]),
  serverType: z
    .enum(SERVER_TYPE_VALUES, "Please select a server type")
    .nullable()
    .refine(
      (value): value is (typeof SERVER_TYPE_VALUES)[number] => value !== null,
      "Please select a server type"
    ),
  region: z
    .enum(REGIONS.map((region) => region.value))
    .nullable()
    .refine(
      (value): value is (typeof REGIONS)[number]["value"] => value !== null,
      "Please select a region"
    ),
  containerImage: z.string().nullable(),
  allowedNetworkProtocols: z
    .array(z.enum(ALLOWED_NETWORK_PROTOCOLS))
    .min(1, "Please select at least one network protocol"),
});

type FormInput = z.input<typeof formSchema>;
type FormValue = z.output<typeof formSchema>;

export function FullFormDemo() {
  const form = useForm<FormInput, unknown, FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      age: null,
      gender: "Male",
      notification: false,
      priceRange: [50, 1000],
      serverType: null,
      region: null,
      containerImage: null,
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
            <Input placeholder="Enter your name" {...fieldProps} />
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Controller
        name="email"
        control={form.control}
        render={({
          field: { name, ...fieldProps },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Email</FieldLabel>
            <Input placeholder="Enter your email" {...fieldProps} />
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
            <FieldControl render={<Textarea placeholder="Enter your bio" {...fieldProps} />} />
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
            <div id="gender-label" className="cursor-default font-medium text-sm">
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
              onValueChange={onChange}
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
        name="serverType"
        control={form.control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Server Type</FieldLabel>
            <Select items={SERVER_TYPES} inputRef={ref} value={value} onValueChange={onChange}>
              <SelectTrigger onBlur={onBlur}>
                <SelectValue />
              </SelectTrigger>
              <SelectPopup>
                {SERVER_TYPES.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectPopup>
            </Select>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Controller
        name="region"
        control={form.control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel>Region</FieldLabel>
            <Combobox
              items={REGIONS}
              itemToStringLabel={(itemValue) =>
                REGIONS.find((r) => r.value === itemValue)?.label || ""
              }
              value={value}
              onValueChange={onChange}
            >
              <ComboboxInput placeholder="e.g. us-west-1" ref={ref} onBlur={onBlur} />
              <ComboboxPopup>
                <ComboboxEmpty>No regions found.</ComboboxEmpty>
                <ComboboxList>
                  {(region: (typeof REGIONS)[number]) => (
                    <ComboboxItem key={region.value} value={region.value}>
                      {region.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxPopup>
            </Combobox>
            <FieldError match={!!error}>{error?.message}</FieldError>
          </Field>
        )}
      />
      <Controller
        name="containerImage"
        control={form.control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <FieldLabel showOptionalIndicator>Container Image</FieldLabel>
            <Autocomplete
              items={IMAGES}
              mode="both"
              itemToStringValue={(item) => item.url}
              value={value ?? ""}
              onValueChange={(val) => onChange(val || null)}
            >
              <AutocompleteInput
                placeholder="e.g. docker.io/library/node:latest"
                ref={ref}
                onBlur={onBlur}
              />
              <FieldDescription>Enter a registry URL with optional tags</FieldDescription>
              <AutocompletePopup>
                <AutocompleteEmpty>No images found.</AutocompleteEmpty>
                <AutocompleteList>
                  {(image: (typeof IMAGES)[number]) => (
                    <AutocompleteItem
                      key={image.url}
                      value={image}
                      className="flex-col items-start"
                    >
                      <span>{image.name}</span>
                      <span className="whitespace-nowrap font-mono text-xs opacity-80">
                        {image.url}
                      </span>
                    </AutocompleteItem>
                  )}
                </AutocompleteList>
              </AutocompletePopup>
            </Autocomplete>
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
            <div id="allowed-network-protocols" className="cursor-default font-medium text-sm">
              Allowed Network Protocols
            </div>
            <CheckboxGroup
              aria-labelledby="allowed-network-protocols"
              value={value}
              onValueChange={onChange}
              className="flex-row gap-4"
            >
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
