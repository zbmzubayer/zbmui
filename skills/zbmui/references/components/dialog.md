# Dialog

A modal window for focused content, forms, editors, and supplemental tasks.

## Install

```bash
npx @zbmui/cli@latest add dialog --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
```

## Anatomy

- `Dialog` — root state
- `DialogTrigger` — opens the dialog
- `DialogPopup` — portals backdrop and viewport around the popup
- `DialogHeader` — heading area
- `DialogTitle` — accessible title
- `DialogDescription` — supporting context
- `DialogBody` — scrollable body
- `DialogFooter` — action area
- `DialogClose` — explicit close control
- `dialogCreateHandle` supports imperative control; prefer root state where possible

## Example

```tsx
<Dialog>
  <DialogTrigger render={<Button variant="outline">Edit profile</Button>} />
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Update the public profile details.</DialogDescription>
    </DialogHeader>
    <DialogBody className="space-y-3">{/* Form fields */}</DialogBody>
    <DialogFooter>
      <DialogClose render={<Button variant="outline">Cancel</Button>} />
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogPopup>
</Dialog>
```

## Options

- Popup supports `position`, `backdropVariant`, `bottomStickyOnMobile`, `showCloseButton`, `showNestedParent`, `closeProps`, and `portalProps`.
- Backdrop variants are `blur`, `opaque`, and `transparent`.
- Positions include `top`, `center`, `bottom`, corners, and center-top/bottom variants.
- `DialogBody` wraps content in `ScrollArea` by default; disable with `scrollArea={false}` when unnecessary.

## Accessibility

- Always include `DialogTitle`.
- Add `DialogDescription` when the purpose is not fully described by the title.
- Preserve focus trapping, Escape close, and background inertness.
- Give the built-in close control a useful label; the installed default already does this.

## Pitfalls

- Do not use dialog for required confirmations; use `AlertDialog`.
- Do not stack nested dialogs unless the interaction truly requires it.
- Do not remove the title to accommodate a custom header.
- Test mobile sticky behavior before enabling `bottomStickyOnMobile`.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/dialog)
- [Base UI Dialog](https://base-ui.com/react/components/dialog)
