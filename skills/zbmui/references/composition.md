# Component composition

Use this reference when selecting between related ZBM UI components, composing compound interfaces, or adapting examples into a consumer project.

## Import rules

Use the aliases from the consumer's `components.json` and `tsconfig.json`:

```tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
```

Never import from the private workspace package or registry-internal source aliases. Adapt every docs example to the consumer's actual aliases.

## Composition model

ZBM UI components wrap Base UI. Use Base UI's `render` prop to compose behavior with a semantic element or another component:

```tsx
<Button render={<a href="/settings" />}>Settings</Button>
```

Do not use Radix's `asChild`. If local source exposes `ButtonPrimitive`, use it only when the installed component does not expose the needed primitive part.

Prefer semantic HTML:

- Use a real `<a>` for navigation.
- Use `buttonVariants` when a plain anchor should look like a button.
- Do not turn an icon-only button into a meaningless `div`; keep it a button with an accessible label.
- Use `nativeButton={false}` only when rendering a valid non-button target that still exposes correct interaction semantics.

Read the installed local source before using advanced render behavior because local customizations are authoritative.

## Selection guide

| Need                                           | Start with                 | Avoid                                       |
| ---------------------------------------------- | -------------------------- | ------------------------------------------- |
| Important confirmation or destructive choice   | `alert-dialog`             | Plain `dialog` without an explicit decision |
| General modal content, editor, or form         | `dialog`                   | Alert dialog for routine content            |
| Supplemental panel, filters, mobile navigation | `sheet`                    | Dialog for large persistent layouts         |
| Action list opened by a button                 | `menu`                     | `select` for application actions            |
| Choose one or more predefined values           | `select`                   | Menu for arbitrary actions                  |
| Searchable single or multi-value input         | `combobox`                 | Plain select for large/filterable sets      |
| Search suggestions tied to free text           | `autocomplete`             | Select when arbitrary input is required     |
| Small contextual information on hover/focus    | `tooltip`                  | Popover for interactive content             |
| Rich interactive contextual content            | `popover`                  | Tooltip for controls                        |
| Command search and keyboard shortcuts          | `command`                  | Menu for large searchable datasets          |
| Website navigation with dropdown sections      | `navigation-menu`          | Menu for application actions                |
| Application navigation shell                   | `sidebar`                  | Hand-built fixed layout                     |
| Expand a section in place                      | `collapsible`              | Dialog for inline detail                    |
| Group related actions                          | `button-group`             | Separate buttons without grouping semantics |
| Loading placeholder                            | `skeleton`                 | Empty boxes with arbitrary styling          |
| Loading indicator                              | `spinner`                  | Text-only state without accessible context  |
| Filter or adjust a numeric value               | `slider` or `number-field` | Free text when range semantics matter       |

Load `references/components/<registry-name>.md` for the exact compound anatomy of each selected primitive.

## Common patterns

### Button and link

```tsx
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

<Link className={buttonVariants({ variant: "outline" })} href="/docs">
  Read the docs
</Link>;
```

For a framework-agnostic anchor, use a semantic `<a>`. Preserve focus and keyboard behavior.

### Dialog

Use the full compound anatomy from local source. Include a title and description for accessibility. Place destructive actions in the footer and keep labels specific.

### Popup layering

Do not patch arbitrary z-index values as the first solution. Check the installed component source and docs for its portal, backdrop, viewport, isolation, and root requirements. Preserve required portal and root wrappers. On iOS Safari, verify transformed ancestors or fixed positioning are not clipping the popup before changing styles.

### Forms

Use `Field`, `FieldLabel`, `FieldControl`, `FieldDescription`, and `FieldError` for consistent accessible field structure. See `references/forms.md`.

### Icons

Use Tabler icons when the design needs icons unless the consumer standardizes on another library. An icon-only interactive control still needs an accessible name:

```tsx
<Button size="icon" aria-label="Close">
  <IconX />
</Button>
```

### Client boundaries

Add `"use client"` only to modules using state, effects, event handlers, or client-only providers. Do not mark an entire layout client-side merely because one child is interactive.

## Working with installed source

- Prefer composing installed exported parts over editing primitive source.
- Create consumer wrappers for repeated local patterns.
- Use `cn()` for conditional class merging when the utility is installed.
- Preserve semantic CSS tokens and the consumer's naming/class conventions.
- Do not copy source back into the project from docs; use `zbmui add` so aliases and dependencies are transformed correctly.

## Accessibility checks

- Every interactive element has a programmatic accessible name.
- Dialogs, sheets, alert dialogs, menus, popovers, selects, and tooltips retain focus management and Escape behavior.
- Grouped controls have labels or group descriptions.
- Disabled controls do not trap focus; loading controls communicate state.
- Keyboard-only operation covers Tab, Shift+Tab, arrows, Enter, Space, and Escape as appropriate.
