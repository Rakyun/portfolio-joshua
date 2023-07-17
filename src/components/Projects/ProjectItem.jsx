import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ProjectModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    return () => {
      setIsOpen(false);
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={props.close}
    >
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
      ></div>
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute flex w-[80%] flex-col items-center rounded-2xl bg-black pb-5  text-white shadow-xl sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[35%]">
          <img
            className={`mb-5 w-full rounded-t-2xl bg-gradient-to-b from-transparent  transition-opacity duration-500 to-white${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            src={props.picture}
            alt="Qr Code"
          />
          <div className="flex flex-col items-center p-5">
            <div className="flex">{props.logo.map((item) => item)}</div>
            <h1 className="mb-3 text-center text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
              {props.title}
            </h1>
            <p className="mb-3 text-center text-base md:text-lg">
              {props.desc}
            </p>
            <a
              href="https://github.com/Rakyun/ParkSpot_Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-2 rounded-lg bg-white p-2  font-bold text-black duration-150  hover:bg-gray-400 active:bg-gray-300">
                View Source Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = (props) => {
  return (
    <>
      {createPortal(
        <ProjectModal
          close={props.close}
          desc={props.desc}
          picture={props.picture}
          title={props.title}
          logo={props.logo}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ProjectItem;
