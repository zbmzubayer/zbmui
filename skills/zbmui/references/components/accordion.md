# Accordion

A vertically stacked set of interactive headings that reveal one section of content at a time.

## Install

```bash
npx @zbmui/cli@latest add accordion --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
```

## Anatomy

- `Accordion` — root state and grouping
- `AccordionItem` — one expandable section
- `AccordionTrigger` — button that opens its section
- `AccordionPanel` — collapsible section content

## Example

```tsx
<Accordion defaultValue={["account"]} className="w-full">
  <AccordionItem value="account">
    <AccordionTrigger>Account</AccordionTrigger>
    <AccordionPanel>Manage your account and security settings.</AccordionPanel>
  </AccordionItem>
  <AccordionItem value="billing">
    <AccordionTrigger>Billing</AccordionTrigger>
    <AccordionPanel>Review invoices and payment methods.</AccordionPanel>
  </AccordionItem>
</Accordion>
```

## Options

- Root supports Base UI accordion state props; use local source for single, multiple, controlled, and disabled behavior.
- Add `className` to any part without replacing its data attributes.
- The trigger includes a chevron indicator and rotation behavior.

## Accessibility

- Keep `AccordionTrigger` as the interactive heading control.
- Do not move interactive controls into the trigger without preserving button semantics.
- Panel content remains readable when JavaScript styling changes.

## Pitfalls

- Do not use accordion for primary navigation or frequently compared content.
- Do not force multiple sections open unless the product flow requires it.
- Preserve the `AccordionPanel` wrapper so height animation and overflow styles continue to work.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/accordion)
- [Base UI Accordion](https://base-ui.com/react/components/accordion)
