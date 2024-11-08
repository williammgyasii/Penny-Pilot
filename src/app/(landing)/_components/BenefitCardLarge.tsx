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
  console.log(props.title);
  console.log(props.className);
  return (
    <div
      className={cn(
        "flex flex-col w-full items-start justify-between space-x-6 bg-benefit-card-background px-7 py-7 rounded-xl",
        props.className
      )}
    >
      <TitleBubble title="PFeaceful Tomorrow" variant="purple" />
      <div className="flex flex-col w-[50%] items-start h-full justify-between text-ui-ui_dark_500 ">
        <h2 className="text-4xl text-left mb-7">{props.title}</h2>
        <p className="text-md font-light font-poppins leading-snug text-left">
          {props.brief}
        </p>
      </div>

      <div className="w-[50%] h-full">
        <Image
          src={props.image!}
          className="object-cover rounded-xl h-full w-full"
          alt="Product Alt"
        />
      </div>
    </div>
  );
};

export default BenefitsCardLarge;
