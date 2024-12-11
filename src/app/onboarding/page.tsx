"use client";
import { useAppSelector } from "@/redux/reduxhooks";
import { RootState } from "@/redux/store";
import React from "react";
import OnboardingFormControl from "./_components/OnboardingForm";

const OnboardingPage = () => {
  const { currentUser } = useAppSelector((state: RootState) => state.auth);
  console.log(currentUser);

  return (
    <div className="py-10 space-y-2 flex flex-col items-center justify-center ">
      {/* <TextGradient
        text="Welcome Back"
        subtitle="Login to continue with your financial discipline"
      /> */}
      <div>
        <h1 className="text-3xl text-center">Basic Details</h1>
        <span className="text-ui-ui_light_600  text-sm">
          Please fill the fields below with your contact details.
        </span>
      </div>

      <div className="bg-ui-ui_dark_200 w-full pt-10">
        <OnboardingFormControl />
      </div>
    </div>
  );
};

export default OnboardingPage;
