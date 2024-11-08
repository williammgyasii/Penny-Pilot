import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { section } from "framer-motion/client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  withPadding?: boolean;
  ref?: React.RefObject<HTMLDivElement>;
  paddingTop?: string | number;
};

const SectionLayout = ({
  children,
  className,
  withPadding,
  ref,
  paddingTop,
}: Props) => {
  const sectionStyling = cn(`relative px-2 pt-[8rem] pb-2 `, className, {
    "md:px-[4rem] lg:px-[6rem] ": withPadding,
  });
  return (
    <section ref={ref} className={sectionStyling}>
      {children}
    </section>
  );
};

export default SectionLayout;
