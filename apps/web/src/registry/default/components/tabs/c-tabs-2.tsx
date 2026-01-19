import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/default/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList variant="underline">
        <TabsTab value="tab-1">Tab 1</TabsTab>
        <TabsTab value="tab-2">Tab 2</TabsTab>
        <TabsTab value="tab-3">Tab 3</TabsTab>
      </TabsList>
      <TabsPanel value="tab-1" className="rounded-lg border">
        <p className="p-5 text-center text-muted-foreground text-xs">Tab 1 content</p>
      </TabsPanel>
      <TabsPanel value="tab-2" className="rounded-lg border">
        <p className="p-5 text-center text-muted-foreground text-xs">Tab 2 content</p>
      </TabsPanel>
      <TabsPanel value="tab-3" className="rounded-lg border">
        <p className="p-5 text-center text-muted-foreground text-xs">Tab 3 content</p>
      </TabsPanel>
    </Tabs>
  );
}
