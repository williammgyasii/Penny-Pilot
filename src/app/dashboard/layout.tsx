import AppSidebar from "@/components/AppSidebar";
import AuthProvider from "@/components/AuthProvider";
import DashboardHeader from "@/components/DashboardHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard Layout",
  description: "Layout for the dashboard",
  keywords: ["penny pilot", "dashboard"],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        {/* page main content */}
        <Suspense fallback={<div>Loading....</div>}>{children}</Suspense>
        {/* page main content ends */}
      </SidebarInset>
    </SidebarProvider>
  );
}
