import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  brief: string;
  image?: StaticImport;
  isReversed?: boolean;
  withBubble?: boolean;
  className?: string;
};

const BenefitsCards = (props: Props) => {
  return (
    <div
      className={cn(
        "flex items-start w-full md:justify-between md:space-x-6 bg-benefit-card-background px-7 py-7 rounded-xl",
        "md:flex-row",
        "flex-col",
        props.className
      )}
    >
      <div className="flex flex-col w-full md:w-[50%] items-start max-md:mb-4 md:h-full  md:justify-between text-ui-ui_dark_500 ">
        <h2 className="md:text-4xl text-2xl text-left md:mb-7">
          {props.title}
        </h2>
        <p className="text-md font-light font-poppins leading-snug text-left">
          {props.brief}
        </p>
      </div>

      <div className="md:w-[50%] w-full h-full">
        <Image
          src={props.image!}
          className="object-cover rounded-xl h-full w-full"
          alt="Product Alt"
        />
      </div>
    </div>
  );
};

export default BenefitsCards;
