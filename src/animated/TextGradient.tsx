"use client";

declare type TextGradientProps = {
  text: string;
  className?: string;
  subtitle?: string;
};

const TextGradient = ({ text, subtitle }: TextGradientProps) => {
  return (
    <div className="relative">
      <h1
        className={`font-semibold text-6xl font-poppins 
        [background:linear-gradient(to_right,theme(colors.teal.500),theme(colors.purple.500),theme(colors.orange.500))]
        [-webkit-background-clip:text] [background-clip:text] text-transparent
        [animation:gradient_5s_ease-in-out_infinite] bg-[length:200%_auto]`}
      >
        {text}
      </h1>
      {subtitle && (
        <span className="inline-block text-blue-900 text-sm">{subtitle}</span>
      )}
    </div>
  );
};

export default TextGradient;
