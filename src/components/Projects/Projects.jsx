import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
const Projects = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="mb-20 flex w-full flex-col items-center rounded-3xl bg-slate-800 bg-opacity-30 p-10 shadow-lg transition-transform duration-300 lg:w-[40%]">
      <h1 className="mb-6 text-center text-xl font-bold text-white  md:text-2xl lg:text-3xl">
        {props.title}
      </h1>
      <div className="relative transition-all duration-300 sm:hover:scale-105 ">
        <img
          src={props.picture}
          alt="Your image"
          className="h-auto w-full rounded-xl"
        />
        <div
          className={`absolute inset-0 z-50 hidden items-center justify-center rounded-xl bg-black opacity-0 transition-all duration-300  hover:opacity-80 sm:flex`}
        >
          <button
            onClick={openModal}
            className="rounded-lg bg-white p-2 font-bold text-black transition-all duration-150  hover:bg-gray-400 active:bg-gray-200"
          >
            View Project
          </button>
        </div>
      </div>
      <button
        onClick={openModal}
        className="mt-5 rounded-lg bg-white p-2 font-bold text-black transition-all duration-150 hover:bg-gray-400  active:bg-gray-200 sm:hidden"
      >
        View Project
      </button>
      {isModalOpen && <ProjectItem close={closeModal} desc={props.desc} picture={props.picture} title={props.title} logo={props.logo}/>}
    </section>
  );
};

export default Projects;
