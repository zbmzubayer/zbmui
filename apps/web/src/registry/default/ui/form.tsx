import { Form as FormPrimitive } from "@base-ui/react/form";

function Form(props: React.ComponentProps<typeof FormPrimitive>) {
  return <FormPrimitive data-slot="form" {...props} />;
}

export { Form, FormPrimitive };
