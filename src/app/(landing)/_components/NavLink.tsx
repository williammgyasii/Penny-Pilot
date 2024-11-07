import { NavbarLinks } from "@/lib/navbarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  title: string;
  isActive?: boolean;
};

const NavLink = ({ href, title, isActive }: Props & NavbarLinks) => {
  return (
    <Link
      href={href}
      className={`text-sm p-2 hover:rounded-sm ${
        isActive &&
        cn(["bg-ui-ui_dark_500", "hover:bg-ui-ui_dark_400", "rounded-sm"])
      } font-light hover:bg-ui-ui_dark_500 transition-colors`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
