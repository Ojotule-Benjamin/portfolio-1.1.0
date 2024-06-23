import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import React, { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <header
      className={
        navbar
          ? "sticky top-0 z-10 active overflow-hidden"
          : "bg-black sticky top-0 z-10 overflow-hidden"
      }
    >
      <div className="container mx-auto py-5 px-8 md:px-16 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-white text-lg">Ojotule B. Ajodo</h2>
        </div>
        <div className="hidden md:flex flex-wrap flex-row items-center text-white text-base font-medium space-x-8">
          <a href="#skills" rel="noreferrer">
            Skills &amp; Experience
          </a>
          <a href="#projects" rel="noreferrer">
            Work
          </a>
          <a href="#about" rel="noreferrer">
            About Me
          </a>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="block md:hidden relative">
          <MenuIcon
            className="h-6 w-6 text-white"
            onClick={() => setShowMenu(true)}
          />
        </div>
        {showMenu && (
          <div
            className={clsx(
              "fixed h-screen w-screen md:hidden bg-black backdrop-blur-sm bg-opacity-60 top-0 left-0 transition-all",
              showMenu && "translate-x-0"
            )}
          >
            <div className="bg-black h-full flex flex-col absolute space-y-3 right-0 top-0 py-56 px-8 gap-8 z-50">
              <XIcon
                className="h-8 w-8 text-white cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              />
              <div className="text-white text-base opacity-60 font-medium space-y-4 flex flex-col">
                <a href="#skills" rel="noreferrer">
                  Skills &amp; Experience
                </a>
                <a href="#projects" rel="noreferrer">
                  Work
                </a>
                <a href="#about" rel="noreferrer">
                  About Me
                </a>
                <a href="#contact" rel="noreferrer">
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
