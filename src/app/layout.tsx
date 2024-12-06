import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "@/components/ToastContainer";
import { ReduxProvider } from "@/redux/provider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
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
        <NextTopLoader showSpinner={false} />
        {children}
        {/* <ToastProvider /> */}
      </body>
    </html>
  );
}
