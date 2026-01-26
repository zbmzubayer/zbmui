import { Alert, AlertContent, AlertDescription, AlertTitle } from "@/registry/default/ui/alert";

export function AlertDemo() {
  return (
    <Alert className="max-w-xl">
      <AlertContent>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          <p>Describe what can be done about it here.</p>
        </AlertDescription>
      </AlertContent>
    </Alert>
  );
}
