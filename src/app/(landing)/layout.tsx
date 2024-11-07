import React from "react";
import Navbar from "./_components/Navbar";

type Props = {
  children: Readonly<React.ReactNode>;
};

const LandingPageLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LandingPageLayout;
