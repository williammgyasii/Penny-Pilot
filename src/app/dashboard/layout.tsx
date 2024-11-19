import AuthProvider from "@/components/AuthProvider";
import { Metadata } from "next";

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
  return <AuthProvider>{children}</AuthProvider>;
}
