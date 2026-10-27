import fs from "node:fs";

import { Index } from "@/registry/__index__";

// Processing is deterministic per input, so cache the final output and skip
// all disk reads and evals on repeat requests. Dev stays uncached so edits to
// MDX or demo files are reflected immediately.
const isProduction = process.env.NODE_ENV === "production";
const outputCache = new Map<string, string>();

interface ApiRefNode {
  description?: unknown;
  type?: string;
  default?: string;
  required?: boolean;
  deprecated?: boolean;
}

function getDemoFilePath(name: string) {
  const demo = Index[name];
  if (!demo) {
    return null;
  }
  return demo.files[0]?.path;
}

function processComponentPreviews(content: string) {
  const componentPreviewRegex = /<ComponentPreview[\s\S]*?name="([^"]+)"[\s\S]*?\/>/g;

  return content.replace(componentPreviewRegex, (match, name) => {
    try {
      const src = getDemoFilePath(name);

      if (!src) {
        return match;
      }

      const source = fs
        .readFileSync(src, "utf8")
        .trim()
        // Replace all registry specific paths
        .replaceAll(`@/registry/default/`, "@/components/")
        .replaceAll(`@/registry/lib/`, "@/lib/")
        .replaceAll(`@/registry/hooks/`, "@/hooks/");

      return `\`\`\`tsx
${source}
\`\`\``;
    } catch (error) {
      console.error(`Error processing ComponentPreview ${name}:`, error);
      return match;
    }
  });
}

/** Escape a value so it survives as a single markdown table cell. */
function toTableCell(value: string) {
  return value
    .replace(/\|/g, "\\|")
    .replace(/\s*\n\s*/g, " ")
    .trim();
}

/** Render a cell as inline code, falling back to plain text if it contains backticks. */
function toCodeCell(value: string) {
  const cell = toTableCell(value);
  return cell.includes("`") ? cell : `\`${cell}\``;
}

function renderApiReferenceTable(type: Record<string, ApiRefNode>) {
  const header = ["Prop", "Type", "Default", "Description"];
  const widths = header.map((column) => column.length);
  const rows: string[][] = [];

  // Single pass: build each row while tracking the widest cell per column.
  for (const [name, value] of Object.entries(type)) {
    const description = [
      value.deprecated ? "(Deprecated)" : "",
      typeof value.description === "string" ? value.description : "",
    ]
      .filter(Boolean)
      .join(" ");

    const row = [
      `\`${name}\`${value.required ? "" : "?"}`,
      value.type ? toCodeCell(value.type) : "-",
      value.default ? toCodeCell(value.default) : "-",
      toTableCell(description),
    ];

    rows.push(row);
    for (let index = 0; index < row.length; index++) {
      if (row[index].length > widths[index]) {
        widths[index] = row[index].length;
      }
    }
  }

  // Pad every column (except the last) to its widest cell so the pipes align.
  const renderRow = (cells: string[]) =>
    `| ${cells.map((cell, index) => cell.padEnd(widths[index])).join(" | ")} |`;

  return [
    "",
    renderRow(header),
    `| ${widths.map((width) => "-".repeat(width)).join(" | ")} |`,
    ...rows.map(renderRow),
    "",
  ].join("\n");
}

function processApiReferenceAccordions(content: string) {
  // Matches <ApiReferenceAccordion type={{ ... }} /> including multiline
  // blocks; the object body is evaluated since the MDX is trusted repo content
  // compiled by MDX itself with the same JS semantics.
  const apiRefRegex = /<ApiReferenceAccordion\s+type=\{\s*\{([\s\S]*?)\}\s*\}\s*\/>/g;

  return content.replace(apiRefRegex, (match, body: string) => {
    try {
      const type = new Function(`return ({${body}})`)() as Record<string, ApiRefNode>;
      if (type === null || typeof type !== "object") {
        return match;
      }
      return renderApiReferenceTable(type);
    } catch (error) {
      console.error("Error processing ApiReferenceAccordion:", error);
      return match;
    }
  });
}

export function processMdxForLLMs(content: string) {
  if (!isProduction) {
    return processApiReferenceAccordions(processComponentPreviews(content));
  }

  const cached = outputCache.get(content);
  if (cached !== undefined) {
    return cached;
  }

  const output = processApiReferenceAccordions(processComponentPreviews(content));
  outputCache.set(content, output);
  return output;
}
