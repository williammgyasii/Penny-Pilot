import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";
import TitleBubble from "../_components/TitleBubble";
import SectionTitle from "../_components/SectionTitle";

const ExceptionalSection = () => {
  return (
    <SectionLayout
      withPadding
      className="bg-ui-ui_light_200 -mt-2 py-[4rem] px-0 md:!px-0 "
    >
      <div
        className="absolute top-1/4 left-0 -translate-x-2/3
        w-[500px] h-[500px] rounded-full
        bg-blue-500/30 
        blur-3xl 
        animate-[pulse_8s_ease-in-out_infinite]
        hover:bg-blue-500/40 transition-colors duration-2000"
      />
      <div className="flex flex-col items-center justify-center w-full">
        <ScrollFadeInEffect fullWidth="100%" animationNum={0}>
          <div className="md:space-y-5 space-y-3 items-center flex flex-col">
            <TitleBubble title="Financial Disipline Made Easy" variant="blue" />
            <SectionTitle
              dark
              subtitle="Explore what makes us exceptional in the finance industry. Experience innovative solutions, personalized services, and seamless transactions."
              title="What makes us exceptional"
            />
          </div>
        </ScrollFadeInEffect>
      </div>
    </SectionLayout>
  );
};

export default ExceptionalSection;
