import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";
import TitleBubble from "../_components/TitleBubble";
import SectionTitle from "../_components/SectionTitle";
import Image from "next/image";
import fintapImage from "@public/Fintap.png";
import GradientBorder from "@/animated/GradientBorder";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";

const ExceptionalSection = () => {
  return (
    <SectionLayout
      withPadding
      className="bg-ui-ui_light_200 -mt-2 py-[4rem] overflow-hidden "
    >
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
            className="grid-cols-6 gap-6 grid w-full lg:w-[85%] 
          overflow-hidden  relative rounded-xl bg-ui-ui_dark_700 lg:p-10 p-4"
          >
            <div
              className="absolute top-1/4 left-0 translate-y-1/3
        w-[800px] h-[500px] rounded-full
        bg-blue-500 
        blur-xl 
        z-1
        animate-[pulse_8s_ease-in-out_infinite]
        hover:bg-blue-500/40 transition-colors duration-2000"
            />
            <div className="col-span-6 md:col-span-2 flex items-center justify-center z-10">
              <Image
                src={fintapImage}
                alt="Financial Discipline"
                className="object-cover rounded-xl w-full h-full"
              />
            </div>
            <div className="col-span-6 md:col-span-4 z-10 flex flex-col  items-start w-full text-white space-y-3">
              <h1
                className="text-4xl text-center md:text-left md:text-3xl lg:text-4xl xl:text-5xl
            text-balance w-full md:w-full  leading-little tracking-tighter 
            font-poppins font-medium"
              >
                Redefine your finances with the best way
              </h1>
              <GradientBorder>
                <p className="text-sm text-center md:text-left p-3  text-ui-ui_light_400 leading-relaxed">
                  Financial Cards transform banking, offering convenience,
                  control, and seamless transactions.
                </p>
              </GradientBorder>
              <div className="w-full flex justify-center md:justify-start ">
                <Button size={"lg"}>
                  Read More
                  <ArrowBigLeft />
                </Button>
              </div>
            </div>
          </div>
        </ScrollFadeInEffect>
      </div>
    </SectionLayout>
  );
};

export default ExceptionalSection;
