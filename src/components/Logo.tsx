import Image from "next/image";
import React from "react";
import logoMarkDark from "@public/Logo_Mark_Svg--Dark.svg";

type Variants = "Default" | "Light";

type Props = {
  variants?: Variants;
  orientation: string;
};

const Logo = ({ variants, orientation = "vertical" }: Props) => {
  return (
    <div className="w-50 h-50 bg-dark">
      <Image src={logoMarkDark} alt="Logo" className="w-auto h-auto" />
    </div>
  );
};

export default Logo;
