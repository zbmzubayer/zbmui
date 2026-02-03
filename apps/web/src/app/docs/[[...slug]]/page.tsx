import { findNeighbour } from "fumadocs-core/page-tree";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IconArrowLeft, IconArrowRight, IconExternalLink, IconMarkdown } from "@tabler/icons-react";

import { SiteFooter } from "@/layouts/site-footer";
import { cn } from "@/lib/cn";
import { source } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";
import { Button, buttonVariants } from "@/registry/default/ui/button";

import { DocsCopyPage } from "@/components/docs/docs-copy-page";
import { DocsToc } from "@/components/docs/docs-toc";

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const rawContent = await page.data.getText("raw");
  const MDX = page.data.body;

  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <div className="flex items-stretch sm:text-[.9375rem] xl:w-full" data-slot="docs">
      <div className="relative flex min-w-0 flex-1 flex-col bg-muted/50 bg-clip-padding shadow-black/5 shadow-sm after:pointer-events-none after:absolute after:-inset-1.25 after:-z-1 after:rounded-[calc(var(--radius-2xl)+4px)] after:border after:border-border/50 after:bg-clip-padding lg:mt-8 lg:mr-4 lg:mb-8 lg:rounded-2xl lg:border dark:after:bg-background/72">
        <div className="-m-px h-full border bg-background/60 px-4 py-6 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] max-lg:before:hidden sm:px-6 lg:rounded-t-2xl lg:rounded-b-xl lg:p-8 dark:before:shadow-[0_-1px_--theme(--color-white/8%)]">
          <div className="mx-auto flex h-full w-full max-w-3xl flex-col">
            <div className="flex min-w-0 flex-1 flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h1 className="scroll-m-20 font-semibold text-3xl xl:text-4xl">
                    {page.data.title}
                  </h1>
                  {page.data.description && (
                    <p className="text-muted-foreground sm:text-lg">{page.data.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 pt-4">
                  {page.data.links?.doc && (
                    <Link
                      href={page.data.links.doc}
                      rel="noreferrer"
                      target="_blank"
                      className={cn(buttonVariants({ variant: "outline", size: "xs" }))}
                    >
                      Docs
                      <IconExternalLink />
                    </Link>
                  )}
                  {page.data.links?.anatomy && (
                    <Link
                      href={page.data.links.anatomy}
                      rel="noreferrer"
                      target="_blank"
                      className={cn(buttonVariants({ variant: "outline", size: "xs" }))}
                    >
                      Anatomy
                      <IconExternalLink />
                    </Link>
                  )}
                  {page.data.links?.api && (
                    <Link
                      href={page.data.links.api}
                      rel="noreferrer"
                      target="_blank"
                      className={cn(buttonVariants({ variant: "outline", size: "xs" }))}
                    >
                      API Reference
                      <IconExternalLink />
                    </Link>
                  )}
                  <div className="ml-auto flex items-center gap-2">
                    <DocsCopyPage content={rawContent} />
                    <a
                      href={`${page.url}.md`}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                    >
                      <IconMarkdown />
                      View markdown
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
                <MDX components={mdxComponents} />
              </div>
            </div>
            <div className="hidden items-center gap-2 pt-8 sm:flex">
              {neighbours.previous && (
                <Button
                  className="shadow-none"
                  render={
                    <Link href={neighbours.previous.url}>
                      <IconArrowLeft strokeWidth={2} /> {neighbours.previous.name}
                    </Link>
                  }
                  variant="outline"
                />
              )}
              {neighbours.next && (
                <Button
                  className="ms-auto shadow-none"
                  render={
                    <Link href={neighbours.next.url}>
                      {neighbours.next.name} <IconArrowRight strokeWidth={2} />
                    </Link>
                  }
                  variant="outline"
                />
              )}
            </div>
          </div>
        </div>
        <div className="px-4 py-6 lg:rounded-b-2xl lg:px-8">
          <SiteFooter />
        </div>
      </div>
      <div className="sticky top-(--header-height) z-30 ms-auto hidden h-[calc(100svh-var(--header-height))] w-72 flex-col overflow-hidden overscroll-none xl:flex">
        <div className="no-scrollbar flex min-h-0 flex-col gap-2 overflow-y-auto py-2">
          <div className="h-(--top-spacing) shrink-0" />
          <DocsToc tocItems={page.data.toc} />
        </div>
      </div>
    </div>
  );
}
