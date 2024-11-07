import { NavbarLinks } from "@/lib/navbarLinks";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  title: string;
};

const NavLink = ({ href, title, color }: Props & NavbarLinks) => {
  return (
    <Link href={href} className="text-sm">
      {title}
    </Link>
  );
};

export default NavLink;
