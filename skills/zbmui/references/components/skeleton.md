# Skeleton

Shows a placeholder while content is loading.

## Install

```bash
npx @zbmui/cli@latest add skeleton --yes --cwd "<app-root>"
```

## Import

```tsx
import { Skeleton } from "@/components/ui/skeleton";
```

## Anatomy

- `Skeleton` — animated placeholder block

## Example

```tsx
<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-3 w-48" />
  </div>
</div>
```

## Accessibility

- Skeletons are visual placeholders; ensure the loading state is also conveyed to assistive technology when content takes significant time.
- Replace skeletons with real content as soon as it is available.
- Do not use skeletons for long-term empty states.

## Pitfalls

- Do not animate hundreds of skeleton nodes; use representative blocks.
- Match approximate final dimensions to prevent layout shift.
- Do not use skeleton styling for static disabled content.

## References

- [ZBM UI documentation](https://ui.zubayer.dev/docs/components/skeleton.md)
