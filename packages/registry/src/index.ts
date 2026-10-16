import { z } from "zod";

export const DEFAULT_REGISTRY_URL = "https://ui.zubayer.dev/r";

export const registryItemTypeSchema = z
  .enum([
    "registry:ui",
    "registry:hook",
    "registry:lib",
    "registry:component",
    "registry:block",
    "registry:style",
  ])
  .describe(
    "The kind of registry item. Determines the default install directory: " +
      "registry:ui → <ui alias>, registry:hook → <hooks alias>, registry:lib → <lib alias>."
  );

export const registryFileSchema = z
  .object({
    /** Path of the file inside the registry (relative). */
    path: z
      .string()
      .describe("Path of the file inside the registry, relative to the registry root."),
    type: registryItemTypeSchema,
    /** Default install location relative to the project root. */
    target: z
      .string()
      .optional()
      .describe(
        "Default install location relative to the project root. " +
          "The conventional prefix (components/ui/, hooks/, …) is replaced by the consumer's alias."
      ),
    /** File contents with imports normalized to placeholder aliases. Inlined at build time. */
    content: z
      .string()
      .optional()
      .describe(
        "File contents with imports normalized to placeholder aliases (@/components/ui/…). " +
          "Rewritten to the consumer's aliases at install time."
      ),
  })
  .describe("A single file shipped by a registry item.");

export const registryItemSchema = z
  .object({
    name: z
      .string()
      .describe(
        "Unique identifier, used as `@zbmui/cli add <name>` and in the registry URL /<name>.json."
      ),
    type: registryItemTypeSchema,
    description: z
      .string()
      .optional()
      .describe("Human-readable summary shown by `@zbmui/cli list`."),
    /** npm packages to install, name → version range. */
    dependencies: z
      .record(z.string(), z.string())
      .optional()
      .describe("npm packages to install for this item, as package name → version range."),
    /** Other registry items to install first. "@zbmui/<name>" or plain "<name>". */
    registryDependencies: z
      .array(z.string())
      .optional()
      .describe(
        'Other registry items installed first ("@zbmui/<name>" or plain "<name>"). Resolved recursively.'
      ),
    files: z.array(registryFileSchema),
    categories: z
      .array(z.string())
      .optional()
      .describe("Grouping labels, e.g. for docs navigation."),
  })
  .describe("A distributable registry item: a component, hook, lib utility, or example.");

export const registryIndexEntrySchema = registryItemSchema.omit({ files: true });

export const registryIndexSchema = z
  .object({
    $schema: z.string().optional().describe("JSON Schema reference for editor validation."),
    items: z
      .array(registryIndexEntrySchema)
      .describe("Summaries of every published registry item."),
  })
  .describe("Catalog of all published items, served as <registry>/index.json.");

/** A single CSS file shipped by `@zbmui/cli init` and written next to the consumer's global CSS file. */
export const initFileSchema = z
  .object({
    /** File name, written next to the consumer's global CSS file (e.g. "styles.css"). */
    name: z.string().describe("File name, written next to the consumer's global CSS file."),
    /** File contents (Tailwind v4 CSS: @theme tokens, @custom-variant, keyframes). */
    content: z
      .string()
      .describe("File contents — Tailwind v4 CSS (@theme tokens, variants, keyframes)."),
  })
  .describe("A CSS file shipped by `@zbmui/cli init`.");

/** Payload consumed by `@zbmui/cli init`: theme CSS files + base dependencies. */
export const initPayloadSchema = z
  .object({
    name: z.literal("init"),
    type: z.literal("registry:style"),
    files: z
      .array(initFileSchema)
      .describe("Theme CSS files written next to the consumer's global CSS file, in import order."),
    dependencies: z
      .record(z.string(), z.string())
      .describe("Base npm dependencies installed once by `@zbmui/cli init`."),
  })
  .describe("Payload consumed by `@zbmui/cli init` — served as <registry>/init.json.");

/** `components.json` written into consumer projects. */
export const componentsConfigSchema = z
  .object({
    $schema: z.string().optional().describe("JSON Schema reference for editor validation."),
    rsc: z
      .boolean()
      .describe("Whether the project uses React Server Components (Next.js App Router)."),
    tsx: z.boolean().describe("Whether the project uses TSX syntax."),
    tailwind: z
      .object({
        css: z
          .string()
          .describe("Path to the global CSS file where the ZBM UI theme imports are injected."),
      })
      .describe("Tailwind CSS configuration."),
    aliases: z
      .object({
        components: z
          .string()
          .describe('Import alias for example components. Must resolve via tsconfig "paths".'),
        ui: z
          .string()
          .describe('Import alias for UI components. Must resolve via tsconfig "paths".'),
        hooks: z.string().describe('Import alias for hooks. Must resolve via tsconfig "paths".'),
        lib: z
          .string()
          .describe(
            'Import alias for lib utilities such as cn(). Must resolve via tsconfig "paths".'
          ),
      })
      .describe(
        "Import aliases telling the CLI where to place files. " +
          'Each alias must resolve through the project\'s tsconfig "paths".'
      ),
    registry: z
      .string()
      .optional()
      .describe(
        "Base URL — or local directory path — of the component registry. " +
          "Overridden by the --registry flag, then the ZBMUI_REGISTRY_URL environment variable."
      ),
  })
  .describe(
    "Configuration for the ZBM UI CLI, written by `@zbmui/cli init` into the consumer project."
  );

export type RegistryItemType = z.infer<typeof registryItemTypeSchema>;
export type RegistryFile = z.infer<typeof registryFileSchema>;
export type RegistryItem = z.infer<typeof registryItemSchema>;
export type RegistryIndexEntry = z.infer<typeof registryIndexEntrySchema>;
export type RegistryIndex = z.infer<typeof registryIndexSchema>;
export type InitFile = z.infer<typeof initFileSchema>;
export type InitPayload = z.infer<typeof initPayloadSchema>;
export type ComponentsConfig = z.infer<typeof componentsConfigSchema>;

/** Source-of-truth format of `apps/web/registry.json` (the authored item metadata). */
export const registrySourceSchema = z
  .object({
    items: z.array(
      z.object({
        name: z
          .string()
          .describe('Must match the file name on disk (e.g. ui/button.tsx → "button").'),
        type: registryItemTypeSchema,
        description: z
          .string()
          .optional()
          .describe("Shown by `@zbmui/cli list`; recorded in emitted JSON."),
        categories: z
          .array(z.string())
          .optional()
          .describe('Grouping labels, e.g. ["select"] for demos.'),
        /** registry:component items are docs-only unless published. */
        publish: z
          .boolean()
          .optional()
          .describe(
            "Also emit a public/r/<name>.json payload so the item is installable via `@zbmui/cli add`. " +
              "Defaults to false — registry:component items are docs-only previews unless published."
          ),
      })
    ),
  })
  .describe("Source of truth for the registry build; edit this file when adding components.");

export type RegistrySource = z.infer<typeof registrySourceSchema>;

/** Strip the "@zbmui/" namespace from a registry dependency reference. */
export function normalizeRegistryDependency(dep: string): string {
  return dep.startsWith("@zbmui/") ? dep.slice("@zbmui/".length) : dep;
}
