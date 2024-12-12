"use client";
import { useAppSelector } from "@/redux/reduxhooks";
import { RootState } from "@/redux/store";
import React from "react";
import OnboardingFormControl from "./_components/OnboardingForm";

const OnboardingPage = () => {
  const { currentUser } = useAppSelector((state: RootState) => state.auth);
  console.log(currentUser);

  return (
    <div className="space-y-2 flex flex-col items-center justify-center ">
      <div className="w-full pt-5">
        <OnboardingFormControl />
      </div>
    </div>
  );
};

export default OnboardingPage;
