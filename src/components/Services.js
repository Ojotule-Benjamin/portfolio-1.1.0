import React, { useState } from "react";

export default function Services() {
  const [showServiceInfo, setShowServiceInfo] = useState(false);
  const [showServiceInfo2, setShowServiceInfo2] = useState(false);
  const [showServiceInfo3, setShowServiceInfo3] = useState(false);

  return (
    <section className="bg-red-500 py-20 md:py-36" id="services">
      <div className="container mx-auto flex px-10 py-10 items-center">
        <div className="max-w-5xl w-full mr-0 ml-auto float-right">
          <h5 className="list__label text-right text-xl font-semibold pb-2 border-b border-gray-800">
            WHAT I DO?
          </h5>
          <div className="services__list flex flex-col items-center	divide-y divide-gray-800">
            <div className="service_item w-full flex flex-col justify-center items-center">
              <div
                className={`service1 ${
                  !showServiceInfo
                    ? "show flex justify-between items-center w-full text-right py-3 cursor-pointer"
                    : "hide flex justify-between items-center w-full text-right py-3 cursor-pointer"
                }`}
                onClick={() => setShowServiceInfo(!showServiceInfo)}
              >
                <div className="service-icon">
                  <svg
                    width="97"
                    height="97"
                    viewBox="0 0 97 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.1092 35.9387L25.0514 24.7822L72.0449 24.7822L72.0449 71.7757L60.8884 71.7179L60.8884 45.005V43.7978L60.0349 44.6514L28.328 76.3582L20.4689 68.4991L52.1757 36.7923L53.0293 35.9387H51.8222L25.1092 35.9387Z"
                      stroke="#1E1E1E"
                    />
                  </svg>
                </div>
                <h2 className="service-title text-7xl">UX/UI Design</h2>
              </div>
              <div
                className={`service1 ${
                  showServiceInfo ? "show mt-5 pb-12" : "hidden"
                }`}
              >
                <p className="p-list text-xl w-11/12 ml-auto">
                  I&apos;m a self-taught UI/UX designer with experience in
                  creating wireframes, prototypes, low and high fidelity mockups
                  using tools such as Figma &amp; Canva to identify and solve
                  user problems while delivering aesthetically-pleasing,
                  end-to-end software products.
                </p>
              </div>
            </div>
            <div className="service_item w-full flex flex-col justify-center items-center">
              <div
                className={`service1 ${
                  !showServiceInfo2
                    ? "show flex justify-between items-center w-full text-right py-3 cursor-pointer"
                    : "hide flex justify-between items-center w-full text-right py-3 cursor-pointer"
                }`}
                onClick={() => setShowServiceInfo2(!showServiceInfo2)}
              >
                <div className="service-icon">
                  <svg
                    width="97"
                    height="97"
                    viewBox="0 0 97 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.1092 35.9387L25.0514 24.7822L72.0449 24.7822L72.0449 71.7757L60.8884 71.7179L60.8884 45.005V43.7978L60.0349 44.6514L28.328 76.3582L20.4689 68.4991L52.1757 36.7923L53.0293 35.9387H51.8222L25.1092 35.9387Z"
                      stroke="#1E1E1E"
                    />
                  </svg>
                </div>
                <h2 className="service-title text-7xl">Full-stack</h2>
              </div>
              <div
                className={`service1 ${
                  showServiceInfo2 ? "show mt-5 pb-12" : "hidden"
                }`}
              >
                <p className="p-list text-xl w-11/12 ml-auto">
                  I am proficient in HTML, CSS and JavaScript as well as their
                  corresponding frameworks such as Bootstrap and Tailwind for
                  CSS; ReactJS, NextJS and React Native for JavaScript which I
                  use to create functioncal web interfaces. I also employ
                  version control tools like Git to manage workflows.
                </p>
              </div>
            </div>
            <div className="service_item w-full flex flex-col justify-center items-center">
              <div
                className={`service1 ${
                  !showServiceInfo3
                    ? "show flex justify-between items-center w-full text-right py-3 cursor-pointer"
                    : "hide flex justify-between items-center w-full text-right py-3 cursor-pointer"
                }`}
                onClick={() => setShowServiceInfo3(!showServiceInfo3)}
              >
                <div className="service-icon">
                  <svg
                    width="97"
                    height="97"
                    viewBox="0 0 97 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.1092 35.9387L25.0514 24.7822L72.0449 24.7822L72.0449 71.7757L60.8884 71.7179L60.8884 45.005V43.7978L60.0349 44.6514L28.328 76.3582L20.4689 68.4991L52.1757 36.7923L53.0293 35.9387H51.8222L25.1092 35.9387Z"
                      stroke="#1E1E1E"
                    />
                  </svg>
                </div>
                <h2 className="service-title text-7xl">No Code</h2>
              </div>
              <div
                className={`service1 ${
                  showServiceInfo3 ? "show mt-5 pb-12" : "hidden"
                }`}
              >
                <p className="p-list text-xl w-11/12 ml-auto">
                  Using no code/low code platforms such as WordPress, Wix, and
                  most recently Bubble, I&apos;m able to provide 100%
                  customizable and scalable sites allowing for very precise SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
