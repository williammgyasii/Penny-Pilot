"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TimelineContent = ({
  children,
  animationNum,
  className,
}: {
  children: React.ReactNode;
  animationNum: number;
  className?: string;
}) => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  console.log(timelineRef.current);
  const styles = cn(className);
  const sequenceVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      y: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3, // Delay each item by 0.5s multiplied by its index
        duration: 0.5, // Duration of the blur removal
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: 0,
      opacity: 0,
    },
  };
  const isInView = useInView(timelineRef, {
    once: false,
  });
  return (
    <>
      <>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={animationNum}
          variants={sequenceVariants}
          className={styles}
          ref={timelineRef}
        >
          {children}
        </motion.div>
      </>
    </>
  );
};
