import React from "react";
import Navbar from "./_components/Navbar";
import { Metadata } from "next";

type Props = {
  children: Readonly<React.ReactNode>;
};

export const metadata: Metadata = {
  title: "Penny-Pilot",
  description: "Finance in Flight",
};

const LandingPageLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default LandingPageLayout;
