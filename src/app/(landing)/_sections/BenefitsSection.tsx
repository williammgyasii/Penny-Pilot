import React from "react";
import SectionLayout from "../_components/SectionLayout";
import GradientBlobs from "@/animated/GradientBlob";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";
import TitleBubble from "../_components/TitleBubble";
import SectionTitle from "../_components/SectionTitle";
import FeaturesCard from "../_components/BenefitsCards";
import BenefitsCards from "../_components/BenefitsCards";
import fintapImage from "@public/Fintap.png";
import BenefitsCardLarge from "../_components/BenefitCardLarge";

type Props = {};

const BenefitsSection = (props: Props) => {
  return (
    <SectionLayout
      withPadding
      className="md:overflow-hidden bg-custom-gradient py-[4rem]"
    >
      <div
        className="absolute top-1/4 left-0 -translate-x-2/3 -translate-y-1/2
        w-[500px] h-[500px] rounded-full
        bg-blue-500/30 
        blur-3xl 
        animate-[pulse_8s_ease-in-out_infinite]
        hover:bg-blue-500/40 transition-colors duration-2000"
      />
      <div className="flex flex-col items-center justify-center w-full text-white">
        <ScrollFadeInEffect fullWidth="100%" animationNum={0}>
          <div className="md:space-y-5 space-y-3 items-center flex flex-col">
            <TitleBubble
              title="Financial Disipline Made Easy"
              variant="light"
            />
            <SectionTitle
              subtitle="Discover our wide-ranging financial tools. Experience seamless, user-friendly, and efficient financial management at your fingertips."
              title="Our diverse suite of finance solutions"
            />
          </div>
        </ScrollFadeInEffect>

        <ScrollFadeInEffect
          className="mt-9 block"
          fullWidth="100%"
          animationNum={1}
        >
          <div className="bg-red-900 grid-rows-2 gap-5 grid grid-cols-6">
            <BenefitsCards
              className="col-span-3"
              brief="Automatically move money to savings based on personalized financial recommendations."
              title="Automated Savings"
              image={fintapImage}
            />
            <BenefitsCardLarge
              className="col-span-3 row-span-2"
              brief="Automatically move money to savings based on personalized financial recommendations."
              title="Automated Savings"
              image={fintapImage}
            />
            <BenefitsCards
              className="col-span-3"
              brief="Automatically move money to savings based on personalized financial recommendations."
              title="Automated Savings"
              image={fintapImage}
            />
          </div>
        </ScrollFadeInEffect>
      </div>
    </SectionLayout>
  );
};

export default BenefitsSection;
