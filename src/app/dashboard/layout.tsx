import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode } from "react";
import AccountSheetComponent from "./(sidebarRoutes)/accounts/_components/AccountSheet";

type Props = {
  children: ReactNode;
};

const DashboardMainLayout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <NextTopLoader showSpinner={false} />
      <QueryProvider>
        <AccountSheetComponent />
        {children}
      </QueryProvider>
    </AuthProvider>
  );
};

export default DashboardMainLayout;
