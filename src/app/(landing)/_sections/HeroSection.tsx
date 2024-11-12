import React from "react";
import SectionLayout from "../_components/SectionLayout";
import heroSection from "@public/Fintap.png";
import Image from "next/image";
import TitleBubble from "../_components/TitleBubble";
import GradientBorder from "@/animated/GradientBorder";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";
import BrandsMarquee from "../_components/BrandsMarquee";

const HeroSection = () => {
  return (
    <SectionLayout
      withPadding
      className="min-h-screen md:overflow-hidden text-white bg-hero-background"
    >
      <div className="grid md:space-x-5 max-md:space-y-5 grid-cols-2">
        <div className="col-span-2 md:col-span-1 flex flex-col justify-start md:space-y-3 lg:space-y-4 space-y-6 items-start w-full ">
          <ScrollFadeInEffect animationNum={0}>
            <div className=" space-y-5 md:space-y-5 items-center flex flex-col md:items-start">
              <TitleBubble title="Join the future" variant="purple" />
              <h1
                className="text-4xl text-center md:text-left md:text-4xl lg:text-5xl xl:text-7xl
            text-balance w-full md:w-full lg:w-[80%] leading-little tracking-tighter 
            font-poppins font-medium"
              >
                Take Charge of Your Finances with Penny Pilot
              </h1>
            </div>
          </ScrollFadeInEffect>
          <ScrollFadeInEffect animationNum={1}>
            <GradientBorder>
              <p className="text-sm text-center md:text-left p-3 md:max-w-[30rem] text-ui-ui_light_400 leading-relaxed">
                Penny Pilot is designed to help you track earnings, manage
                expenses, and project future income, all in one place. Our
                tailored insights make it easier than ever to navigate the
                unpredictable income streams of freelancing and gig work. Start
                taking control of your financial future today.
              </p>
            </GradientBorder>
          </ScrollFadeInEffect>

          <ScrollFadeInEffect fullWidth={"100%"} animationNum={1}>
            <div className="w-full flex justify-center md:justify-start ">
              <Button size={"lg"} icon={ArrowUpRight}>
                Lets Get Started
              </Button>
            </div>
          </ScrollFadeInEffect>
        </div>

        <div className="col-span-2 md:col-span-1">
          <ScrollFadeInEffect animationNum={3}>
            <div
              className="md:w-[35rem] lg:w-[42rem] xl:w-[52rem] p-1 [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] 
        rounded-2xl border-2 border-transparent animate-border"
            >
              <Image
                src={heroSection}
                className="rounded-2xl"
                alt="Hero Illustration"
              />
            </div>
          </ScrollFadeInEffect>
        </div>
      </div>

      {/* <BrandsMarquee /> */}
    </SectionLayout>
  );
};

export default HeroSection;
