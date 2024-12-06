import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  icon?: LucideIcon;
  title: string;
  iconSize?: number;
};

const LinkButton = ({ href, icon: Icon, title, iconSize }: Props) => {
  return (
    <Link
      href={href}
      className="hidden items-center justify-center relative gap-2 whitespace-nowrap rounded-md 
  text-sm font-medium ring-offset-background transition-colors overflow-hidden
  group  px-7 py-2.5 bg-blue-600 md:inline-flex"
    >
      <div
        className="absolute  inset-0 h-[200%] w-[200%] 
        rotate-45 translate-x-[-70%] transition-all 
        group-hover:scale-100 bg-white/50 group-hover:translate-x-[50%] z-20 duration-1000"
      />
      {title}
      {Icon && (
        <span
          className="inline-block transition-transform 
          duration-300 ease-in-out group-hover:animate-bounce"
        >
          <Icon size={iconSize || 20} />
        </span>
      )}
    </Link>
  );
};

export default LinkButton;
