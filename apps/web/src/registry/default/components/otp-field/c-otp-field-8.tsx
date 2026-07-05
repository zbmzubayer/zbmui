import { Field, FieldDescription, FieldLabel } from "@/registry/default/ui/field";
import { OTPField, OTPFieldInput } from "@/registry/default/ui/otp-field";

const OTP_LENGTH = 6;

const OTP_SLOT_KEYS = Array.from({ length: OTP_LENGTH }, (_, i) => `otp-slot-${i}`);

export function OTPFieldDemo() {
  return (
    <div>
      <Field>
        <FieldLabel>Access code</FieldLabel>
        <OTPField aria-label="Access code" length={OTP_LENGTH} mask>
          {OTP_SLOT_KEYS.map((slotKey, index) => (
            <OTPFieldInput
              key={slotKey}
              aria-label={index === 0 ? undefined : `Character ${index + 1} of ${OTP_LENGTH}`}
            />
          ))}
        </OTPField>
        <FieldDescription>Use mask to obscure the code on shared screens.</FieldDescription>
      </Field>
    </div>
  );
}
