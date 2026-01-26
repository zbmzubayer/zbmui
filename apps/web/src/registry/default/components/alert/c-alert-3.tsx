import { IconInfoCircle } from "@tabler/icons-react";

import {
  Alert,
  AlertAction,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle,
} from "@/registry/default/ui/alert";
import { Button } from "@/registry/default/ui/button";

export function AlertDemo() {
  return (
    <Alert variant="info" className="max-w-xl">
      <AlertIndicator>
        <IconInfoCircle />
      </AlertIndicator>
      <AlertContent>
        <AlertTitle>Update available</AlertTitle>
        <AlertDescription>
          A new version of the application is available. Please update to the latest version to
          enjoy new features.
        </AlertDescription>
      </AlertContent>
      <AlertAction className="">
        <Button size="xs" variant="outline">
          Cancel
        </Button>
        <Button size="xs" variant="info">
          Update
        </Button>
      </AlertAction>
    </Alert>
  );
}
