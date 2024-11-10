import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { CurrentUsers } from "@/lib/constants";

const TestimonialsSection = () => {
  return (
    <SectionLayout
      withPadding
      className="bg-custom-gradient -mt-2 py-[4rem]"
    >
      <div className="flex w-full flex-col items-center justify-center space-y-3">
        <p className="text-center text-white font-normal text-xl md:text-xl">
          More than
          <span className="text-ui-ui_yellow_400">{` ${CurrentUsers}+ `}</span>
          users love their financial journey
        </p>
      </div>

      
      
    </SectionLayout>
  );
};

export default TestimonialsSection;
