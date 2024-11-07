import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { section } from "framer-motion/client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionLayout = ({ children, className }: Props) => {
  const sectionStyling = cn("relative ", className);
  return <section className={sectionStyling}>{children}</section>;
};

export default SectionLayout;
