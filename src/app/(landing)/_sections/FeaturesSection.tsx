import React from "react";
import SectionLayout from "../_components/SectionLayout";
import FeaturesCard from "../_components/FeaturesCard";

const FeaturesSection = () => {
  return (
    <SectionLayout withPadding className="bg-white -mt-2 py-[4rem] ">
      <div className="flex w-full flex-col items-center justify-center space-y-3">
        <FeaturesCard />
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
