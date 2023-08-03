import React, { useEffect, useState } from "react";
import {
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoCss3,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoGithub,
} from "react-icons/bi";
import { SiCssmodules } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { BsFillGearFill } from "react-icons/bs";
import { SiAxios } from "react-icons/si";

import Item from "./Item";
import Language from "./Language";

const Skills = () => {
  const devSkills = [
    { logo: <BiLogoHtml5 size={70} />, name: "HTML", id: Math.random() },
    {
      logo: <BiLogoJavascript size={70} />,
      name: "JavaScript",
      id: Math.random(),
    },
    { logo: <BiLogoReact size={70} />, name: "React.js", id: Math.random() },
    {
      logo: <BiLogoReact size={70} />,
      name: "React Native",
      id: Math.random(),
    },

    { logo: <BiLogoCss3 size={70} />, name: "CSS", id: Math.random() },
    {
      logo: <SiCssmodules size={70} />,
      name: "CSS Modules",
      id: Math.random(),
    },
    { logo: <BiLogoSass size={70} />, name: "SASS", id: Math.random() },
    {
      logo: <BiLogoTailwindCss size={70} />,
      name: "Tailwind CSS",
      id: Math.random(),
    },

    {
      logo: <DiResponsive size={70} />,
      name: "Responsive Web Design",
      id: Math.random(),
    },
    {
      logo: <BsFillGearFill size={70} />,
      name: "Restful API",
      id: Math.random(),
    },
    { logo: <SiAxios size={70} />, name: "Axios", id: Math.random() },
    { logo: <BiLogoGithub size={70} />, name: "Github", id: Math.random() },
  ];

  const language = [
    {
      logo: "EN",
      name: "English",
      fluency: "(Fluent)",
      id: Math.random(),
    },
    {
      logo: "TH",
      name: "Thai",
      fluency: "(Professional)",
      id: Math.random(),
    },
    {
      logo: "PH",
      name: "Filipino",
      fluency: "(Native)",
      id: Math.random(),
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    return () => {
      setIsVisible(false);
    };
  }, [isVisible]);

  return (
    <div
      className={`flex select-none  flex-col items-center  justify-center   transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h1 className="select-none text-2xl font-bold text-white sm:text-3xl md:text-4xl  lg:text-5xl">
        Skills
      </h1>
      <div className="mt-10 flex w-[80%] flex-col  justify-between rounded-xl bg-inherit text-white ">
        <section className="mb-10 flex w-full flex-col items-center justify-center rounded-3xl bg-slate-800 bg-opacity-30 p-10 shadow-xl ">
          <h1 className="mb-4 text-center text-xl font-bold text-white  md:text-2xl lg:text-3xl ">
            Development Skills
          </h1>
          <div className="flex flex-wrap items-center justify-center ">
            {devSkills.map((item) => (
              <Item logo={item.logo} name={item.name} key={item.id} />
            ))}
          </div>
        </section>

        <section className="mb-10 flex w-full flex-col items-center justify-center rounded-3xl bg-slate-800 bg-opacity-30 p-10 shadow-xl  ">
          <h1 className="mb-4 text-center text-xl font-bold text-white  md:text-2xl lg:text-3xl">
            Languages
          </h1>
          <div className="flex flex-wrap items-center justify-center">
            {language.map((item) => (
              <Language
                logo={item.logo}
                name={item.name}
                fluency={item.fluency}
                key={item.id}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
