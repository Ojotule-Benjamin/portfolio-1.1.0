import React from "react";

export default function Footer() {
  const today = new Date();
  const date = today.getFullYear();
  return (
    <div className={"bg-gray-200 top-0 z-10"}>
      <div className="footer-links container mx-auto flex flex-wrap py-5 px-16 flex-col md:flex-row items-center justify-between">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className="ml-3 text-lg font-semibold"
            id="footer-name"
          >
            © {date} Emeka Ikele
          </a>
        </div>
        <div className="footer_lnk">
          <nav
            className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-lg justify-center"
            id="nav_links"
          >
            <a
              href="https://github.com/emekasage"
              className="mr-5 hover:text-red-500"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/emeka-ikele-b247461b4/"
              className="mr-5 hover:text-red-500"
            >
              Linkedln
            </a>
            <a
              href="mailto:emeka.ikelee@gmail.com"
              className="footer-link mr-5 hover:text-red-500"
            >
              Email
            </a>
            <a
              href="https://www.twine.net/emekasage"
              className="twine-link footer-link mr-5 hover:text-red-500"
            >
              Twine
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
