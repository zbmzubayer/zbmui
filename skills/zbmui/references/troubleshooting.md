# Troubleshooting

Use this reference when a ZBM UI setup, install, import, render, or build fails. Diagnose before retrying or editing files.

## First checks

- Confirm the actual application root and pass it with `--cwd` when needed.
- Confirm Node.js `>=24`, Next.js or Vite, TypeScript, Tailwind CSS v4, and a resolvable `@/*` alias.
- Read `components.json` and determine whether it belongs to ZBM UI.
- Read the installed local source and `tsconfig.json` aliases.
- Preserve command output, exit codes, and the CLI's written-file list.

## Unknown component or hook

Run:

```bash
npx @zbmui/cli@latest list --json --cwd "<app-root>"
```

- Use exact `registry:ui` names for top-level components.
- Hooks and `cn()` are usually transitive dependencies.
- Docs-only `c-*` demos are not installable registry items.
- If the requested item is absent, ask or choose the closest valid item from the output; never invent a name.

## Initialization failures

### Unsupported framework

The CLI supports Next.js and Vite. If detection fails, inspect `package.json` and report the supported-framework requirement. Do not rename packages or mutate framework code just to bypass detection.

### Unsupported Tailwind version

ZBM UI requires Tailwind CSS v4. If v3 or no Tailwind is detected, report the exact finding and ask before upgrading the consumer project. Do not silently rewrite Tailwind configuration.

### Missing path alias

`init` requires an alias that resolves `@/components` through `tsconfig.json` paths. Add a valid `baseUrl`/`paths` mapping or use interactive `init` with a deliberate custom alias. Do not manually copy files to avoid fixing alias resolution.

### Existing `components.json`

- `init --yes` fails when a config exists.
- If the schema is ZBM UI, use `add`; re-run `init` only when the user explicitly wants to change configuration.
- If the schema or contents belong to shadcn or another system, stop and explain the ownership conflict.
- Never overwrite an unrecognized config to make the CLI proceed.

## Install failures and skipped files

- A successful `add --yes` can still skip existing files. Inspect output and local files before saying an install completed.
- Do not add `--overwrite` as an automatic retry.
- Before any overwrite, list affected files, check local modifications, and get explicit approval.
- If the CLI resolves dependencies but writes no files, compare the resolved names with local files and the registry payload.
- If a registry request fails, verify the configured registry and network. Use a trusted `--registry` override only when explicitly requested.

## Import and alias errors

Forbidden imports:

```tsx
@zbmui/ui
@/registry/default/*
```

Replace them with the consumer aliases from `components.json`, commonly `@/components/ui/*`, `@/hooks/*`, and `@/lib/*`.

For missing exports:

- Read the installed file before adding an import.
- Check for consumer-local renames.
- Check component reference anatomy, then local source.
- Do not import an export from this skill that the installed source does not provide.

For unresolved alias paths:

- Verify `components.json` aliases.
- Verify matching `tsconfig.json` `paths`.
- Restart the dev server after alias changes when needed.

## Hosted docs and registry outages

The canonical hosted component page is:

```text
https://ui.zubayer.dev/docs/components/<name>.md
```

If it returns an error:

- Say the docs request failed.
- Use `list --json`, the `/r/<name>.json` registry payload, and installed local source.
- Do not claim docs were read or invent an example.

Use `https://ui.zubayer.dev/r/index.json` for the live index.

## Rendering and styling problems

### Popup is hidden, clipped, or under another element

- Confirm required portal, positioner, viewport, and backdrop parts are present.
- Check whether an ancestor uses `overflow`, `transform`, `filter`, or `contain` that breaks fixed/portal placement.
- Check the component's documented isolation/root requirements.
- Verify iOS Safari behavior before changing CSS.
- Do not add arbitrary z-index values as the first fix.

### Component looks unstyled

- Verify `init` injected ZBM UI theme CSS after `@import "tailwindcss";`.
- Verify the configured global CSS path is actually imported by the app.
- Verify no duplicate or older Tailwind/theme files are overriding styles.
- Rebuild the production app; dev-only caches can hide CSS problems.

### Dark mode does not change

- Verify the root element receives `light` or `dark`.
- Verify the installed theme uses class-based dark styles.
- In Next.js, verify `next-themes`, the root provider, and `suppressHydrationWarning` on `<html>`.
- In Vite, verify the provider updates `document.documentElement` and handles system preference.

## Form problems

- Confirm field `name` matches the form value key.
- Use a native `<form>` with React Hook Form's `handleSubmit`.
- Use `Controller` for controlled values and pass `name` to `Field`.
- Use `FieldControl` when local source/docs require explicit field integration, including the documented `Textarea` case.
- Check that validation dependencies are installed and versions are compatible.

## Build and type failures

- Run the nearest consumer type-check first and fix the first relevant error.
- Check component import paths and exported names against local source.
- Check React Server Component boundaries; move state/effects/event handlers into a client component with `"use client"`.
- Check missing peer dependencies reported by TypeScript or the bundler.
- Do not relax TypeScript or lint rules solely to make generated code pass.

## Reporting

Report:

- The exact command and error.
- Whether files were written, skipped, or overwritten.
- The registry/version and component names involved.
- The diagnosis and the smallest safe next step.

Do not recommend destructive resets, reinstalling all components, or deleting the consumer project as a normal recovery path.
