import React from "react";
import SectionLayout from "../_components/SectionLayout";
import FeaturesCard from "../_components/FeaturesCard";
import { ScrollFadeInEffect } from "@/animated/ScrollFadeInEffect";
import TitleBubble from "../_components/TitleBubble";
import SectionTitle from "../_components/SectionTitle";
import { Coins, Lock } from "lucide-react";

const FeaturesSection = () => {
  return (
    <SectionLayout withPadding className="bg-white -mt-2 py-[4rem] ">
      <div className="flex w-full flex-col items-center justify-center space-y-3">
        <ScrollFadeInEffect fullWidth="100%" animationNum={0}>
          <div className="md:space-y-5  space-y-1 items-center flex flex-col">
            <TitleBubble title="Explore our benefits" variant="blue" />
            <SectionTitle
              dark
              subtitle="Explore what makes us exceptional in the finance industry. Experience innovative solutions, personalized services, and seamless transactions."
              title="Make a Lasting Financial Journey With Penny Pilot"
            />
          </div>
        </ScrollFadeInEffect>

        <FeaturesCard
          title="Personalized Budget Planner Tool"
          subtitle="Navigate your financial journey with our Comprehensive Debt Management system, effective debt reduction strategies."
          topIcon={Coins}
          className="w-full"
        />
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
