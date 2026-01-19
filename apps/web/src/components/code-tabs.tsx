// "use client";

// import { useConfig } from "@/hooks/use-config";
// import { Tabs } from "@/components/ui/tabs";

// export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
//   const [config, setConfig] = useConfig();

//   const installationType = React.useMemo(() => {
//     return config.installationType || "cli";
//   }, [config]);

//   return (
//     <Tabs
//       className="relative mt-6 w-full"
//       onValueChange={(value) =>
//         setConfig({ ...config, installationType: value as "cli" | "manual" })
//       }
//       value={installationType}
//     >
//       {children}
//     </Tabs>
//   );
// }
