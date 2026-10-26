# Theming and dark mode

Use this reference when styling ZBM UI components, customizing copied source, or adding light/dark support in a consumer project.

ZBM UI uses Tailwind CSS v4 and semantic theme CSS installed by `zbmui init`. Keep the consumer's theme files and styling conventions intact.

## Theme authority

Use this order when styles appear inconsistent:

1. Consumer-local installed theme CSS and component source
2. Newly installed local theme/component source
3. Reviewed ZBM UI docs
4. Tailwind CSS v4 and Base UI documentation

Do not copy theme CSS from this skill or docs without reconciling it with the installed files.

## Semantic tokens

Prefer installed semantic tokens and component variants over hard-coded colors. Use Tailwind utilities and existing variants such as `outline`, `secondary`, `ghost`, `destructive`, or size variants when they fit.

Avoid one-off palette values when an existing token communicates intent. If the consumer has a design system, map its tokens into the installed theme rather than replacing every component class.

Use `cn()` for conditional classes:

```tsx
import { cn } from "@/lib/utils";

cn("rounded-md border", isActive && "bg-primary text-primary-foreground");
```

Resolve the `cn()` path from `components.json`; it is not always `@/lib/utils`.

## Customizing copied source

Installed component files belong to the consumer. Before editing them:

- Check whether a wrapper, variant, className, or composition solves the need.
- Preserve exported names used by the rest of the project.
- Preserve accessibility, focus, motion, portal, and disabled-state behavior.
- Re-run type-check and build after source edits.
- Document intentional upstream customizations for future updates.

Do not re-run `zbmui add --overwrite` to refresh customized files without reviewing the diff and obtaining approval.

## Dark mode

The ZBM UI theme supports class-based light/dark styling. Add a framework-appropriate provider and verify actual rendering in both modes.

### Next.js

Install `next-themes` when needed:

```bash
<consumer-package-manager> add next-themes
```

Create a client provider:

```tsx
"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
      {...props}>
      {children}
    </NextThemeProvider>
  );
}
```

Wrap the root layout and add `suppressHydrationWarning` to `<html>`:

```tsx
import { ThemeProvider } from "@/providers/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

Use a client toggle with `useTheme()`. Give icon-only theme controls an accessible name.

### Vite

Use a small client-side provider that stores the selected theme and applies `light` or `dark` to `document.documentElement`, with a `prefers-color-scheme` fallback for `system`. Then wrap the application shell in `main.tsx`.

A typical provider exposes:

```tsx
type Theme = "dark" | "light" | "system";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read persisted theme, watch system preference, and update document.documentElement.
  return children;
}

export function useTheme() {
  // Return the current theme and setter, throwing outside the provider.
}
```

Match the consumer's existing provider if one already exists rather than installing a second theme system.

## Dark-mode styling rules

- Use semantic tokens so installed components respond automatically.
- If a one-off class is necessary, provide both light and dark behavior explicitly.
- Do not rely only on `dark:` if the underlying theme token already expresses the intent.
- Verify contrast, focus rings, borders, shadows, disabled states, and popup surfaces in both modes.
- Avoid storing a theme only in React state without updating the root class.
- Avoid hydration mismatches in Next.js by using `next-themes` behavior and `suppressHydrationWarning` on `<html>`.

## Popup and portal styling

For dialogs, sheets, menus, popovers, selects, and tooltips:

- Preserve portal, backdrop, viewport, and positioner wrappers.
- Check the component's documented isolation/root requirements.
- Do not apply arbitrary z-index fixes before checking portal placement and transformed/overflow ancestors.
- Verify popup surfaces in both color modes.

## Verification

After theme or source changes:

1. Run the consumer's type-check and production build.
2. Render representative components in light, dark, and system modes.
3. Check keyboard focus and disabled/loading states in both modes.
4. Verify dialogs, sheets, menus, selects, popovers, and tooltips remain visible and correctly layered.
5. Confirm no hard-coded color introduced an inaccessible or one-mode-only state.
