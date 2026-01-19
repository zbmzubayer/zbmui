/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: known */

import { cva } from "class-variance-authority";
import Link from "fumadocs-core/link";

import { IconChevronDown } from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import { highlightAPIRef } from "@/lib/highlight-code";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";

export interface ParameterNode {
  name: string;
  description: React.ReactNode;
}

export interface TypeNode {
  /**
   * Additional description of the field
   */
  description?: React.ReactNode;

  /**
   * type signature (short)
   */
  type: string;

  /**
   * type signature (full)
   */
  typeDescription?: React.ReactNode;

  /**
   * Optional `href` for the type
   */
  typeDescriptionLink?: string;

  default?: string;

  required?: boolean;
  deprecated?: boolean;

  parameters?: ParameterNode[];

  returns?: React.ReactNode;
}

const keyVariants = cva("text-sky-400", {
  variants: {
    deprecated: {
      true: "text-primary/50 line-through",
    },
  },
});

const fieldVariants = cva("pe-2 text-muted-foreground");

export function TypeTable({ type }: { type: Record<string, TypeNode> }) {
  return (
    <div className="@container my-6 flex flex-col gap-1 overflow-hidden rounded-2xl border bg-card p-1 text-[0.8125rem] text-card-foreground">
      <div className="flex items-center px-3 py-1 font-medium text-muted-foreground">
        <p className="w-1/4">Prop</p>
        <p className="@max-xl:hidden flex-1">Type</p>
        <p className="@max-xl:hidden w-1/4">Default</p>
      </div>
      {Object.entries(type).map(([key, value]) => (
        <Item key={key} name={key} item={value} />
      ))}
    </div>
  );
}

async function Item({
  name,
  item: {
    parameters = [],
    description,
    required = false,
    deprecated,
    typeDescription,
    default: defaultValue,
    type,
    typeDescriptionLink,
    returns,
  },
}: {
  name: string;
  item: TypeNode;
}) {
  // const [open, setOpen] = useState(false);

  const [highlightedType, highlightedDefault] = await Promise.all([
    highlightAPIRef(type as string, "tsx"),
    defaultValue ? highlightAPIRef(defaultValue, "tsx") : null,
  ]);

  return (
    <Collapsible
      // open={open}
      // onOpenChange={setOpen}
      className={cn(
        "overflow-hidden rounded-xl border bg-background transition-all data-open:not-last:mb-2 data-open:bg-background data-open:shadow-sm"
      )}
    >
      <CollapsibleTrigger className="group relative flex w-full flex-row items-center px-3 py-2 text-start hover:bg-accent">
        <code
          className={cn(
            keyVariants({
              deprecated,
              className: "w-[25%] min-w-fit pe-2",
            })
          )}
        >
          {name}
          {!required && "?"}
        </code>
        {typeDescriptionLink ? (
          <Link href={typeDescriptionLink} className="@max-xl:hidden underline">
            {type}
          </Link>
        ) : (
          <span
            className="@max-xl:hidden flex-1"
            dangerouslySetInnerHTML={{ __html: highlightedType }}
          />
        )}
        {defaultValue ? (
          <span
            className="@max-xl:hidden w-[25%]"
            dangerouslySetInnerHTML={{ __html: highlightedDefault ?? "" }}
          />
        ) : (
          <span className="@max-xl:hidden">—</span>
        )}
        <IconChevronDown className="absolute end-2 size-4 text-muted-foreground transition-transform group-data-panel-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="fd-scroll-container grid grid-cols-[1fr_3fr] gap-y-4 overflow-auto border-t p-3">
          <div className="col-span-full empty:hidden">{description}</div>
          <p className={cn(fieldVariants())}>Type</p>
          <div dangerouslySetInnerHTML={{ __html: highlightedType }} />
          {typeDescription && (
            <>
              <p className={cn(fieldVariants())}>Type</p>
              <p className="my-auto">{typeDescription}</p>
            </>
          )}
          {defaultValue && (
            <>
              <p className={cn(fieldVariants())}>Default</p>
              <div
                className="my-auto"
                dangerouslySetInnerHTML={{ __html: highlightedDefault ?? "" }}
              />
            </>
          )}
          {parameters.length > 0 && (
            <>
              <p className={cn(fieldVariants())}>Parameters</p>
              <div className="flex flex-col gap-2">
                {parameters.map((param) => (
                  <div key={param.name} className="inline-flex flex-wrap items-center gap-1">
                    <p className="text-nowrap font-medium">{param.name} -</p>
                    <div>{param.description}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          {returns && (
            <>
              <p className={cn(fieldVariants())}>Returns</p>
              <div className="my-auto">{returns}</div>
            </>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
