# Alert Dialog

A modal dialog for important interruptions that require an explicit user response.

## Install

```bash
npx @zbmui/cli@latest add alert-dialog --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
```

## Anatomy

- `AlertDialog` — root state
- `AlertDialogTrigger` — opens the dialog
- `AlertDialogPopup` — portals backdrop and viewport around the popup
- `AlertDialogHeader` — heading area
- `AlertDialogTitle` — accessible dialog title
- `AlertDialogDescription` — supporting context
- `AlertDialogFooter` — decision actions
- `AlertDialogClose` — explicit close control

## Example

```tsx
<AlertDialog>
  <AlertDialogTrigger render={<Button variant="danger-soft">Delete project</Button>} />
  <AlertDialogPopup>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete this project?</AlertDialogTitle>
      <AlertDialogDescription>
        This permanently removes the project and cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogClose render={<Button variant="outline">Cancel</Button>} />
      <Button variant="danger">Delete project</Button>
    </AlertDialogFooter>
  </AlertDialogPopup>
</AlertDialog>
```

## Options

- Popup supports `position`, `backdropVariant`, `bottomStickyOnMobile`, and `showNestedParent`.
- Backdrop variants are `opaque`, `blur`, and `transparent`.
- Footer variant can be `default` or `muted`.
- `alertDialogCreateHandle` is available for imperative control; prefer explicit root state when possible.

## Accessibility

- Always include `AlertDialogTitle`.
- Add `AlertDialogDescription` when the action has consequences that need context.
- Keep the destructive action label specific.
- Preserve focus trapping, Escape behavior, and background inertness.

## Pitfalls

- Do not use alert dialog for ordinary content or forms; use `Dialog`.
- Do not open multiple confirmation layers unless the interaction truly requires nesting.
- Do not remove the title to save space.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/alert-dialog.md)
- [Base UI Alert Dialog](https://base-ui.com/react/components/alert-dialog)
