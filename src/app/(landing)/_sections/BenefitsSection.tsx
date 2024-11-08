import React from "react";
import SectionLayout from "../_components/SectionLayout";
import GradientBlobs from "@/animated/GradientBlob";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";
import TitleBubble from "../_components/TitleBubble";
import SectionTitle from "../_components/SectionTitle";

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
      </div>
    </SectionLayout>
  );
};

export default BenefitsSection;
