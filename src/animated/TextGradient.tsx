"use client";
import { cn } from "@/lib/utils";

// declare type Variants = "small" | "medium" | "large";
declare type GradientColors = "gray" | "green";
declare type TextGradientProps = {
  text: string;
  from?: string;
  via?: string;
  to?: string;
  // variant`s: Variants;
  className?: string;
  gradientType?: GradientColors;
  subtitle?: string;
};

export default function TextGradient({
  gradientType = "gray",
  text,
  subtitle,
  ...props
}: TextGradientProps) {
  return (
    <>
      <h1 className="animate-text font-semibold font-poppins bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl">
        {text}
      </h1>
      <span className="inline-block text-red-900 text-sm">{subtitle}</span>
    </>
  );
}
