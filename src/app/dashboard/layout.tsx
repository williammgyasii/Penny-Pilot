import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardMainLayout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <NextTopLoader showSpinner={false} />
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
};

export default DashboardMainLayout;
