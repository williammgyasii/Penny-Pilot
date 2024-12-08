import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Penny Pilot",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //CHANGE TO REDUX

  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ReduxProvider>
          <AuthProvider>
            <Toaster />
            <NextTopLoader showSpinner={false} />

            {children}
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
