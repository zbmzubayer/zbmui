import fs from "node:fs/promises";
import path from "node:path";
import type { BundledLanguage } from "shiki";

import { getRegistryItem } from "@/lib/registry";

import { CodeBlock } from "@/components/code-block";
import { CodeCollapsible } from "@/components/code-collapsible";

export async function ComponentSource({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
}: React.ComponentProps<"div"> & {
  name?: string;
  src?: string;
  title?: string;
  language?: BundledLanguage;
  collapsible?: boolean;
}) {
  if (!name && !src) {
    return null;
  }

  let code: string | undefined;

  if (name) {
    const item = await getRegistryItem(name);
    code = item?.files?.[0]?.content;
  }

  if (src) {
    const file = await fs.readFile(path.join(process.cwd(), src), "utf-8");
    code = file;
  }

  if (!code) {
    return null;
  }

  const lang: BundledLanguage = language ?? (title?.split(".").pop() as BundledLanguage) ?? "tsx";

  if (!collapsible) {
    return <CodeBlock code={code} language={lang} title={title} />;
  }

  return (
    <CodeCollapsible className={className}>
      <CodeBlock code={code} language={lang} title={title} />
    </CodeCollapsible>
  );
}
