# Forms

Use this reference when building or debugging forms with ZBM UI in a consumer React project.

ZBM UI supplies field structure and styled controls. Schema-driven forms need React Hook Form and Zod, which are not dependencies of every component. Install them only when the feature needs them:

```bash
<consumer-package-manager> add react-hook-form zod @hookform/resolvers
```

## Choose one owner for validation

Pick one source of errors per form:

- **React Hook Form and Zod:** `Controller`, `zodResolver`, and `FieldError match={!!error}`. Errors come from RHF's `formState`.
- **Base UI `Form`:** native validation, `validate` on `Field`, and the `errors` prop. See [Base UI Form without React Hook Form](#base-ui-form-without-react-hook-form).

Do not mix the two in one form.

## Imports

Use consumer aliases:

```tsx
import { Button } from "@/components/ui/button";
import { Field, FieldControl, FieldError, FieldItem, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
```

Never copy imports from `@/registry/default/*`.

## Field anatomy

- `Field` — root for one named field. Props include `name`, `invalid`, `touched`, `dirty`, `disabled`, `validate`, and `validationMode`.
- `FieldLabel` — accessible label; `showRequiredIndicator` and `showOptionalIndicator` add visual markers.
- `FieldControl` — field adapter for controls that are not Base UI inputs (see below).
- `FieldDescription` — supplementary text.
- `FieldError` — error message. `match={true}` always shows it; `match` also accepts a validity key.
- `FieldItem` — wraps each option of a radio or checkbox group inside `Field`.
- `FieldValidity` — Base UI validity details when needed.

The installed source is authoritative for props and rendering behavior.

## React Hook Form example

The complete form is in [React Hook Form full example](examples/react-hook-form.md). It covers every control in the wiring table below, with a Zod schema, nullable empty values, and submit state. Start from it rather than writing a new form.

Each field follows one pattern. The `Name` field from the example:

```tsx
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
```

Rules the pattern follows:

- Use a plain `<form onSubmit={form.handleSubmit(onSubmit)}>`. Base UI's `Form` also renders a form, but it validates every field on submit and calls `preventDefault` itself when `onFormSubmit` is set. Combined with `handleSubmit`, the two would run competing validation and submit flows.
- Pass `invalid`, `touched`, and `dirty` from `fieldState` to `Field`, and pass `name` once.
- Pass `match={!!error}` to `FieldError`. `match={true}` always shows the message, which leaves visibility to RHF.
- `Input` renders Base UI's `Field.Control` itself, so spread `fieldProps` onto it directly. `Textarea` is a plain `<textarea>`, so wrap it in `FieldControl render={...}` to connect it to the field.

## Wiring other controls

Controls with their own value props need those props mapped explicitly. Spreading `fieldProps` onto them is not enough. The React Hook Form example above shows the mapping:

| Control                       | Wire                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `Switch`                      | `checked={value}`, `onCheckedChange={onChange}`, `inputRef={ref}`, `onBlur={onBlur}`                             |
| `RadioGroup`                  | `value={value}`, `onValueChange={onChange}`, `inputRef={ref}`; `onBlur` on each `Radio`                          |
| `CheckboxGroup`               | `value={value}`, `onValueChange={onChange}`; `inputRef={ref}` on one `Checkbox`, `onBlur` on each                |
| `Select`                      | `items`, `value={value}`, `onValueChange={onChange}`, `inputRef={ref}` on the root; `onBlur` on `SelectTrigger`  |
| `Combobox`                    | `items`, `value={value}`, `onValueChange={onChange}`; `ref` and `onBlur` on `ComboboxInput`                      |
| `Autocomplete`                | `value={value ?? ""}`, `onValueChange={(v) => onChange(v \|\| null)}`; `ref` and `onBlur` on `AutocompleteInput` |
| `NumberInput` / `NumberField` | `value={value}`, `onValueChange={onChange}`, `inputProps={{ ref, onBlur }}`                                      |
| `Slider`                      | `value={value}`, `onValueChange={onChange}`; `thumbProps={[{ inputRef: ref, onBlur }]}`                          |

Use the component reference for each control's value shape, for example [checkbox-group](components/checkbox-group.md), [radio-group](components/radio-group.md), [select](components/select.md), [slider](components/slider.md), [number-input](components/number-input.md), and [combobox](components/combobox.md).

## Empty values and types

- Use `null` for "nothing chosen" in `Select`, `Combobox`, `Autocomplete`, `NumberInput`, and `NumberField`.
- Turn `null` into a message in the schema:

  ```tsx
  age: z
    .number("Age is required")
    .min(18, "Age must be at least 18")
    .nullable()
    .refine((age): age is number => age !== null, "Age is required"),
  ```

- When the form's input type differs from its output type (nullable, refined, trimmed, or coerced fields), type the form with both:

  ```tsx
  const form = useForm<z.input<typeof formSchema>, unknown, z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  ```

- Zod v4 takes the message as the first argument to `z.number("...")` and `z.enum(values, "...")`, or as `{ error }`.

## Validation timing

- React Hook Form validates on submit by default, then re-validates on change after the first submit.
- Set `mode` on `useForm` to change this, for example `mode: "onBlur"`.
- Show errors with `FieldError match={!!error}`. Use `touched` and `dirty` for styling rules.

## Server errors

Map a server error to its field with `setError`:

```tsx
async function onSubmit(values: FormValues) {
  const response = await submitBugReport(values);
  if (!response.ok) {
    form.setError("title", { type: "server", message: response.message });
  }
}
```

For an error that belongs to no field, use `form.setError("root", { message })` and render it near the submit button.

## Submit and loading states

- `isSubmitting` is true only while the async handler is pending. Make `onSubmit` `async` and `await` the request, or the spinner never shows.
- Disable submission while a request is in flight. Keep the button focusable with `focusableWhenDisabled`.
- Pair a spinner with an accessible label or visible text: `<Spinner aria-label="Submitting" />`.
- `form.reset()` restores `defaultValues`. Reset only when the product flow expects it.

## Base UI Form without React Hook Form

Use Base UI's `Form` for native validation and server errors:

- `onFormSubmit(formValues)` receives the values. When it is set, the form calls `preventDefault` first.
- `errors` takes an object keyed by field `name`. Use it for server errors (the server-function example in the component docs pairs it with `useActionState` and `action`).
- `validationMode` defaults to `"onSubmit"`.
- `Field` accepts `validate` for per-field checks.
- The Zod example in the component docs uses `safeParse`, and its `z.flattenError` result feeds `errors`.

Resolve any other prop from the installed local source before writing code.

## Validation and errors

- Keep field `name` values stable and matching the schema keys.
- Keep `FieldError` text specific. `Field` associates it with the control.
- Do not signal an error with color alone.
- Preserve native HTML validation attributes only when they do not conflict with the schema.

## Verification

Run the consumer's type-check, tests, and build. Exercise:

1. Empty submission and schema errors.
2. Valid submission and loading state.
3. Reset and resubmission.
4. Keyboard-only completion.
5. Screen-reader association for labels, descriptions, and errors where tooling is available.

Never claim form behavior was verified from types or compilation alone.
