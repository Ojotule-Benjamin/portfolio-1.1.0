import React from "react";
import { logoData } from "../logoData";
// import VisualDesign from "./assets/visual-design.png";
// import JavaScript from "../../assets/img/javascript.webp";

const jobHistory = [
  {
    id: 0,
    duration: "August 2024 - Present",
    role: "Lead Mobile Application Developer",
    company: "Fasta Moni",
  },
  {
    id: 1,
    duration: "Feb. 2024 - July 2024",
    role: "Mobile Developer",
    company: "Beels",
  },
  {
    id: 2,
    duration: "May 2023 - Dec. 2023",
    role: "Full-Stack Developer",
    company: "Letbud",
  },
  {
    id: 3,
    duration: "April 2022 - Jan. 2024",
    role: "Full-Stack Developer",
    company: "Regenate",
  },
];

function Skills() {
  return (
    <div
      className="container mx-auto py-20 px-8 md:px-16 block lg:flex justify-between lg:items-center relative"
      id="skills"
    >
      <div className="text-gray-800 flex flex-col space-y-24 lg:space-y-52 mb-10 md:mb-0">
        <h2
          className="font-bold w-80 skillHeading"
          style={{ fontSize: "60px" }}
        >
          Skills &amp; Experience
        </h2>
        <div className="pb-8 md:pb-12 lg:pb-16 grid grid-cols-3 md:grid-cols-5 gap-5">
          {logoData.map((item) => (
            <div className="flex flex-col space-y-2" key={item.id}>
              <img
                src={item.logo}
                alt={item.alt}
                className="w-12 h-12 lg:w-auto lg:h-14 mx-auto transition-transform transform hover:-rotate-12"
              />
              <p className="text-base font-medium text-center mx-auto">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="divide-y-2 divide-black space-y-5 w-full experienceBlock">
        <h5 className="text-base font-medium uppercase">Experience</h5>
        {jobHistory.map((item, index) => {
          return (
            <div className="flex justify-between w-full py-12" key={index}>
              <div className="w-2/6">
                <h5 className="text-base font-medium">{item.duration}</h5>
              </div>
              <div className="w-4/6 flex flex-col justify-start space-y-5">
                <h3 className="text-3xl font-medium">{item.role}</h3>
                <h5 className="text-base font-medium text-gray-500">
                  {item.company}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
