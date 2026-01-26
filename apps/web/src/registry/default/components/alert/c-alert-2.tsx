import {
  IconAlertCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
} from "@tabler/icons-react";

import { Alert, AlertContent, AlertIndicator, AlertTitle } from "@/registry/default/ui/alert";

const alerts = [
  {
    variant: "primary",
    icon: IconInfoCircle,
    title: "This is a primary alert",
  },
  {
    variant: "secondary",
    icon: IconInfoCircle,
    title: "This is a secondary alert",
  },
  {
    variant: "info",
    icon: IconInfoCircle,
    title: "This is an info alert",
  },
  {
    variant: "success",
    icon: IconCircleCheck,
    title: "This is a success alert",
  },
  {
    variant: "warning",
    icon: IconAlertTriangle,
    title: "This is a warning alert",
  },
  {
    variant: "error",
    icon: IconAlertCircle,
    title: "This is an error alert",
  },
] as const;

export function AlertDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {alerts.map(({ variant, icon: Icon, title }) => (
        <Alert key={variant} variant={variant} className="max-w-xl">
          <AlertIndicator>
            <Icon />
          </AlertIndicator>
          <AlertContent>
            <AlertTitle>{title}</AlertTitle>
          </AlertContent>
        </Alert>
      ))}
    </div>
  );
}
