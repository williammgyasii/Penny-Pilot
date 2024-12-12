import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightFromLine, LucideIcon } from "lucide-react";
import React from "react";

interface FeaturesCardProps {
  children?: React.ReactNode;
  className?: string;
  topIcon?: LucideIcon;
  iconSize?: number;
  title: string;
  subtitle: string;
  theme?: "light" | "dark";
  animation?: "bounce" | "pulse" | "none";
  isReversed?: boolean;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  children,
  className,
  topIcon: Icon,
  subtitle,
  iconSize = 20,
  title,
  theme = "light",
  animation = "none",
}) => {
  const iconClasses = cn(
    "w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-2xl shadow-blue-900",
    "transition-transform duration-300 ease-in-out",
    {
      "hover:animate-bounce": animation === "bounce",
      "hover:animate-pulse": animation === "pulse",
    }
  );

  return (
    <div
      className={cn(
        "h-full w-full  md:w-[90%]",
        "rounded-lg overflow-hidden px-4",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-8 h-full">
        <div
          className={cn(
            "p-4 flex flex-col items-start space-y-4",
            theme === "light"
              ? "bg-transparent text-black"
              : "bg-gray-100 text-gray-900",
            "md:col-span-5"
          )}
        >
          {Icon && (
            <div className={iconClasses}>
              <Icon
                color={theme === "light" ? "blue" : "purple"}
                size={iconSize}
              />
            </div>
          )}
          <h2 className="text-5xl w-[80%] font-normal leading-[3rem] tracking-tighter text-ui-ui_dark_800">
            {title}
          </h2>
          <p className="text-md w-[80%] text-ui-ui_dark_200 ">{subtitle}</p>
          <Button variant={"outline"}>
            Learn More
            <ArrowRightFromLine />
          </Button>
        </div>
        <div
          className={cn(
            "p-4",
            "md:col-span-3",
            theme === "light" ? "bg-gray-100" : "bg-purple-900"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
