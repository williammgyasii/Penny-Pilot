import { cn } from "@/lib/utils";
import React from "react";

type Variant = "small" | "medium" | "large";

type Props = {
  title: string;
  subtitle?: string;
  dark?: boolean;
  direction?: string;
  variant?: Variant;
};

const SectionTitle = ({ title, subtitle, dark, direction, variant }: Props) => {
  return (
    <>
      <h2
        className={cn(
          `text-4xl text-center md:text-4xl lg:text-5xl xl:text-7xl
            text-balance w-full md:w-full lg:w-[80%]  md:leading-relaxed tracking-tighter 
            font-poppins font-medium text-ui-ui_light_200`,
          {
            "text-black": dark,
            "text-left": direction === "text-left",
            "!text-5xl": variant === "small",
          }
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-md text-center md:w-[60%] max-md:text-xs font-light font-poppins",
            {
              "text-black": dark,
              "text-left": direction === "text-left",
              "!text-sm": variant === "small",
              "text-2xl": variant === "large",
            }
          )}
        >
          {subtitle}
        </p>
      )}
    </>
  );
};

export default SectionTitle;
