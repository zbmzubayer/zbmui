import { cn } from "@/lib/cn";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/default/ui/tabs";

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  component,
  source,
  ...props
}: React.ComponentProps<typeof Tabs> & {
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  source: React.ReactNode;
}) {
  return (
    <Tabs defaultValue="preview" className={cn("mt-4 mb-12", className)} {...props}>
      {!hideCode && (
        <TabsList className="justify-start bg-transparent p-0 *:data-[slot=tab-indicator]:rounded-lg *:data-[slot=tab-indicator]:bg-accent *:data-[slot=tab-indicator]:shadow-none">
          <TabsTab value="preview" className="h-8 rounded-lg">
            Preview
          </TabsTab>
          <TabsTab value="code" className="h-8 rounded-lg">
            Code
          </TabsTab>
        </TabsList>
      )}
      <TabsPanel value="preview" keepMounted className="overflow-hidden rounded-xl border">
        <div
          data-align={align}
          className={cn(
            "flex h-112.5 w-full justify-center overflow-y-auto p-10 data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center max-sm:px-6"
          )}
        >
          {component}
          {/* <div
            data-slot="preview"
            className="has-[>[data-slot=accordion]]:w-full has-[>[data-slot=accordion]]:max-w-[80%]"
          >
            {component}
          </div> */}
        </div>
      </TabsPanel>
      <TabsPanel
        value="code"
        keepMounted
        data-slot="code"
        className="overflow-hidden rounded-xl bg-code **:[figure]:m-0! **:[pre]:h-112.5"
      >
        {source}
      </TabsPanel>
    </Tabs>
  );
}
