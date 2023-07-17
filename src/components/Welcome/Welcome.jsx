import React, { useState, useEffect } from "react";
import Profilepic from "../../assets/HomePicture.jpg";
import QrCode from "../../assets/LINEQR.png";
import Typed from "react-typed";

import Logos from "./Logos";
const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 100);
    return () => {
      setIsVisible(false);
    };
  }, [isVisible]);

  return (
    <div
      className={`flex transform flex-col items-center justify-center py-32 transition-transform duration-1000 ease-in-out md:flex-row ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section className="select-none flex flex-col md:mr-48">
      
        <div>
          <h1 className="mb-1 text-5xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Hello,
          </h1>
          <h1 className="mb-6 ml-1 text-4xl font-bold text-white  lg:text-5xl xl:text-6xl">
            {"I'm Joshua"}
          </h1>
          <Typed
            className="text-l ml-1 font-bold text-cyan-100 md:text-[16px] lg:text-[20px] xl:text-2xl"
            strings={["Software Engineer", "Frontend Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <Logos className="hidden md:mt-40  md:flex" size={60} />
      </section>

      <section className="select-none flex justify-center">
        <img
          className="mt-8 h-[200px] rounded-full  sm:ml-[-32px] sm:h-[250px] sm:w-[280px] md:mt-0 md:h-[300px] md:w-[340px] lg:ml-0 lg:h-[350px] lg:w-[350px] xl:h-[400px] xl:w-[400px]"
          src={Profilepic}
          alt="My pic"
        />
      </section>
      <Logos className="mt-10 flex md:hidden" size={50} />
    </div>
  );
};

export default Welcome;
