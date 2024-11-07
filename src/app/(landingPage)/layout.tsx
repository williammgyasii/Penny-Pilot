import React from "react";

const LandingLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return <div>{children}</div>;
};

export default LandingLayout;
