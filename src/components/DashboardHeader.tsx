import React from "react";
import { Breadcrumbs } from "./ui/breadcrumbs";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { UserNav } from "./UserNav";

export default function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center  justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4" />
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-2 px-4">
        <div className="hidden md:flex">{/* <SearchInput /> */}</div>
        <UserNav />
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
