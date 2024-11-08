import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import fullLogoDark from "@public/Full_Logo--Dark.png";

type LogoSize = "small" | "medium" | "large";
type LogoOrientation = "vertical" | "horizontal";

interface LogoProps {
  size?: LogoSize;
  orientation?: LogoOrientation;
  link?: boolean;
}

const sizeClasses: Record<LogoSize, string> = {
  small: "w-[80px]",
  medium: "w-38",
  large: "w-42",
};

const orientationClasses: Record<LogoOrientation, string> = {
  vertical: "flex-col",
  horizontal: "flex-row",
};

const Logo: React.FC<LogoProps> = ({
  size = "small",
  orientation = "vertical",
  link = true,
}) => {
  const classNames = useMemo(() => {
    return `flex items-center  justify-center ${sizeClasses[size]} ${orientationClasses[orientation]} h-auto`;
  }, [size, orientation]);

  const logoImage = (
    <Image
      src={fullLogoDark}
      alt="Penny Pilot Logo"
      className={classNames}
      width={500}
      height={500}
      priority
    />
  );

  if (link) {
    return (
      <Link className="z-50" href="/" aria-label="Go to homepage">
        {logoImage}
      </Link>
    );
  }

  return logoImage;
};

export default React.memo(Logo);
