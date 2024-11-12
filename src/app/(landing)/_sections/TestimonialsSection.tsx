import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { CurrentUsers } from "@/lib/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MarqueeContent from "@/animated/MarqueeContent";

const TestimonialsSection = () => {
  return (
    <SectionLayout withPadding className="bg-custom-gradient -mt-2 py-[4rem]">
      <div className="flex w-full flex-col items-center justify-center space-y-3">
        <p className="text-center text-white font-normal text-xl md:text-xl">
          More than
          <span className="text-ui-ui_yellow_400">{` ${CurrentUsers}+ `}</span>
          users love their financial journey
        </p>

        <div
          className="relative flex h-full w-full flex-col items-center 
        justify-center overflow-hidden py-3 group"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-800 to-transparent z-10"></div>

          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            <MarqueeContent
            //   key={`second-${index}`}
            //   contentId={`second-${index}`}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default TestimonialsSection;
