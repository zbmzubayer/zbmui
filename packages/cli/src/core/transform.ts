import type { ComponentsConfig } from "@zbmui/registry";

type Aliases = ComponentsConfig["aliases"];

/**
 * Rewrite a placeholder module specifier to the consumer's aliases.
 *
 *   @/lib/cn            -> {aliases.lib}/cn
 *   @/components/ui/x   -> {aliases.ui}/x
 *   @/components/x      -> {aliases.components}/x
 *   @/hooks/x           -> {aliases.hooks}/x
 */
export function rewriteSpecifier(specifier: string, aliases: Aliases): string {
  let match = specifier.match(/^@\/components\/ui\/(.+)$/);
  if (match) {
    return `${aliases.ui}/${match[1]}`;
  }
  match = specifier.match(/^@\/components\/(.+)$/);
  if (match) {
    return `${aliases.components}/${match[1]}`;
  }
  match = specifier.match(/^@\/hooks\/(.+)$/);
  if (match) {
    return `${aliases.hooks}/${match[1]}`;
  }
  match = specifier.match(/^@\/lib\/(.+)$/);
  if (match) {
    return `${aliases.lib}/${match[1]}`;
  }
  return specifier;
}

/**
 * Matches the module specifier of import/export declarations whose specifier
 * starts with a placeholder alias:
 *
 *   import { cn } from "@/lib/cn"
 *   import "@/lib/cn"                       (side-effect import)
 *   export { Badge } from "@/components/ui/badge"
 *   const mod = await import("@/hooks/x")   (dynamic import)
 *
 * Group 1 is the text before the quote, group 2 the quote character, group 3
 * the specifier itself. Non-placeholder specifiers never match, so npm and
 * relative imports pass through untouched. Deliberately text-based: registry
 * contents are generated from controlled sources, so specifier-shaped text
 * inside string literals is not expected.
 */
const PLACEHOLDER_SPECIFIER_RE =
  /(\b(?:from|import)\s*(?:\(\s*)?)(["'])((?:@\/components\/ui|@\/components|@\/hooks|@\/lib)\/[^"']*)\2/g;

/** Rewrite placeholder aliases in import/export specifiers to the consumer's aliases. */
export function rewriteImports(content: string, aliases: Aliases): string {
  return content.replace(
    PLACEHOLDER_SPECIFIER_RE,
    (match, prefix: string, quote: string, specifier: string) => {
      const rewritten = rewriteSpecifier(specifier, aliases);
      return rewritten === specifier ? match : `${prefix}${quote}${rewritten}${quote}`;
    }
  );
}
