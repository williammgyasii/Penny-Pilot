"use client";
import Logo from "@/components/Logo";
import { NavbarLinks } from "@/lib/navbarLinks";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, ArrowRightCircle, Menu, X } from "lucide-react";
import LinkButton from "@/components/LinkButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <header
      className={`fixed inset-0 z-50 bg-transparent bg-clip-padding 
      backdrop-filter backdrop-blur-xl bg-opacity-50 text-white border-gray-100 
      h-[60px]`}
    >
      <nav className="flex flex-row items-center justify-between w-full h-full px-4 md:px-20">
        <Logo link size="small" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center space-x-2">
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

        {/* Desktop Login Button */}
        <LinkButton icon={ArrowRightCircle} href={"/dashboard/overview"} title="Login" />

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-white z-50"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Fullscreen Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden min-h-screen  overflow-auto backdrop-filter backdrop-blur-lg bg-hero-background bg-opacity-95
  `}
        >
          {/* Content container */}
          <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
            {/* Navigation Links */}
            <div className="flex w-full  flex-col items-center space-y-5 text-6xl">
              {NavbarLinks.map((navItem, index) => {
                const isActive = currentPath === navItem.href;
                return (
                  <NavLink
                    isActive={isActive}
                    key={index}
                    isMobile={isMobileMenuOpen}
                    isMobileToggle={toggleMobileMenu}
                    title={navItem.title}
                    href={navItem.href}
                    icon={ArrowRight}
                    // className="text-2xl font-medium transition-colors hover:text-ui-ui_blue_500"
                  />
                );
              })}

              {/* Mobile Login Button */}
              <div className="w-full space-y-3">
                <Button
                  className="w-full bg-ui-ui_blue_500"
                  onClick={() => {
                    router.push("/dashboard");
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = "unset";
                  }}
                >
                  <span>Login</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full bg-green-900"
                  onClick={() => {
                    router.push("/register");
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = "unset";
                  }}
                >
                  <span>Join</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
