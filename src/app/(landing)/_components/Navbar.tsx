import Logo from "@/components/Logo";
import { sectionPaddingSize } from "@/lib/constants";
import React from "react";

type Props = {
  newUser?: null;
};


const Navbar = () => {
  return (
    <header
      className={`sticky top-0 z-10 bg-white-400 rounded-md bg-clip-padding 
    backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 px-[8rem] h-[60px] py-2`}
    >
      <nav className="flex flex-row items-center justify-between bg-purple-700 w-full">
        <Logo link size={"small"} />
      </nav>
    </header>
  );
};

export default Navbar;
