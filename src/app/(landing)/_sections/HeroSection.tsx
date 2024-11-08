import React from "react";
import SectionLayout from "../_components/SectionLayout";
import heroSection from "@public/Fintap.png";
import Image from "next/image";
import TitleBubble from "../_components/TitleBubble";
import GradientBorder from "@/animated/GradientBorder";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";

const HeroSection = () => {
  return (
    <SectionLayout
      withPadding
      className="min-h-screen md:overflow-hidden text-white bg-hero-background"
    >
      <div className="grid sm:space-x-3 grid-cols-2">
        <div
          className="col-span-2 md:col-span-1 flex flex-col justify-center 
        md:space-y-7 space-y-2 items-start"
        >
          <ScrollFadeInEffect className="space-y-7" flexCenter animationNum={0}>
            <TitleBubble title="Join the future" variant="dark" />
            <h1 className="text-5xl md:text-7xl text-balance w-full  md:w-[80%] leading-little tracking-tighter font-poppins font-medium">
              Take Charge of Your Finances with Penny Pilot
            </h1>
          </ScrollFadeInEffect>
          <ScrollFadeInEffect animationNum={1}>
            <GradientBorder>
              <p className="text-sm p-3 max-w-[30rem] text-ui-ui_light_400 leading-relaxed">
                Penny Pilot is designed to help you track earnings, manage
                expenses, and project future income, all in one place. Our
                tailored insights make it easier than ever to navigate the
                unpredictable income streams of freelancing and gig work. Start
                taking control of your financial future today.
              </p>
            </GradientBorder>
          </ScrollFadeInEffect>

          <ScrollFadeInEffect animationNum={1}>
            <Button size={"lg"} icon={ArrowUpRight}>
              Lets Get Started
            </Button>
          </ScrollFadeInEffect>
        </div>

        <div className="col-span-2 md:col-span-1">
          <ScrollFadeInEffect animationNum={3}>
            <div
              className="lg:w-[48rem] p-1 [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] 
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
    </SectionLayout>
  );
};

export default HeroSection;
