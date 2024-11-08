import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { section } from "framer-motion/client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  withPadding?: boolean;
  ref?: React.RefObject<HTMLDivElement>;
};

const SectionLayout = ({ children, className, withPadding, ref }: Props) => {
  const sectionStyling = cn(`relative px-2 py-[8rem]  `, className, {
    "md:px-[4rem] lg:px-[6rem] ": withPadding,
  });
  return (
    <section ref={ref} className={sectionStyling}>
      {children}
    </section>
  );
};

export default SectionLayout;
