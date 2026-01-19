import { Field as FieldPrimitive } from "@base-ui/react/field";

import { cn } from "@/lib/cn";

function Field({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Root>) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    />
  );
}

function FieldLabel({
  children,
  className,
  showRequiredIndicator,
  showOptionalIndicator,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Label> & {
  showRequiredIndicator?: boolean;
  showOptionalIndicator?: boolean;
}) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn("inline-flex items-center gap-2 font-medium text-sm", className)}
      {...props}
    >
      {children}
      {showRequiredIndicator && <span className="font-normal text-danger">*</span>}
      {showOptionalIndicator && (
        <span className="font-normal text-muted-foreground">(optional)</span>
      )}
    </FieldPrimitive.Label>
  );
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Description>) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn("text-muted-foreground text-xs", className)}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Error>) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn("text-danger text-xs", className)}
      {...props}
    />
  );
}

function FieldControl(props: React.ComponentProps<typeof FieldPrimitive.Control>) {
  return <FieldPrimitive.Control data-slot="field-control" {...props} />;
}
function FieldValidity(props: React.ComponentProps<typeof FieldPrimitive.Validity>) {
  return <FieldPrimitive.Validity data-slot="field-validity" {...props} />;
}

export { Field, FieldLabel, FieldDescription, FieldError, FieldControl, FieldValidity };
