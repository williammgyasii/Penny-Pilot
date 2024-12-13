import React from "react";
import OnboardingFormControl from "./_components/OnboardingForm";

const OnboardingPage = () => {
  return (
    <div className="space-y-2 flex flex-col items-center justify-center ">
      <div className="w-full pt-5">
        <OnboardingFormControl />
      </div>
    </div>
  );
};

export default OnboardingPage;
