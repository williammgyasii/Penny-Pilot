"use client";

declare type TextGradientProps = {
  text: string;
  className?: string;
  subtitle?: string;
};

const TextGradient = ({ text, subtitle }: TextGradientProps) => {
  return (
    <>
      <h1 className="animate-text tracking-tighter font-semibold bg-clip-text text-transparent md:5xl lg:text-7xl font-poppins bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 background-animate">
        {text}
      </h1>
      <span className="inline-block text-blue-900 text-sm">{subtitle}</span>
    </>
  );
};

export default TextGradient;
