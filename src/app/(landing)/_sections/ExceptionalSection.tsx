import React from "react";
import SectionLayout from "../_components/SectionLayout";

const ExceptionalSection = () => {
  return (
    <SectionLayout
      withPadding
      className="bg-ui-ui_light_200 -mt-2 py-[4rem] px-0 md:!px-0 "
    >
      <div
        className="absolute top-1/4 left-0 -translate-x-2/3 -translate-y-1/2
        w-[500px] h-[500px] rounded-full
        bg-blue-500/30 
        blur-3xl 
        animate-[pulse_8s_ease-in-out_infinite]
        hover:bg-blue-500/40 transition-colors duration-2000"
      />
      <div>

      </div>
    </SectionLayout>
  );
};

export default ExceptionalSection;
