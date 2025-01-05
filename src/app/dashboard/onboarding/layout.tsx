import React from "react";
import OnboardInfo from "./_components/OnboardInfo";

type Props = {
  children: React.ReactNode;
};

const OnboardingLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ccc]">
      <div className="w-[80%] h-[90vh] rounded-xl grid grid-cols-10 bg-white p-2 gap-x-6 shadow-sm">
        <div className="col-span-3 bg-ui-ui_light_200 rounded-2xl">
          <OnboardInfo />
        </div>
        <div className="col-span-7">{children}</div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
