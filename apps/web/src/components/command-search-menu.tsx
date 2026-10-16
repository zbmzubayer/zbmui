"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { IconArrowBack, IconAtom2, IconBook, IconSearch } from "@tabler/icons-react";

import { useCliConfigStore } from "@/hooks/use-cli-config";
import { useIsMac } from "@/hooks/use-is-mac";
import { cn } from "@/lib/cn";
import type { source } from "@/lib/source";
import { useCopyToClipboard } from "@/registry/default/hooks/use-copy-to-clipboard";
import { buttonVariants } from "@/registry/default/ui/button";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
} from "@/registry/default/ui/command";
import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";

interface PageItem {
  value: string;
  label: string;
  url: string;
  isComponent: boolean;
  keywords?: string[];
}

interface PageGroup {
  value: string;
  items: PageItem[];
}

export function CommandSearchMenu({
  tree,
  navItems,
  ...props
}: React.ComponentProps<typeof CommandDialog> & {
  tree: typeof source.pageTree;
  navItems?: { href: string; label: string }[];
}) {
  const isMac = useIsMac();
  const { packageManager } = useCliConfigStore();
  const { copyToClipboard } = useCopyToClipboard();
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<"page" | "component" | null>(null);
  const [copyPayload, setCopyPayload] = useState("");

  // Convert tree structure to grouped items
  const groupedItems = useMemo<PageGroup[]>(() => {
    const groups: PageGroup[] = [];

    // Add nav items group
    if (navItems && navItems.length > 0) {
      groups.push({
        items: navItems.map((item) => ({
          isComponent: false,
          keywords: ["nav", "navigation", item.label.toLowerCase()],
          label: item.label,
          url: item.href,
          value: `Navigation ${item.label}`,
        })),
        value: "Pages",
      });
    }

    // Add tree groups
    tree.children.forEach((group) => {
      if (group.type === "folder") {
        const items: PageItem[] = [];
        group.children.forEach((item) => {
          if (item.type === "page") {
            const isComponent = item.url.includes("/components/");
            const itemName = item.name?.toString() || "";
            items.push({
              isComponent,
              keywords: isComponent ? ["component"] : undefined,
              label: itemName,
              url: item.url,
              value: itemName ? `${group.name} ${itemName}` : "",
            });
          }
        });
        if (items.length > 0) {
          groups.push({
            items,
            value: typeof group.name === "string" ? group.name : String(group.name),
          });
        }
      }
    });

    return groups;
  }, [tree, navItems]);

  const handlePageHighlight = useCallback(
    (item: PageItem) => {
      if (item.isComponent) {
        const componentName = item.url.split("/").pop();
        setSelectedType("component");
        let cmd: string;
        switch (packageManager) {
          case "pnpm":
            cmd = `pnpm dlx @zbmui/cli@latest add ${componentName}`;
            break;
          case "bun":
            cmd = `bunx --bun @zbmui/cli@latest add ${componentName}`;
            break;
          case "yarn":
            cmd = `yarn dlx @zbmui/cli@latest add ${componentName}`;
            break;
          default:
            cmd = `npx @zbmui/cli@latest add ${componentName}`;
        }

        setCopyPayload(cmd);
      } else {
        setSelectedType("page");
        setCopyPayload("");
      }
    },
    [packageManager]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }

      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        if (selectedType === "page" || selectedType === "component") {
          copyToClipboard(copyPayload);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [copyPayload, selectedType, copyToClipboard]);

  return (
    <CommandDialog onOpenChange={setOpen} open={open} {...props}>
      <CommandDialogTrigger
        className={cn(buttonVariants({ variant: "outline" }), "size-8 md:w-auto")}
      >
        <IconSearch />
        <KbdGroup className="hidden gap-1 md:inline-flex">
          <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
          <Kbd className="aspect-square">K</Kbd>
        </KbdGroup>
      </CommandDialogTrigger>
      <CommandDialogPopup>
        <Command
          items={groupedItems}
          onItemHighlighted={(highlightedValue) => {
            const item = highlightedValue as PageItem | null;
            if (item) {
              handlePageHighlight(item);
            }
          }}
        >
          <div className="px-2.5 py-1.5">
            <CommandInput placeholder="Search documentation…" size="lg" />
          </div>
          <CommandPanel className="rounded-t-xl border-t">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(group: PageGroup, _index: number) => (
                <CommandGroup items={group.items} key={group.value}>
                  <CommandGroupLabel>{group.value}</CommandGroupLabel>
                  <CommandCollection>
                    {(item: PageItem) => (
                      <CommandItem
                        className="flex w-full items-center"
                        key={item.value}
                        render={<Link href={item.url} onNavigate={() => setOpen(false)} />}
                      >
                        {item.isComponent ? (
                          <IconAtom2 className="mr-2 size-4 opacity-80" />
                        ) : (
                          <IconBook className="mr-2 size-4 opacity-80" />
                        )}
                        <span className="flex-1">{item.label}</span>
                      </CommandItem>
                    )}
                  </CommandCollection>
                </CommandGroup>
              )}
            </CommandList>
          </CommandPanel>
          <CommandFooter>
            <div className="flex items-center gap-2">
              <span className="whitespace-nowrap">Go to Page</span>
              <Kbd>
                <IconArrowBack />
              </Kbd>
            </div>
            {copyPayload && (
              <div className="flex min-w-0 items-center gap-2">
                <span className="truncate font-mono">{copyPayload}</span>
                <KbdGroup>
                  <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
                  <Kbd>C</Kbd>
                </KbdGroup>
              </div>
            )}
          </CommandFooter>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
}
