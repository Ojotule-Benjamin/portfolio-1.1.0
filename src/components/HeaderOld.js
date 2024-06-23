import React, { useState } from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

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
          ? "bg-gray-200 lg:sticky top-0 z-10 active"
          : "bg-gray-200 lg:sticky top-0 z-10"
      }
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-lg font-semibold" id="my-name">
            emeka.
          </a>
        </a>
        <nav
          className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"
          id="nav_links"
        >
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#services" className="mr-5 hover:text-white">
            Services
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
        </nav>
        <a
          href="https://calendly.com/emeka-ikele/discovery-meeting"
          className="inline-flex items-center uppercase underline border-0 py-1 px-3 focus:outline-none font-semibold rounded text-base mt-4 md:mt-0"
        >
          Book a free consultation
          <ArrowNarrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
