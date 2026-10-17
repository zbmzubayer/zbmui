# @zbmui/cli

The command-line tool for [ZBM UI](https://ui.zubayer.dev) — a copy-paste component library built with [Base UI](https://base-ui.com) and [Tailwind CSS](https://tailwindcss.com) v4.

The CLI pulls component source code into your project (not into `node_modules`), rewrites imports to match your aliases, and installs the required dependencies. You own every line.

## Requirements

- Node.js `>= 24`
- A TypeScript project with [tsconfig `paths`](https://www.typescriptlang.org/tsconfig#paths) (e.g. `"@/*": ["./src/*"]`)
- Tailwind CSS v4 (CSS-first configuration)
- Next.js or Vite

## Quick start

```bash
# Initialize ZBM UI in your project
npx @zbmui/cli@latest init

# Add a component
npx @zbmui/cli@latest add button

# Or pick components from an interactive list
npx @zbmui/cli@latest add

# See everything available
npx @zbmui/cli@latest list
```

## Commands

### `@zbmui/cli init`

Initialize ZBM UI in an existing project. It will:

- detect your framework (Next.js or Vite) and Tailwind version,
- write `components.json` with your aliases and CSS path,
- install the `cn()` utility into your lib alias,
- copy the theme files and inject the imports into your global CSS,
- install the base dependencies with your package manager.

| Option             | Description                                    |
| ------------------ | ---------------------------------------------- |
| `-y, --yes`        | Use defaults without prompting                 |
| `--cwd <path>`     | Project directory (default: current directory) |
| `--registry <url>` | Registry URL or local directory to pull from   |

### `@zbmui/cli add [components...]`

Add one or more components to your project. Registry dependencies of each component are resolved and installed automatically, imports are rewritten to your configured aliases, and missing npm dependencies are installed with your package manager. Existing files are never overwritten unless you pass `--overwrite`.

```bash
npx @zbmui/cli@latest add button dialog tooltip
```

Run `add` without component names in a terminal to pick from an interactive multi-select of every component. Space toggles the focused item, `a` selects all, `i` inverts the selection, and Enter installs the selected items. Hooks and utilities that a component needs are installed automatically as dependencies. In non-interactive environments (CI, piped input) the list is skipped and component names are required.

| Option             | Description                                    |
| ------------------ | ---------------------------------------------- |
| `[components...]`  | Component names to install                     |
| `-a, --all`        | Install every available component              |
| `-o, --overwrite`  | Overwrite existing files                       |
| `-y, --yes`        | Skip confirmation prompts (never overwrites)   |
| `--cwd <path>`     | Project directory (default: current directory) |
| `--registry <url>` | Registry URL or local directory to pull from   |

### `@zbmui/cli list`

List all available registry items, grouped by type.

| Option             | Description                          |
| ------------------ | ------------------------------------ |
| `--json`           | Print the raw registry index as JSON |
| `--cwd <path>`     | Project directory                    |
| `--registry <url>` | Registry URL or local directory      |

## Configuration

`zbmui init` writes a `components.json` at your project root:

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
  },
  "registry": "https://ui.zubayer.dev/r"
}
```

| Field                | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| `rsc`                | Whether the project uses React Server Components (Next.js App Router). |
| `tsx`                | Whether the project uses TSX syntax.                                   |
| `tailwind.css`       | Global CSS file where the theme imports are injected.                  |
| `aliases.ui`         | Import alias for UI components (must resolve via tsconfig `paths`).    |
| `aliases.components` | Import alias for example components.                                   |
| `aliases.hooks`      | Import alias for hooks.                                                |
| `aliases.lib`        | Import alias for lib/utils.                                            |
| `registry`           | Registry URL or local directory used to fetch items.                   |

## Custom registries

Point the CLI at a different registry with `--registry` (per command) or the `ZBMUI_REGISTRY_URL` environment variable. Both accept a URL or a local directory containing registry JSON files.

## Development

```bash
pnpm dev           # watch build with tsdown
pnpm build         # build to dist/
pnpm check-types   # tsc --noEmit
pnpm test          # node --test
```

## License

MIT
