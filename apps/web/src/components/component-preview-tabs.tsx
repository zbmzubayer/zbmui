// "use client";

// import { useState } from "react";

// import { cn } from "@/lib/cn";
// import { Tabs, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

// export function ComponentPreviewTabs({
//   className,
//   align = "center",
//   hideCode = false,
//   component,
//   source,
//   ...props
// }: React.ComponentProps<"div"> & {
//   align?: "center" | "start" | "end";
//   hideCode?: boolean;
//   component: React.ReactNode;
//   source: React.ReactNode;
// }) {
//   const [tab, setTab] = useState("preview");

//   return (
//     <div className={cn("mt-4 mb-12 flex flex-col gap-2", className)} {...props}>
//       <Tabs onValueChange={setTab} value={tab}>
//         <div className="flex items-center justify-between">
//           {!hideCode && (
//             <TabsList className="bg-transparent p-0 *:data-[slot=tab-indicator]:rounded-lg *:data-[slot=tab-indicator]:bg-accent *:data-[slot=tab-indicator]:shadow-none">
//               <TabsTrigger className="rounded-lg" value="preview">
//                 Preview
//               </TabsTrigger>
//               <TabsTrigger className="rounded-lg" value="code">
//                 Code
//               </TabsTrigger>
//             </TabsList>
//           )}
//         </div>
//       </Tabs>
//       <div
//         className="relative overflow-hidden rounded-xl border data-[tab=code]:bg-code"
//         data-tab={tab}
//       >
//         <div className="invisible data-[active=true]:visible" data-active={tab === "preview"}>
//           <div
//             className={cn(
//               "flex h-112.5 w-full justify-center overflow-y-auto p-10 data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center max-sm:px-6"
//             )}
//             data-align={align}
//             data-slot="preview"
//           >
//             {component}
//             {/* <div data-slot="preview">{component}</div> */}
//           </div>
//         </div>
//         <div
//           className="absolute inset-0 hidden overflow-hidden data-[active=true]:block **:[figure]:m-0! **:[pre]:h-112.5"
//           data-active={tab === "code"}
//           data-slot="code"
//         >
//           {source}
//           hi
//         </div>
//       </div>
//     </div>
//   );
// }

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
          {/* {component} */}
          <div
            data-slot="preview"
            className="has-[>[data-slot=accordion]]:w-full has-[>[data-slot=accordion]]:max-w-[80%]"
          >
            {component}
          </div>
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
