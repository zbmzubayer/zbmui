---
name: zbmui
description: Use when installing, initializing, composing, styling, or debugging ZBM UI in a consumer React project; when a request mentions ZBM UI, zbmui, @zbmui/cli, or ui.zubayer.dev; and when building UI in a project already initialized with ZBM UI. Covers the CLI, registry components, Base UI composition, Tailwind v4 themes, forms, and dark mode.
license: MIT
compatibility: Requires network access for CLI/docs discovery and Node.js >=24 for @zbmui/cli. Consumer projects use Next.js or Vite, TypeScript, and Tailwind CSS v4.
metadata:
  author: zbmzubayer
  homepage: https://ui.zubayer.dev
---

# ZBM UI

Use this skill to adopt, install, compose, style, or troubleshoot ZBM UI in a consumer React project.

ZBM UI components are Base UI primitives styled with Tailwind CSS v4 and copied into the consumer project as source. They are not a runtime npm package. The installed files belong to the consumer; preserve local customizations.

Do not apply this skill to shadcn/Radix projects unless the user explicitly wants to migrate or combine systems. Do not translate ZBM UI examples to Radix `asChild`; Base UI uses `render` composition.

## Required workflow

### 1. Establish intent and the application root

- Follow the consumer repository's own instructions and find the nearest application `package.json`; a monorepo root is not necessarily the app.
- Determine whether the user wants to adopt ZBM UI, use an existing installation, or only answer a question.
- Do not write files for a read-only question.
- Read `package.json`, lockfile, `tsconfig.json`, relevant source, and `components.json` when present.
- Treat a `components.json` with `https://ui.zubayer.dev/schema.json` or a known ZBM UI registry setting as ZBM UI.
- If `components.json` is missing or belongs to shadcn or another system, stop before changing it and explain the conflict.

### 2. Check prerequisites

Verify:

- Node.js `>=24`
- Next.js or Vite
- TypeScript and a `tsconfig.json` with resolvable path aliases
- Tailwind CSS v4 using CSS-first configuration

Report the exact blocker if any requirement is missing. Ask before changing the framework, TypeScript setup, aliases, or Tailwind version.

### 3. Discover the current registry

Run from the consumer app context:

```bash
npx @zbmui/cli@latest list --json --cwd "<app-root>"
```

Use `registry:ui` names for primitives. Hooks and utilities such as `cn()` are normally resolved by the CLI as dependencies.

If a requested component name is unknown, use the registry result to find the closest valid name or ask. Never silently substitute a guessed component.

### 4. Inspect before writing

- Read existing local component source and wrappers before installing more components.
- Existing consumer modifications are authoritative.
- For a new installation, explain that `init` writes `components.json`, theme CSS imports, and the `cn()` utility, then installs missing base dependencies.
- Use interactive `init` for non-standard CSS or alias locations. If prompts cannot be completed, ask the user to run it or agree on explicit settings.
- For a standard, authorized setup:

```bash
npx @zbmui/cli@latest init --yes --cwd "<app-root>"
npx @zbmui/cli@latest add button dialog --yes --cwd "<app-root>"
```

Replace `button dialog` with the minimal actual set.

- `add --yes` skips existing files. A zero exit does not prove every file changed; inspect the output and files.
- Do not use `--all` for an ordinary feature.
- Never add `--overwrite` without explicit user approval after identifying affected files and local changes.
- Do not manually install npm packages already supplied by registry items.
- Use `--registry` or `ZBMUI_REGISTRY_URL` only for an explicitly requested trusted registry or repository test.

### 5. Resolve APIs and compose

After installation:

- Resolve aliases from `components.json` and `tsconfig.json`.
- Read the actual local source for exports, prop types, controlled-state behavior, and consumer customizations.
- Import only through the consumer's configured aliases, for example `@/components/ui/button`.
- Do not treat private workspace packages or registry-source paths as available consumer dependencies.
- Use only the exact component reference for each confirmed registry item:

```text
references/components/<registry-name>.md
```

- Load a topical reference when the task crosses setup, composition, forms, theming, or troubleshooting:

- [CLI and project setup](references/cli.md)
- [Component composition](references/composition.md)
- [Forms](references/forms.md)
- [Theming and dark mode](references/theming.md)
- [Troubleshooting](references/troubleshooting.md)

- Use Base UI's `render` pattern, not Radix's `asChild`.
- Preserve accessible names, keyboard behavior, focus management, and disabled/loading behavior.
- Use Tabler icons when icons are needed unless the consumer already standardizes on another icon set.
- Add `"use client"` only to modules that need client-side behavior under the consumer's framework.
- Prefer wrappers, composition, and semantic tokens over editing primitive source.

### 6. Verify and report

Before finishing:

1. Inspect `git diff`, written-file output, and dependency/config changes.
2. Detect files that were skipped because they already existed.
3. Search consumer changes for imports that bypass the configured aliases, Radix `asChild`, or a newly introduced icon library that conflicts with the project.
4. Re-read edited imports against local exports and aliases.
5. Run the nearest consumer type-check, lint, tests, and production build.
6. Where tooling exists, exercise forms, dialogs, sheets, menus, popups, keyboard interaction, and light/dark rendering.
7. Report components installed, files changed, dependencies added, checks run, skipped files, and unresolved issues.

Never report a skipped install, unrun check, or unverified build as success.

## Safety invariants

- Do not initialize a project without user intent.
- Do not treat a missing or unrecognized `components.json` as proof of ZBM UI initialization. Never overwrite a `components.json` owned by another component system.
- Do not use `--overwrite` as a generic retry.
- Do not install docs-only `c-*` demos as registry components.
- Do not invent component names, exports, props, or examples.
- Do not replace ZBM UI source wholesale after the consumer has customized it.
- Do not claim that hosted documentation was read unless the request succeeded.
- Do not collect prompts, consumer source, or secrets for telemetry.

## API authority order

When sources disagree, use this order:

1. Consumer-local installed and customized source
2. Newly installed local registry source
3. Reviewed hosted docs and focused references in this skill
4. Base UI upstream documentation for the underlying primitive only

The live registry and local source are the final API authorities.

## Completion checklist

A ZBM UI task is complete only when:

- The intended app root and configuration owner were identified.
- Only the required top-level registry items were installed.
- Existing consumer files and customizations were preserved unless explicitly approved.
- Imports use the consumer's configured aliases.
- No registry-internal, Radix-only, or conflicting-icon imports were introduced.
- The consumer's relevant checks and production build pass, or the exact failure is reported.
- The final response lists evidence, skipped files, and any behavior that could not be tested.
