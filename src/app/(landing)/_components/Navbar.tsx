"use client";
import Logo from "@/components/Logo";
import { sectionPaddingSize } from "@/lib/constants";
import { NavbarLinks } from "@/lib/navbarLinks";
import React from "react";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Props = {
  newUser?: null;
};

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header
      className={`fixed inset-0 z-10 bg-transparent bg-clip-padding 
    backdrop-filter backdrop-blur-xl bg-opacity-50 text-white border-gray-100 px-[10rem] h-[60px] py-2`}
    >
      <nav className="flex flex-row items-center justify-between w-full">
        <Logo link size={"small"} />

        <div className="flex flex-row items-center space-x-2">
          {NavbarLinks.map((navItem, index) => {
            const isActive = currentPath === navItem.href;
            return (
              <NavLink
                isActive={isActive}
                key={index}
                title={navItem.title}
                href={navItem.href}
              />
            );
          })}
        </div>
        <Button className="bg-ui-ui_blue_500 text-white hover:bg-ui-ui_blue_400">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
