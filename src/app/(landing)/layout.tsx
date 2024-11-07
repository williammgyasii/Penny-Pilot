import React from "react";
import Navbar from "./_components/Navbar";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

type Props = {
  children: Readonly<React.ReactNode>;
};

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400","100","200"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Penny-Pilot",
  description: "Finance in Flight",
};

const LandingPageLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className={`${poppinsFont.variable}`}>{children}</main>
    </>
  );
};

export default LandingPageLayout;
