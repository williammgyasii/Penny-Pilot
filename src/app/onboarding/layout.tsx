import React from "react";

type Props = {
  children: React.ReactNode;
};

const OnboardingLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ccc]">
      <div className="w-[75%] h-[85vh] rounded-lg grid grid-cols-9 bg-white p-2 gap-x-4 shadow-sm">
        <div className="col-span-3 bg-ui-ui_light_200 rounded-lg"></div>
        <div className="col-span-6">{children}</div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
