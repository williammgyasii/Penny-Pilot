import { cn } from "@/lib/utils";
import React from "react";

type Variant = "dark" | "light";

type Props = {
  title: string;
  variant: Variant;
};

const TitleBubble = ({ title, variant = "dark" }: Props) => {
  const bubbleStyle = cn(
    `px-7 py-2 rounded-xl font-light text-sm font-poppins`,
    {
      "bg-ui-ui_dark_300": variant === "dark",
      "bg-red-900": variant === "light",
    }
  );
  return <span className={bubbleStyle}>{title}</span>;
};

export default TitleBubble;
