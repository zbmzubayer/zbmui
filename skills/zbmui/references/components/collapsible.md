# Collapsible

Expands and collapses content in place without moving the user to a new surface.

## Install

```bash
npx @zbmui/cli@latest add collapsible --yes --cwd "<app-root>"
```

## Import

```tsx
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/components/ui/collapsible";
```

## Anatomy

- `Collapsible` — root open state
- `CollapsibleTrigger` — interactive toggle
- `CollapsiblePanel` — animated content region
- `CollapsiblePrimitive` — installed Base UI escape hatch

## Example

```tsx
<Collapsible defaultOpen>
  <CollapsibleTrigger className="cursor-pointer font-medium">Show recovery key</CollapsibleTrigger>
  <CollapsiblePanel>
    <p className="py-3 text-muted-foreground">Store this key somewhere safe.</p>
  </CollapsiblePanel>
</Collapsible>
```

## Options

Use Base UI root state props for controlled or uncontrolled open behavior. Read local source for exact prop names and disabled behavior.

## Accessibility

- Give the trigger descriptive text that changes or remains understandable with state.
- Do not put essential controls only inside a collapsed panel without an obvious discovery path.
- Preserve the panel wrapper so height animation does not clip content unexpectedly.

## Pitfalls

- Do not use collapsible for modal decisions; use `Dialog` or `AlertDialog`.
- Do not remove `CollapsiblePanel`; it supplies overflow and transition behavior.
- Test long content on small screens before switching to a sheet or dialog.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/collapsible.md)
- [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
