import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@zbmui/ui/components/card";
import { NumberInput } from "@zbmui/ui/components/number-input";
import { CopyButton } from "@zbmui/ui/shared/copy-button";

import { cn } from "@/lib/cn";
import { Accordion, AccordionPanel, AccordionTrigger } from "@/registry/default/ui/accordion";
import { Button } from "@/registry/default/ui/button";
import { Kbd } from "@/registry/default/ui/kbd";
import { ScrollArea } from "@/registry/default/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

import { ApiReferenceAccordion } from "@/components/api-reference-accordion";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeCollapsible } from "@/components/code-collapsible";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { getIconForLanguageExtension } from "@/components/icons";
import { TypeTable } from "@/components/type-table";

export const mdxComponents = {
  Accordion,
  AccordionTrigger,
  AccordionPanel,
  ApiReferenceAccordion,
  TypeTable,
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn("mt-2 scroll-m-28 font-bold text-3xl tracking-tight", className)}
      {...props}
    />
  ),
  h2: ({ className, children, ...props }: React.ComponentProps<"h2">) => {
    const id =
      (props as { id?: string }).id ||
      children?.toString().replace(/ /g, "-").replace(/'/g, "").replace(/\?/g, "").toLowerCase();

    return (
      <h2
        {...props}
        className={cn(
          "mt-12 scroll-m-20 font-heading text-2xl first:mt-0 lg:mt-16 [&+p]:mt-4! *:[code]:text-2xl",
          className
        )}
        id={id}
      >
        <Link href={`#${id}`} className="no-underline underline-offset-4 hover:underline">
          {children}
        </Link>
      </h2>
    );
  },
  h3: ({ className, children, ...props }: React.ComponentProps<"h3">) => {
    const id =
      (props as { id?: string }).id ||
      children?.toString().replace(/ /g, "-").replace(/'/g, "").replace(/\?/g, "").toLowerCase();

    return (
      <h3
        {...props}
        className={cn("mt-8 scroll-m-20 font-semibold text-lg *:[code]:text-lg", className)}
        id={id}
      >
        <Link href={`#${id}`} className="no-underline underline-offset-4 hover:underline">
          {children}
        </Link>
      </h3>
    );
  },
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4 className={cn("mt-8 scroll-m-20 font-medium tracking-tight", className)} {...props} />
  ),
  h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
    <h5
      className={cn("mt-8 scroll-m-20 font-medium text-lg tracking-tight", className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
    <h6
      className={cn("mt-8 scroll-m-20 font-medium text-base tracking-tight", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn("not-first:mt-6 text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.ComponentProps<"a">) => (
    <a
      className={cn("font-medium text-foreground underline underline-offset-4", className)}
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={cn("font-medium underline underline-offset-4", className)} {...props} />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "flex w-full flex-col items-center rounded-xl bg-secondary p-6 text-secondary-foreground transition-colors hover:bg-secondary/80 sm:p-10",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-medium text-foreground", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-6 ms-6 list-decimal text-muted-foreground", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-6 ms-6 list-disc text-muted-foreground", className)} {...props} />
  ),
  hr: ({ ...props }: React.ComponentProps<"hr">) => <hr className="my-4 md:my-8" {...props} />,
  Button,
  Kbd,
  NumberInput,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CodeCollapsible,
  // CodeTabs,
  ComponentPreview,
  ComponentSource,
  code: ({
    className,
    __raw__,
    __src__,
    __npm__,
    __yarn__,
    __pnpm__,
    __bun__,
    ...props
  }: React.ComponentProps<"code"> & {
    __raw__?: string;
    __src__?: string;
    __npm__?: string;
    __yarn__?: string;
    __pnpm__?: string;
    __bun__?: string;
  }) => {
    // Inline Code.
    if (typeof props.children === "string") {
      return (
        <code
          className={cn(
            "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] outline-none",
            className
          )}
          {...props}
        />
      );
    }

    // npm command.
    const isNpmCommand = __npm__ && __yarn__ && __pnpm__ && __bun__;
    if (isNpmCommand) {
      return (
        <CodeBlockCommand
          __bun__={__bun__}
          __npm__={__npm__}
          __pnpm__={__pnpm__}
          __yarn__={__yarn__}
        />
      );
    }

    // Default codeblock.
    return (
      <>
        {__raw__ && <CopyButton src={__src__} value={__raw__} />}
        <code {...props} />
      </>
    );
  },
  pre: ({ className, children, ...props }: React.ComponentProps<"pre">) => {
    return (
      <ScrollArea className="static! **:data-[slot=scroll-area-scrollbar]:data-[orientation=horizontal]:mx-2 **:data-[slot=scroll-area-scrollbar]:data-[orientation=vertical]:my-2">
        <pre
          className={cn(
            "px-4 py-3.5 text-[0.8125rem] outline-none has-data-[slot=tabs]:p-0 has-data-highlighted-line:px-0 has-data-line-numbers:px-0",
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </ScrollArea>
    );
  },
  figure: (props: React.ComponentProps<"figure">) => <figure {...props} />,
  figcaption: ({ className, children, ...props }: React.ComponentProps<"figcaption">) => {
    const iconExtension =
      "data-language" in props && typeof props["data-language"] === "string"
        ? getIconForLanguageExtension(props["data-language"])
        : null;

    return (
      <figcaption
        className={cn(
          "flex items-center gap-2 text-code-foreground [&_svg]:size-4 [&_svg]:text-code-foreground [&_svg]:opacity-70",
          className
        )}
        {...props}
      >
        {iconExtension}
        {children}
      </figcaption>
    );
  },
  Image: ({ src, className, width, height, alt, ...props }: React.ComponentProps<"img">) => (
    <Image
      alt={alt || ""}
      className={cn("mt-6 rounded-md border", className)}
      height={Number(height)}
      src={typeof src === "string" ? src : ""}
      width={Number(width)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
    <img alt={alt} className={cn("rounded-md", className)} {...props} />
  ),

  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <div className="no-scrollbar my-6 w-full overflow-y-auto rounded-lg border">
      <table
        className={cn(
          "relative w-full overflow-hidden border-none text-sm [&_tbody_tr:last-child]:border-b-0",
          className
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr className={cn("m-0 border-b", className)} {...props} />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "whitespace-nowrap px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
};
