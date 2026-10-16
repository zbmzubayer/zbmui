/**
 * Shared, dependency-free registry helpers.
 *
 * Imported both by the Next.js docs app (`@/lib/registry-shared`) and by the
 * registry build script (`scripts/build-registry.mts`, run via Node type
 * stripping) — keep this file free of Node- and Next-specific APIs.
 */

/**
 * Normalize registry-internal imports to placeholder aliases.
 * The CLI later rewrites the placeholders to the consumer's aliases.
 *
 *   @/registry/default/ui/button      -> @/components/ui/button
 *   @/registry/default/hooks/use-x    -> @/hooks/use-x
 *   @/registry/default/components/x   -> @/components/x
 *   @/lib/cn                          -> @/lib/cn (unchanged placeholder)
 */
export function fixImport(content: string): string {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;

  const replacement = (match: string, _path: string, type: string, component: string) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`;
    }
    if (type.endsWith("ui")) {
      return `@/components/ui/${component}`;
    }
    if (type.endsWith("hooks")) {
      return `@/hooks/${component}`;
    }
    if (type.endsWith("lib")) {
      return `@/lib/${component}`;
    }

    return match;
  };

  return content.replace(regex, replacement);
}
