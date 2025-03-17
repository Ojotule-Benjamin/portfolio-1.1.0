import React from "react";
import Portfolio from "./Portfolio";

function Works() {
  return (
    <div className="bg-black left-0 relative" id="projects">
      <a
        className="absolute z-0 right-8 md:right-20 -top-24 animate-spin cursor-pointer"
        href="https://drive.google.com/file/d/1-Wy3JhcwFVT1dNzUmpJIVeVkbKmerTmK/view?usp=sharing"
      >
        <img src="../../assets/img/resume.svg" alt="CV" className="cvLink" />
      </a>
      <div className="container mx-auto py-20 px-8 md:px-16 block">
        <h2
          className="font-bold w-72 text-white worksHeading"
          style={{ fontSize: "60px" }}
        >
          Selected Works
        </h2>

        <Portfolio />
      </div>
    </div>
  );
}

export default Works;
