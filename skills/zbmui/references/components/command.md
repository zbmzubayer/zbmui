# Command

A fast, keyboard-oriented command menu built on the autocomplete primitive.

## Install

```bash
npx @zbmui/cli@latest add command --yes --cwd "<app-root>"
```

## Import

```tsx
import {
  Command,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandShortcut,
} from "@/components/ui/command";
```

## Anatomy

- `Command` — always-open inline autocomplete
- `CommandInput` — search input with search icon
- `CommandPanel` — bounded result container
- `CommandList` — scrollable command list
- `CommandItem` — selectable action
- `CommandEmpty` — no-results state
- `CommandGroup` and `CommandGroupLabel` — grouped actions
- `CommandShortcut` — keyboard shortcut display
- `CommandFooter` — optional footer
- `CommandDialog*` parts wrap a command in a modal command palette

## Example

```tsx
const actions = ["Create file", "Search docs", "Open settings"];

<Command items={actions} itemToStringValue={(action) => action}>
  <CommandInput placeholder="Type a command" />
  <CommandPanel>
    <CommandList>
      {(action: string) => (
        <CommandItem key={action} value={action} onSelect={() => console.log(action)}>
          {action}
        </CommandItem>
      )}
    </CommandList>
    <CommandEmpty>No commands found.</CommandEmpty>
  </CommandPanel>
</Command>;
```

Command palette:

```tsx
<CommandDialog>
  <CommandDialogTrigger render={<Button variant="outline">Open command menu</Button>} />
  <CommandDialogPopup>
    <Command>{/* command content */}</Command>
  </CommandDialogPopup>
</CommandDialog>
```

## Options

- `Command` defaults to `inline`, `open`, `autoHighlight="always"`, and `keepHighlight=true`.
- Use `CommandDialogPopup` with `position` and `backdropVariant` for palettes.
- Use `CommandCollection` for advanced item collection.

## Accessibility

- Keep every command row labeled by its action text.
- Use real disabled semantics for unavailable commands.
- Do not communicate shortcuts only through visual kbd styling.

## Pitfalls

- Do not use command as a generic navigation menu; use `Menu` or `NavigationMenu`.
- Do not nest interactive controls inside command items.
- Confirm `onSelect` or selection callback props in installed local source.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/command.md)
