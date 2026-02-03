"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";

import { useCopyToClipboard } from "@zbmui/ui/hooks/use-copy-to-clipboard";

import { Button } from "@/registry/default/ui/button";

export function DocsCopyPage({ content }: { content: string }) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Button onClick={() => copyToClipboard(content)} variant="secondary" size="sm">
      {isCopied ? <IconCheck /> : <IconCopy />}
      Copy page
    </Button>
  );
}
