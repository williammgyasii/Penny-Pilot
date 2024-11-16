"use client";
import { cn } from "@/lib/utils";

declare type Variants = "small" | "medium" | "large";
declare type GradientColors = "gray" | "green";
declare type TextGradientProps = {
  text: string;
  from?: string;
  via?: string;
  to?: string;
  variants: Variants;
  className?: string;
  gradientType?: GradientColors;
};

export default function TextGradient({
  gradientType = "gray",
  text,
  ...props
}: TextGradientProps) {
  const from = props.from || "from-orange-700";
  const via = props.via || "via-blue-500";
  const to = props.to || "to-green-400";

  return (
    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
      {text}
    </h1>
  );
}
