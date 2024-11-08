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
  console.log(props.title);
  console.log(props.className);
  return (
    <div
      className={cn(
        "flex flex-row items-start w-full justify-between space-y-14 bg-benefit-card-background h-[20rem] px-7 py-4 rounded-xl",
        props.isReversed ? "flex-row-reverse" : "flex-row",
        props.className
      )}
    >
      <div className="flex flex-col bg-red-900 w-[50%] items-start h-full justify-between text-ui-ui_dark_500 ">
        <h2 className="text-3xl text-left">{props.title}</h2>
        <p className="text-xl leading-snug text-left">{props.brief}</p>
      </div>

      <div className="w-[50%] h-full bg-red-200">
        <Image src={props.image!} alt="Product Alt" />
      </div>
    </div>
  );
};

export default BenefitsCards;
