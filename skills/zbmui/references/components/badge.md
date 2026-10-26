# Badge

Displays a compact status label or count.

## Install

```bash
npx @zbmui/cli@latest add badge --yes --cwd "<app-root>"
```

## Import

```tsx
import { Badge, badgeVariants } from "@/components/ui/badge";
```

## Anatomy

- `Badge` — styled status element; defaults to a `span`
- `badgeVariants` — class variant helper for custom compositions

## Example

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="outline" size="sm">3</Badge>
```

Use `badgeVariants` on a semantic element when the default tag must change:

```tsx
<a className={badgeVariants({ variant: "secondary" })} href="/labels/beta">
  Beta
</a>
```

## Variants

Sizes:

- `sm`
- `default`
- `lg`

Variants:

- `primary` — default
- `secondary`
- `outline`
- `info`
- `success`
- `warning`
- `danger`
- `error`

## Accessibility

- Keep badge text short and readable.
- Do not communicate status by color alone.
- If a badge conveys a count or state, ensure nearby text or label provides context.

## Pitfalls

- Do not use a badge as the only label for an interactive control.
- Do not render every badge as a button; use the `render` prop or `badgeVariants` only when interaction is intended.
- Avoid long, sentence-length badge content.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/badge)
