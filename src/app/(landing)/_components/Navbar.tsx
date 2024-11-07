import Logo from "@/components/Logo";
import { sectionPaddingSize } from "@/lib/constants";
import { NavbarLinks } from "@/lib/navbarLinks";
import React from "react";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";

type Props = {
  newUser?: null;
};

const Navbar = () => {
  return (
    <header
      className={`sticky top-0 z-10 bg-white-400 rounded-md bg-clip-padding 
    backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 px-[5rem] h-[60px] py-2`}
    >
      <nav className="flex flex-row items-center justify-between w-full">
        <Logo link size={"small"} />

        <div className="flex flex-row items-center space-x-4">
          {NavbarLinks.map((navItem, index) => {
            return (
              <NavLink key={index} title={navItem.title} href={navItem.href} />
            );
          })}
        </div>
        <Button>Get Started</Button>
      </nav>
    </header>
  );
};

export default Navbar;
