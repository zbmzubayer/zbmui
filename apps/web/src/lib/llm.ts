import fs from "node:fs";

import { Index } from "@/registry/__index__";

function getDemoFilePath(name: string) {
  const demo = Index[name];
  if (!demo) {
    return null;
  }
  return demo.files[0]?.path;
}

export function processMdxForLLMs(content: string) {
  const componentPreviewRegex = /<ComponentPreview[\s\S]*?name="([^"]+)"[\s\S]*?\/>/g;

  return content.replace(componentPreviewRegex, (match, name) => {
    try {
      const src = getDemoFilePath(name);

      if (!src) {
        return match;
      }

      // Registry sources are read at runtime and must not be traced into the
      // deployment bundle; failures fall back to the raw MDX via the catch below.
      let source = fs.readFileSync(/* turbopackIgnore: true */ src, "utf8").trim();

      // Replace all registry specific paths
      source = source.replaceAll(`@/registry/default/`, "@/components/");
      source = source.replaceAll(`@/registry/lib/`, "@/lib/");
      source = source.replaceAll(`@/registry/hooks/`, "@/hooks/");

      return `\`\`\`tsx
${source}
\`\`\``;
    } catch (error) {
      console.error(`Error processing ComponentPreview ${name}:`, error);
      return match;
    }
  });
}
