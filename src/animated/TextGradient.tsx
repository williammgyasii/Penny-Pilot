"use client";

declare type TextGradientProps = {
  text: string;
  className?: string;
  subtitle?: string;
};

const TextGradient = ({ text, subtitle }: TextGradientProps) => {
  return (
    <>
      <h1 className="animate-text tracking-tighter font-semibold bg-clip-text text-transparent text-4xl md:text-5xl xl:text-7xl font-poppins bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 background-animate">
        {text}
      </h1>
      <span className="inline-block text-gray-500 -mt-1 text-sm">
        {subtitle}
      </span>
    </>
  );
};

export default TextGradient;
