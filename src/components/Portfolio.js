import React from "react";
//import ritzImage from "../asset/images/work-cta.svg";
//import beelsSvg from "../asset/images/beels.svg";

const works = [
  {
    id: 0,
    name: "Bizflex",
    link: "https://play.google.com/store/search?q=bizflex+africa&c=apps",
    img: "../../assets/img/bizflex.jpeg",
    alt: "bizflex placeholder",
    type: "Mobile Application",
  },
  {
    id: 1,
    name: "Aptfuel",
    link: "https://apps.apple.com/ng/app/apt-fuel/id6670311155",
    img: "../../assets/img/aptfuel.jpeg",
    alt: "Aptfuel placeholder",
    type: "Mobile Application",
  },
  {
    id: 1,
    name: "Beels",
    link: "https://play.google.com/store/apps/details?id=com.beels.app&pcampaignid=web_share",
    img: "../../assets/img/beels.png",
    alt: "Letbud placeholder",
    type: "Mobile Application",
  },
  {
    id: 0,
    name: "Letbud",
    link: "https://www.letbud.com/",
    img: "../../assets/img/Letbud-min.png",
    alt: "Letbud placeholder",
    type: "Web Application",
  },
  {
    id: 3,
    name: "Stratagem",
    link: "https://stratagemlp.com/",
    img: "../../assets/img/stratagem.png",
    alt: "Letbud placeholder",
    type: "Website",
  },
  {
    id: 5,
    name: "Ecocyntec",
    link: "https://ecocyntec.vercel.app/",
    img: "../../assets/img/ecocyntec.png",
    alt: "ecocyntec placeholder",
    type: "Website",
  },
  {
    id: 2,
    name: "Ritz Urban Luxury",
    link: "https://www.ritzurbanluxury.com/",
    img: "../../assets/img/ritzportfolio.png",
    alt: "ritz portfolio placeholder",
    type: "Website + Web Application",
  },

  {
    id: 4,
    name: "Ritz",
    link: "",
    img: "../../assets/img/ritzhub2.png",
    alt: "ritz placeholder",
    type: "Mobile Application",
  },
];

function Portfolio() {
  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-y-2 divide-white">
      <div className="hidden"></div>
      {works.map((item) => (
        <div key={item.id}>
          <div className="overflow-hidden ">
            <div className="flex justify-between my-16 md:my-6">
              <div className="flex flex-col space-y-3">
                <h3 className="text-white text-3xl font-bold">{item.name}</h3>
                <p className="text-gray-500 opacity-75 font-normal text-2xl">
                  {item.type}
                </p>
              </div>
              <a href={item.link}>
                <img
                  src="../../assets/img/work-cta.svg"
                  alt=""
                  className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
                />
              </a>
            </div>
            {/*  */}
            <a href={item.link}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      ))}
      {/* <div className="overflow-hidden">
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Ritz Urban Luxury</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website + Web Application
            </p>
          </div>
          <a href="https://www.ritzurbanluxury.com/">
            <img
              src="../../assets/img/work-cta.svg"
              // src={beelsSvg}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://www.ritzurbanluxury.com/">
          <img
            src="../../assets/img/Distinct.ai-min.png"
            alt="ritz urban luxury placeholder"
          />
        </a>
      </div>
      <div className="overflow-hidden">
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Distinct.ai</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website + Web Application
            </p>
          </div>
          <a href="https://distinct.ai/">
            <img
              src="../../assets/img/work-cta.svg"
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://distinct.ai/">
          <img
            src="../../assets/img/Distinct.ai-min.png"
            alt="Distinct placeholder"
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Letbud</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Web Application
            </p>
          </div>
          <a href="http://letbudapp.s3-website.eu-west-2.amazonaws.com/">
            <img
              src="../../assets/img/work-cta.svg"
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a
          href="http://letbudapp.s3-website.eu-west-2.amazonaws.com/"
          className="w-96 max-h-96"
        >
          <img src="../../assets/img/Letbud-min.png" alt="Letbud placeholder" />
        </a>
      </div> */}

      {/* <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">FeelBetr</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src="../../assets/img/work-cta.svg"
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio5} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Sam&#39;s Portfolio
            </h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src="../../assets/img/work-cta.svg"
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio6} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Squire</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website &#40;Coming Soon&#41;
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src="../../assets/img/work-cta.svg"
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio7} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">EatBetr</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src="../../assets/img/work-cta.svg"
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio8} alt="Work-1" />
        </a>
      </div> */}
    </div>
  );
}

export default Portfolio;
