import { cn } from "@/lib/utils";
import React from "react";

type Variant = "dark" | "light";

type Props = {
  title: string;
  variant: Variant;
};

const TitleBubble = ({ title, variant = "dark" }: Props) => {
  const bubbleStyle = cn(
    `px-7 py-2 rounded-xl font-normal text-xs md:text-sm font-poppins`,
    {
      "bg-ui-ui_dark_300 text-white": variant === "dark",
      "text-white bg-ui-ui_yellow_100": variant === "light",
    }
  );
  return <h6 className={bubbleStyle}>{title.toUpperCase()}</h6>;
};

export default TitleBubble;
