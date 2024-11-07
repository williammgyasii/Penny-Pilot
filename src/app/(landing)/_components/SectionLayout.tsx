import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { section } from "framer-motion/client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  withPadding?: boolean;
};

const SectionLayout = ({ children, className, withPadding }: Props) => {
  const sectionStyling = cn(`relative py-[8rem]`, className, {
    "px-[7rem]": withPadding,
  });
  return <section className={sectionStyling}>{children}</section>;
};

export default SectionLayout;
