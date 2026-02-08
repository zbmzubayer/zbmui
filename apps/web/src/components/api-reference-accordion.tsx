/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: known */
import { cn } from "@/lib/cn";
import { highlightAPIRef } from "@/lib/highlight-code";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

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

  default?: string;

  required?: boolean;
  deprecated?: boolean;

  parameters?: ParameterNode[];

  returns?: React.ReactNode;
}

export function ApiReferenceAccordion({ type }: { type: Record<string, TypeNode> }) {
  return (
    <Accordion multiple className="my-5 overflow-hidden rounded-lg border text-sm">
      <span className="sr-only">Component type props</span>
      <div className="grid grid-cols-[1fr_1rem] items-center gap-3 bg-muted px-2 py-2 font-medium text-muted-foreground sm:grid-cols-[13rem_1fr_1rem] md:grid-cols-[13rem_3fr_1.5fr_1rem]">
        <div>Prop</div>
        <div className="max-sm:hidden">Type</div>
        <div className="max-md:hidden">Default</div>
        <div className="size-4">
          <span className="sr-only">Expand prop details</span>
        </div>
      </div>
      {Object.entries(type).map(([key, value]) => (
        <Item key={key} name={key} item={value} />
      ))}
    </Accordion>
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
    returns,
  },
}: {
  name: string;
  item: TypeNode;
}) {
  const [highlightedType, highlightedDefault] = await Promise.all([
    highlightAPIRef(type as string, "tsx"),
    defaultValue ? highlightAPIRef(defaultValue, "tsx") : null,
  ]);

  return (
    <AccordionItem>
      <AccordionTrigger className="grid grid-cols-[1fr_1rem] gap-3 px-2 py-2 text-[0.8125rem] hover:bg-muted/60 sm:grid-cols-[13rem_1fr_1rem] md:grid-cols-[13rem_3fr_1.5fr_1rem]">
        <code className={cn("text-sky-400", deprecated && "text-muted-foreground/80 line-through")}>
          {name}
          {!required && "?"}
        </code>
        <span className="max-sm:hidden" dangerouslySetInnerHTML={{ __html: highlightedType }} />
        {highlightedDefault ? (
          <span
            className="max-md:hidden"
            dangerouslySetInnerHTML={{ __html: highlightedDefault }}
          />
        ) : (
          <code>-</code>
        )}
      </AccordionTrigger>
      <AccordionPanel
        hiddenUntilFound
        className="grid grid-cols-[13rem_1fr] items-center gap-3 bg-muted/30 px-3 pt-2 text-[0.8125rem] text-muted-foreground"
      >
        {description && <div className="col-span-full empty:hidden">{description}</div>}
        <p className="text-muted-foreground">Type</p>
        <span dangerouslySetInnerHTML={{ __html: highlightedType }} />
        {typeDescription && (
          <>
            <p className="text-muted-foreground">Type</p>
            <p>{typeDescription}</p>
          </>
        )}
        {defaultValue && (
          <>
            <p className="text-muted-foreground">Default</p>
            <span dangerouslySetInnerHTML={{ __html: highlightedDefault ?? "" }} />
          </>
        )}
        {parameters.length > 0 && (
          <>
            <p className="text-muted-foreground">Parameters</p>
            <div className="flex flex-col gap-2">
              {parameters.map((param) => (
                <div key={param.name} className="inline-flex flex-wrap items-center gap-1">
                  <p className="text-nowrap font-medium">{param.name} -</p>
                  <p>{param.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {returns && (
          <>
            <p className="text-muted-foreground">Returns</p>
            <p>{returns}</p>
          </>
        )}
      </AccordionPanel>
    </AccordionItem>
  );
}
