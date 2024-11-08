import { NavbarLinks } from "@/lib/navbarLinks";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  title: string;
  isActive?: boolean;
  isMobile?: boolean;
  icon?: LucideIcon;
  iconSize?: number;
  isMobileToggle?: () => void;
};

const NavLink = ({
  href,
  title,
  isActive,
  isMobile,
  icon: Icon,
  iconSize,
  isMobileToggle,
}: Props & NavbarLinks) => {
  return (
    <Link
      href={href}
      onClick={isMobileToggle}
      className={cn(
        `text-sm p-2 group hover:rounded-sm font-light flex items-center hover:bg-ui-ui_dark_600 transition-all }`,
        isActive &&
          twMerge(`bg-ui-ui_dark_600`, `text-ui-ui_light_100`, "rounded-sm")
      )}
    >
      <span className={cn(isMobile && `text-4xl`)}> {title}</span>
      {Icon && (
        <span
          className="inline-block transition-transform 
          duration-300 ease-in-out ml-2 group-hover:animate-bounce"
        >
          <Icon size={iconSize} />
        </span>
      )}
    </Link>
  );
};

export default NavLink;
