import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  children?: Readonly<React.ReactNode>;
  className?: string;
  topIcon?: LucideIcon;
  iconSize?: number;
  title: string;
};

const FeaturesCard = ({
  children,
  className,
  topIcon: Icon,
  iconSize,
  title,
}: Props) => {
  return (
    <div className={cn(className, "h-[25rem] w-[80%]")}>
      <div className="p-2 flex flex-col items-start justify-between h-full w-full bg-purple-900">
        {Icon && (
          <div
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-2xl shadow-blue-800  transition-transform 
          duration-300 ease-in-out hover:animate-bounce"
          >
            <Icon color="blue" size={iconSize || 20} />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default FeaturesCard;
