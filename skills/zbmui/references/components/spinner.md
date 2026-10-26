# Spinner

Indicates a loading state with a compact animated icon.

## Install

```bash
npx @zbmui/cli@latest add spinner --yes --cwd "<app-root>"
```

## Import

```tsx
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
```

## Anatomy

- `Spinner` — Tabler loader icon with `role="status"` and a default loading label

## Example

```tsx
<Button type="submit" disabled={isSubmitting}>
  {isSubmitting ? <Spinner /> : "Save"}
</Button>
```

Use a more specific label when multiple loading regions exist:

```tsx
<Spinner aria-label="Saving changes" />
```

## Accessibility

- Keep the built-in `role="status"` and accessible label.
- Pair inline loading text with the spinner when the action is not otherwise described.
- Do not use a spinner as the only long-progress indicator for work with known progress; use `Meter` or a progress representation.

## Pitfalls

- Do not strip the default `aria-label` without supplying a better one.
- Do not use spinners for layout placeholders; use `Skeleton`.
- Ensure motion and contrast remain readable in both color modes.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/spinner)
