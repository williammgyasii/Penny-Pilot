import React from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

const LandingPageLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default LandingPageLayout;
