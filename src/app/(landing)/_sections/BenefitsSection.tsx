import React from "react";
import SectionLayout from "../_components/SectionLayout";
import GradientBlobs from "@/animated/GradientBlob";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";
import TitleBubble from "../_components/TitleBubble";

type Props = {};

const BenefitsSection = (props: Props) => {
  return (
    <SectionLayout
      withPadding
      className="md:overflow-hidden bg-custom-gradient"
    >
      <div
        className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px] rounded-full
        bg-yellow-500/30 
        blur-3xl 
        animate-[pulse_8s_ease-in-out_infinite]
        hover:bg-blue-500/40 transition-colors duration-2000"
      />
      <div className="flex flex-col items-center justify-center w-full bg-red-900">
        <ScrollFadeInEffect fullWidth="100%" animationNum={0}>
          <div className="space-y-5 md:space-y-5 items-center flex flex-col">
            <TitleBubble title="Join the future" variant="dark" />
            <h1
              className="text-4xl text-center md:text-4xl lg:text-5xl xl:text-7xl
            text-balance w-full md:w-full lg:w-[80%] leading-little tracking-tighter 
            font-poppins font-medium"
            >
              Take Charge of Your Finances with Penny Pilot
            </h1>
          </div>
        </ScrollFadeInEffect>
      </div>
    </SectionLayout>
  );
};

export default BenefitsSection;
