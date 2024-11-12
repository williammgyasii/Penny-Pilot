import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import TitleBubble from "./TitleBubble";

type Props = {
  title: string;
  brief: string;
  image?: StaticImport;
  isReversed?: boolean;
  withBubble?: boolean;
  className?: string;
};

const BenefitsCardLarge = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full items-start justify-between space-y-6 bg-benefit-card-background px-7 py-7 rounded-xl",
        props.className
      )}
    >
      <TitleBubble size="small" title="Peaceful Tomorrow" variant="purple" />
      <div className="h-full">
        <Image
          src={props.image!}
          className="object-cover rounded-xl h-full w-full"
          alt="Product Alt"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full  items-center h-full justify-between text-ui-ui_dark_500 ">
        <h2 className="md:text-3xl text-2xl  text-left">{props.title}</h2>
        <p className="text-sm w-full md:w-[50%] font-light font-poppins leading-snug text-left">
          {props.brief}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCardLarge;
