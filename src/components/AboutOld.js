import React from "react";

export default function About() {
  return (
    <section className="bg-gray-200 pb-40" id="about">
      <div className="hero_up container mx-auto flex px-10 py-10 flex-col items-center">
        <h1 className="h1-hero text-9xl font-light px-0 md:px-20 antialiased">
          Hi, <br /> I&apos;m <span className="text-red-500">Emeka</span> <br />
          <a className="font-extrabold buttonD hover:text-green-500">w</a>
          <a className="font-extrabold buttonD hover:text-green-500">e</a>
          <a className="font-extrabold buttonD hover:text-green-500">b</a>
          &nbsp;
          <a className="font-extrabold buttonD hover:text-green-500">d</a>
          <a className="font-extrabold buttonD hover:text-green-500">e</a>
          <a className="font-extrabold buttonD hover:text-green-500">v</a>
          <a className="font-extrabold buttonD hover:text-green-500">e</a>
          <a className="font-extrabold buttonD hover:text-green-500">l</a>
          <a className="font-extrabold buttonD hover:text-green-500">o</a>
          <a className="font-extrabold buttonD hover:text-green-500">p</a>
          <a className="font-extrabold buttonD hover:text-green-500">e</a>
          <a className="font-extrabold buttonD hover:text-green-500">r</a>
          {/* creative &amp; development <br /> teams on the execution <br /> of */}
          {/* <span className="text-red-500 font-medium"> ideas</span> &amp;
          <span className="text-red-500 font-medium"> projects.</span> */}
          <p className="text-4xl text-gray-600 font-normal leading-relaxed antialiased px-0 lg:px-4 subText">
            Frontend Developer / WordPress Pro
          </p>
        </h1>
      </div>

      <a href="https://calendly.com/emeka-ikele/discovery-meeting">
        <div className="round__btn bg-gray-800 mt-20 py-20 mx-auto max-w-xs h-auto hover:bg-red-500 transition ease-in-out duration-500 transform hover:rotate-45">
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto transform -rotate-12 stroke-current text-gray-50 hover:text-gray-800"
          >
            <path d="M56.0489 41.2039L26.6096 70.6432L19.3563 63.39L48.7957 33.9507L49.6492 33.0971L48.4421 33.0971L23.6536 33.0971L23.6003 22.8004L67.1992 22.8004L67.1992 66.3993L56.9025 66.3459L56.9025 41.5575L56.9025 40.3504L56.0489 41.2039Z" />
          </svg>
          <div className="btn__text flex-auto justify-center text-center text-gray-200 font-bold pt-6 transform -rotate-12">
            BOOK A FREE <br /> CONSULTATION
          </div>
        </div>
      </a>
    </section>
  );
}
