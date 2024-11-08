import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <h2
        className="text-4xl text-center md:text-4xl lg:text-5xl xl:text-7xl
            text-balance w-full md:w-full lg:w-[80%]  md:leading-relaxed tracking-tighter 
            font-poppins font-medium text-ui-ui_light_200"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-md text-center md:w-[60%] max-md:text-xs font-light font-poppins">
          {subtitle}
        </p>
      )}
    </>
  );
};

export default SectionTitle;
