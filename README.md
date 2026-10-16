# ZBM UI

**Solid foundation for a design system.**

ZBM UI is a copy-paste component library and design system built with [Base UI](https://base-ui.com), [Tailwind CSS](https://tailwindcss.com) v4 and TypeScript. Components live in your codebase — not in `node_modules` — so you own every line.

- **Documentation:** [ui.zubayer.dev](https://ui.zubayer.dev)
- **CLI:** `npx zbmui@latest init`

## Features

- **Accessible by default** — built on Base UI primitives with WAI-ARIA semantics, focus management and keyboard support
- **CSS-first theming** — plain CSS variables and oklch color ramps, no runtime theme engine; dark mode included
- **Copy-paste workflow** — pull components into your project with the `zbmui` CLI; imports are rewritten to your aliases, dependencies installed automatically
- **TypeScript-first** — fully typed props and variants
- **40+ components** with live, interactive examples in the docs

## Quick start

```bash
# Initialize ZBM UI in your project (Next.js or Vite + Tailwind v4)
npx zbmui@latest init

# Add components
npx zbmui@latest add button dialog tooltip
```

See the [installation guide](https://ui.zubayer.dev/docs/installation) for prerequisites and framework setup.

## Repository structure

This is a pnpm + Turborepo monorepo:

| Path                         | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `apps/web`                   | Documentation site (Next.js, fumadocs) — ui.zubayer.dev          |
| `packages/cli`               | `zbmui` — the CLI for installing and managing components         |
| `packages/ui`                | `@zbmui/ui` — the component library itself (Base UI + Tailwind)  |
| `packages/registry`          | `@zbmui/registry` — registry item schemas and config types (zod) |
| `packages/typescript-config` | Shared `tsconfig` presets                                        |

The docs site embeds the components from `packages/ui` and publishes them as registry JSON via `packages/registry`'s schemas.

## Development

Prerequisites: Node.js `>= 24` and pnpm `12` (pinned via `packageManager`; Corepack handles it).

```bash
pnpm install        # install dependencies
pnpm dev            # start all dev servers (docs site, CLI watch)
```

Common tasks from the repository root:

| Command                   | What it does                                            |
| ------------------------- | ------------------------------------------------------- |
| `pnpm build`              | Build all apps and packages (Turbo)                     |
| `pnpm lint`               | Run Biome across the workspace                          |
| `pnpm check-types`        | Type-check all packages                                 |
| `pnpm test`               | Run all test suites                                     |
| `pnpm web build:registry` | Regenerate the registry JSON + demo index in `apps/web` |

Scoped shortcuts: `pnpm web …`, `pnpm ui …`, `pnpm cli …` run scripts in a single package.

### Working with the registry

Component sources live in `apps/web/src/registry` (under `ui/`, `components/`, `forms/`, `hooks/`). After adding or editing registry items, run:

```bash
pnpm web build:registry
```

This regenerates `apps/web/public/r/*.json` and `apps/web/src/registry/__index__.tsx`, which the docs previews and the CLI both consume.

## License

MIT
