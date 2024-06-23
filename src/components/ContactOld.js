import React from "react";
import { LightningBoltIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section className="bg-gray-200 py-20 md:py-36">
      <div className="hero_up container mx-auto flex px-10 py-10 flex-col items-center">
        <h1 className="h1-hero text-8xl font-light px-20 antialiased">
          You got a cool project on mind? Let’s collaborate and create a
          powerful
          <span className="text-red-500 font-medium">
            {" "}
            Product &amp; Brand.
          </span>
        </h1>
      </div>
      <div className="sub__brief w-full max-w-2xl mx-auto">
        <p className="sub_text text-gray-900 text-xl inline-flex">
          <span className="text-green-400 inline-flex pr-1 font-semibold ">
            <LightningBoltIcon className="w-5 h-5 mr-1 mt-1" />
            Available
          </span>
          for freelance work - especially ambitious or large projects.
        </p>

        <div className="contact_circles mt-8 w-full py-8 px-auto inline-flex items-center justify-end">
          <a href="mailto:benjamin.ojotule.ajodo@gmail.com">
            <div className="small-circle bg-gray-50 mt-20 py-20 px-16 mx-auto max-w-xs h-auto hover:bg-red-500 transition ease-in-out duration-500 transform hover:rotate-45">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto transform -rotate-90 stroke-current text-gray-50 hover:text-gray-800 flex justify-center items-center"
              >
                <path
                  d="M40.988 20.8672L9.28116 52.5741L1.42204 44.7149L33.1289 13.0081L33.9824 12.1545H32.7753L6.06235 12.1546L6.00455 0.998065L52.998 0.998054L52.998 47.9916L41.8415 47.9337L41.8416 21.2208V20.0137L40.988 20.8672Z"
                  stroke="#1E1E1E"
                />
              </svg>
              <div className="btn__text flex-auto justify-center text-center text-gray-900 font-bold pt-6 transform -rotate-12">
                DROP AN EMAIL
              </div>
            </div>
          </a>
          <a href="https://calendly.com/emeka-ikele/discovery-meeting">
            <div className="big-circle bg-gray-800 mt-20 py-20 px-24 ml-10 max-w-xs h-auto hover:bg-red-500 transition ease-in-out duration-500 transform hover:rotate-45">
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
        </div>
      </div>
    </section>
  );
}
