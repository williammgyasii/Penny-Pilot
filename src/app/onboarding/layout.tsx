import React from "react";

type Props = {
  children: React.ReactNode;
};

const OnboardingLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      {children}
    </div>
  );
};

export default OnboardingLayout;
