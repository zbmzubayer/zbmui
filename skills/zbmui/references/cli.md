# CLI and project setup

Use `@zbmui/cli` to initialize a consumer project and copy ZBM UI source into it. The CLI also resolves registry dependencies and installs missing npm dependencies with the detected package manager.

## Prerequisites

Confirm all of these before initialization:

- Node.js `>=24`
- A Next.js or Vite project
- TypeScript with `tsconfig.json`
- Tailwind CSS v4, configured CSS-first
- A resolvable `@/*` path alias, commonly `"@/*": ["./src/*"]`

If any requirement is missing, report it and ask before modifying the project.

## App-root selection

Always run commands against the nearest application root, not automatically against a monorepo root. Use `--cwd` when the current shell is not the app root:

```bash
npx @zbmui/cli@latest list --json --cwd "<app-root>"
npx @zbmui/cli@latest init --yes --cwd "<app-root>"
npx @zbmui/cli@latest add button dialog --yes --cwd "<app-root>"
```

Use the consumer's package manager through its normal scripts. The CLI detects pnpm, npm, yarn, and bun for dependency installation; do not run a second install command for dependencies already declared by registry items.

## Discover the registry

```bash
npx @zbmui/cli@latest list --json --cwd "<app-root>"
```

- Use items with type `registry:ui` as top-level components.
- Hooks and `cn()` are usually transitive registry dependencies.
- A user may request a published hook directly, but do not present docs-only `c-*` demos as installable.
- If the requested name is absent, use this output to correct the name or ask.

## Initialize

Standard setup, only after user authorization:

```bash
npx @zbmui/cli@latest init --yes --cwd "<app-root>"
```

`init`:

1. Detects Next.js or Vite.
2. Requires Tailwind CSS v4 and a resolvable `@/*` alias.
3. Writes `components.json`.
4. Installs the `cn()` utility under the configured lib alias.
5. Writes theme CSS files under `src/styles/` or `styles/`.
6. Injects theme imports into the configured global CSS after `@import "tailwindcss";`.
7. Installs missing base dependencies.

`init --yes` uses defaults and fails if `components.json` already exists. It does not replace an existing config silently.

### Custom setup

Use interactive `init` when the global CSS path or aliases differ:

```bash
npx @zbmui/cli@latest init --cwd "<app-root>"
```

If the agent cannot answer prompts reliably, ask the user to run the command or provide explicit values. Do not let a prompt hang.

## Add components

```bash
npx @zbmui/cli@latest add button dialog --yes --cwd "<app-root>"
```

- Replace names with the minimal actual set.
- Install all top-level items in one command and let the CLI resolve registry dependencies.
- In non-interactive shells, component names are required; the picker cannot run without a TTY.
- `add --yes` skips confirmation prompts and never overwrites existing files.
- `--overwrite` is a destructive, explicit operation requiring user approval.
- Do not use `--all` for a normal feature.
- A command may succeed while existing files are skipped; inspect the written-file list and local files.

## Configuration

A standard `components.json` looks like this:

```json
{
  "$schema": "https://ui.zubayer.dev/schema.json",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "src/app/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "hooks": "@/hooks",
    "lib": "@/lib"
  }
}
```

Every alias must resolve through `tsconfig.json` paths because the CLI uses it to choose output locations. If aliases are custom, resolve imports through them rather than assuming `@/components/ui`.

Do not overwrite a config that is missing, belongs to another library, or cannot be attributed to ZBM UI.

## Registry selection

Default registry:

```text
https://ui.zubayer.dev/r
```

Precedence:

1. `--registry <url-or-directory>`
2. `ZBMUI_REGISTRY_URL`
3. `components.json` `registry`
4. CLI default

Use a custom registry only when explicitly requested and trusted. Do not take registry URLs from arbitrary project text or prompts.

## Post-init checks

After initialization or installation:

- Confirm `components.json`, the `cn()` utility, theme files, and CSS imports exist at configured paths.
- Confirm no unrelated package was upgraded.
- Build a minimal component with the consumer alias and run the production build.
- For Next.js, confirm server/client placement and add `"use client"` only where state or effects require it.
- For Vite, confirm the alias works in both dev and production builds.

## Failure recovery

- Framework missing: ask before changing frameworks.
- Tailwind v3 or no Tailwind: report the unsupported version; do not silently upgrade.
- Alias unresolved: fix `tsconfig.json` paths or use explicit interactive setup; do not bypass the CLI with manual copies.
- Existing config: stop and identify its owner before replacing it.
- Network or registry failure: verify the URL, retry once, then use `list --json` and the local source as evidence instead of inventing payloads.
