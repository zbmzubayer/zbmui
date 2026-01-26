"use client";

import { useState } from "react";

import { IconInfoCircle, IconX } from "@tabler/icons-react";

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
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible ? (
        <Alert variant="primary" className="max-w-xl">
          <AlertIndicator>
            <IconInfoCircle />
          </AlertIndicator>
          <AlertContent>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>Describe what can be done about it here.</AlertDescription>
          </AlertContent>
          <AlertAction>
            <Button
              variant="outline"
              size="icon-xs"
              className="rounded-full"
              onClick={() => setIsVisible(false)}
            >
              <IconX className="size-3.5" />
            </Button>
          </AlertAction>
        </Alert>
      ) : (
        <Button onClick={() => setIsVisible(true)}>Show</Button>
      )}
    </>
  );
}
