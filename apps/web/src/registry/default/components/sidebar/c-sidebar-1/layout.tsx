import { AppSidebar } from "@/registry/default/components/sidebar/c-sidebar-1/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/registry/default/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
