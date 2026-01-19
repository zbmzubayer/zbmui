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
      <div className="grid grid-cols-[1fr_1rem] items-center gap-3 bg-muted px-2 py-2 font-medium text-muted-foreground sm:grid-cols-[13.5rem_4.5fr_1rem] md:grid-cols-[13.5rem_3fr_1.5fr_1rem]">
        {/* <div className="flex items-center gap-3 bg-muted px-2 py-2 font-medium text-muted-foreground"> */}
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
  // const [open, setOpen] = useState(false);

  const [highlightedType, highlightedDefault] = await Promise.all([
    highlightAPIRef(type as string, "tsx"),
    defaultValue ? highlightAPIRef(defaultValue, "tsx") : null,
  ]);

  return (
    <AccordionItem>
      <AccordionTrigger className="grid grid-cols-[1fr_1rem] gap-3 px-2 py-2 text-[0.8125rem] hover:bg-muted/60 sm:grid-cols-[13.5rem_4.5fr_1rem] md:grid-cols-[13.5rem_3fr_1.5fr_1rem]">
        <code className={cn("text-sky-400", deprecated && "text-muted-foreground/80 line-through")}>
          {name}
          {!required && "?"}
        </code>
        <span className="max-sm:hidden" dangerouslySetInnerHTML={{ __html: highlightedType }} />
        {/* <span className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aspernatur aliquid
          cupiditate aliquam voluptatibus nesciunt labore error fugit veniam officia. Dignissimos
          quae atque odio cumque veritatis, eius qui doloremque at! Sapiente, dicta.
        </span> */}
        {highlightedDefault ? (
          <span
            className="max-md:hidden"
            dangerouslySetInnerHTML={{ __html: highlightedDefault }}
          />
        ) : (
          <code>-</code>
        )}
      </AccordionTrigger>
      <AccordionPanel hiddenUntilFound className="bg-muted/30 px-2 text-[0.8125rem] data-open:pb-3">
        <div className="mt-2 grid grid-cols-[13.5rem_1fr] items-center gap-3 text-muted-foreground">
          {description && <div className="col-span-full empty:hidden">{description}</div>}
          <p className="text-muted-foreground">Type</p>
          <span dangerouslySetInnerHTML={{ __html: highlightedType }} />
          {typeDescription && (
            <>
              <p className="text-muted-foreground">Type</p>
              <p className="my-auto">{typeDescription}</p>
            </>
          )}
          {defaultValue && (
            <>
              <p className="text-muted-foreground">Default</p>
              <span
                className="my-auto"
                dangerouslySetInnerHTML={{ __html: highlightedDefault ?? "" }}
              />
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
              <p className="my-auto">{returns}</p>
            </>
          )}
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
}
