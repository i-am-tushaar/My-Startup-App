import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { TopBar } from "./TopBar";
import { FloatingChatBot } from "@/components/ui/FloatingChatBot";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          
          <main className="flex-1 p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8 overflow-x-hidden">
            {children}
          </main>
        </div>
        
        <FloatingChatBot />
      </div>
    </SidebarProvider>
  );
}