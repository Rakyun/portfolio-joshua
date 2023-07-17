import React, { useState, useEffect } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { BiSolidContact } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { BsFillBuildingFill } from "react-icons/bs";
import Certificate from "./Certificate";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScan, setShowScan] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    return () => {
      setIsVisible(false);
    };
  }, [isVisible]);

  const closeHandler = () => {
    setShowScan(false);
  };

  const openHandler = () => {
    setShowScan(true);
  };

  return (
    <div
      className={`flex  flex-col items-center  justify-center   transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h1 className="select-none text-2xl font-bold text-white sm:text-3xl md:text-4xl   lg:text-5xl">
        About Me
      </h1>
      <div className="mt-10 flex w-[80%] flex-col flex-wrap justify-between rounded-xl bg-inherit text-white md:flex-row">
        <section className="mb-9 flex w-full flex-col items-center rounded-3xl bg-slate-800 bg-opacity-50 p-10 shadow-lg transition-transform duration-300 hover:scale-105 md:w-[40%]">
          <HiMiniUser size={40} className="mb-2" />
          <h2 className="mb-4 select-none text-center text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl  ">
            Biography
          </h2>
          <p className="text-center  text-sm text-white md:text-base lg:text-lg ">
            I am Joshua Daniel Sevilla, a Software Engineering graduate who
            loves React and web development and responsive design, with a focus
            on building user-friendly interfaces.
          </p>
          <ul className="mt-5 list-disc ">
            <li className="text-xs  font-semibold text-white md:text-sm lg:text-base">
              Nationality:
              <span className=" ml-2 font-normal">Filipino</span>
            </li>
            <li className="text-xs  font-semibold text-white md:text-sm lg:text-base">
              Years in Thailand:
              <span className=" ml-2 font-normal">16 years</span>
            </li>
          </ul>
        </section>

        <section className="mb-9 flex w-full flex-col items-center rounded-3xl bg-slate-800  bg-opacity-50 p-10 shadow-lg transition-transform duration-300 hover:scale-105 md:w-[40%]">
          <FaUniversity size={40} className="mb-2" />
          <h2 className="mb-4 select-none  text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl  ">
            Education
          </h2>
          <p className="text-center text-sm font-semibold text-white md:text-base lg:text-lg">
            {
              "King Mongkut's Institute of Technology Ladkrabang, Bangkok Thailand"
            }
          </p>
          <p className="mb-3 text-center text-sm font-medium text-white  lg:text-lg">
            {"(August 2019 – June 2023)"}
          </p>
          <ul className="list-disc">
            <li className=" mb-2  text-xs text-white md:text-sm lg:text-base">
              Bachelor of Engineering{" "}
              <span className="font-semibold">(International Program)</span>
            </li>
            <li className=" mb-2  text-xs text-white md:text-sm lg:text-base">
              Majored in Software Engineering{" "}
              <span className="font-semibold">(Enterprise)</span>
            </li>
          </ul>
        </section>

        <section className="mb-9 flex w-full flex-col items-center rounded-3xl bg-slate-800 bg-opacity-50 p-10 shadow-lg transition-transform duration-300 hover:scale-105 md:w-[40%]">
          <BsFillBuildingFill size={40} className="mb-2" />
          <h2 className="mb-4 select-none text-center text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl  ">
            Experience
          </h2>
          <p className="text-center text-sm font-semibold text-white md:text-base lg:text-lg">
            {"Western Digital Storage Technologies (Thailand) Ltd."}
          </p>
          <p className="mb-5 text-center text-sm font-semibold text-white  lg:text-lg">
            {"(May 2022 – August 2022)"}
          </p>
          <p className="mb-3 text-center text-sm font-medium text-white md:text-base lg:text-lg">
            Internship
          </p>
          <ul className="list-disc">
            <li className=" mb-2  text-sm text-white md:text-base lg:text-lg">
              Frontend Developer{" "}
              <span className="font-semibold">(React.js)</span>
            </li>
          </ul>
          <button
            onClick={openHandler}
            className="mt-2 rounded-lg bg-white px-3 font-bold text-black duration-150  hover:bg-gray-400 active:bg-gray-300"
          >
            Show Certificate
          </button>
          {showScan && <Certificate close={closeHandler} />}
        </section>

        <section className="mb-9 flex w-full flex-col items-center rounded-3xl bg-slate-800 bg-opacity-50 p-10 shadow-lg transition-transform duration-300 hover:scale-105 md:w-[40%]">
          <BiSolidContact size={40} className="mb-2" />
          <h2 className="mb-4 text-center text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl  ">
            Contact Information
          </h2>
          <p className="mb-2 text-center text-sm text-white md:text-base lg:text-lg">
            144/14 Ban Fah Lagoon Rangsit-Nakhon Nayok Prachathipat Thanyaburi
            12130 Thailand
          </p>
          <p className="mb-2 text-sm text-white md:text-base lg:text-lg">
            (+66) 84-252-5895
          </p>
          <p className="mb-2 text-sm text-white md:text-base lg:text-lg ">
            kiwipower125@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
