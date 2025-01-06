import React from "react";

function About() {
  return (
    <div
      className="container mx-auto py-20 px-8 md:px-16 block lg:flex justify-between mb-10 overflow-hidden"
      id="about"
    >
      <div className="flex flex-col space-y-12 md:space-y-14 lg:space-y-20 mb-16 md:mb-0">
        <h2
          className="font-bold w-80 skillHeading"
          style={{ fontSize: "60px" }}
        >
          About me
        </h2>
        <div
          className="aboutImg mx-auto lg:mx-0 "
          style={{ width: "454px", height: "513px" }}
        >
          <img src="../../assets/img/ojotule.jpeg" alt="Me" />
        </div>
      </div>
      <div
        className="divide-y-2 divide-black space-y-12 about"
        style={{ width: "60%" }}
      >
        <h5 className="text-2xl font-medium md:mt-28 lg:mt-8">
          Developer, scholar, coder, dreamer... and the rest”
        </h5>
        <p className="font-normal text-xl leading-7 py-10">
          I&#39;m a seasoned frontend developer with over five years of
          experience in collaborating with creative and development teams on the
          execution of ideas and projects. I like to craft solid and scaleble
          frontend products with great user experiences.
          <br /> <br /> When I&#39;m not writing code or deploying applications,
          I&#39;m watching football &#40; or playing video games&#39; &#41;! I
          actually think football is the greatest sport man has invented.
          <br />
          <br />
          My post-tech dream is to retire to a quiet little Island somewhere
          sunny, spend my days gaming on the latest next-gen console. Also,
          Djing live on youtube or twitch. <br />
          <br />I live in a not so little corner of the world called Abuja.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default About;
