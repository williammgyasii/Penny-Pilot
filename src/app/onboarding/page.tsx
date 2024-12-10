"use client";
import { useAppDispatch, useAppSelector } from "@/redux/reduxhooks";
import { RootState } from "@/redux/store";
import React from "react";

const OnboardingPage = () => {
  const { currentUser } = useAppSelector((state: RootState) => state.auth);
  console.log(currentUser);

  return (
    <div className="">
      <h1>acr{currentUser?.firstName}</h1>
      Welcome to onboaacrding
    </div>
  );
};

export default OnboardingPage;
