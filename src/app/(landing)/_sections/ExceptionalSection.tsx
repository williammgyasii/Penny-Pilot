import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";
import TitleBubble from "../_components/TitleBubble";
import SectionTitle from "../_components/SectionTitle";
import Image from "next/image";
import fintapImage from "@public/Fintap.png";

const ExceptionalSection = () => {
  return (
    <SectionLayout withPadding className="bg-ui-ui_light_200 -mt-2 py-[4rem] ">
      <div
        className="absolute top-1/4 left-0 -translate-x-2/3
        w-[500px] h-[500px] rounded-full
        bg-blue-500/50 
        blur-3xl 
        animate-[pulse_8s_ease-in-out_infinite]
        hover:bg-blue-500/40 transition-colors duration-2000"
      />
      <div
        className="absolute bottom-0 right-0 translate-x-[10rem]
        w-[500px] h-[500px] rounded-full
        bg-blue-500/50 
        blur-3xl 
        animate-[pulse_8s_ease-in-out_infinite]
        hover:bg-blue-500/40 transition-colors duration-2000"
      />
      <div className="flex flex-col items-center justify-center w-full space-y-3">
        <ScrollFadeInEffect fullWidth="100%" animationNum={0}>
          <div className="md:space-y-5 space-y-1 items-center flex flex-col">
            <TitleBubble title="Financial Disipline Made Easy" variant="blue" />
            <SectionTitle
              dark
              subtitle="Explore what makes us exceptional in the finance industry. Experience innovative solutions, personalized services, and seamless transactions."
              title="What makes us exceptional"
            />
          </div>
        </ScrollFadeInEffect>

        <ScrollFadeInEffect
          fullWidth="100%"
          className="flex items-center justify-center"
          animationNum={1}
        >
          <div
            className="grid-cols-2 gap-5 grid w-[80%] 
          overflow-hidden h-[25rem] relative rounded-xl bg-ui-ui_dark_700 p-3"
          >
            <div className="col-span-1">
              <Image
                src={fintapImage}
                alt="Financial Discipline"
                className="object-cover rounded-xl w-full h-full"
              />
            </div>
            <div className="col-span-1 flex flex-col items-start w-full">
              <div className="text-white text-xl font-bold">
                Fintap is an innovative financial discipline made easy
              </div>
              <div className="text-white text-sm">
                With Fintap, you can explore personalized solutions, seamless
                transactions, and personalized insights.
              </div>
            </div>
          </div>
        </ScrollFadeInEffect>
      </div>
    </SectionLayout>
  );
};

export default ExceptionalSection;
