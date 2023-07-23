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
    <section className="lg:mx-10 mb-20 flex w-[430px] sm:w-[500px] md:w-[500px] flex-col items-center rounded-3xl bg-slate-800 bg-opacity-30 p-10 shadow-lg transition-transform duration-300 lg:w-[600px] ">
      <h1 className="mb-6 text-center text-xl font-bold text-white  md:text-2xl lg:text-3xl">
        {props.title}
      </h1>
      <div className="relative transition-all duration-300 hover:scale-105 ">
        <img
          src={props.picture}
          alt="Your image"
          className="h-[250px] sm:h-[400px] w-full rounded-xl"
        />
        <div
          className={`absolute inset-0 z-50 flex items-center justify-center rounded-xl bg-black opacity-0 transition-all duration-300  hover:opacity-80 `}
        >
          <button
            onClick={openModal}
            className="rounded-lg bg-white p-2 font-bold text-black transition-all duration-150  hover:bg-gray-400 active:bg-gray-200"
          >
            View Project
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ProjectItem
          close={closeModal}
          desc={props.desc}
          picture={props.picture}
          title={props.title}
          logo={props.logo}
          link={props.link}
        />
      )}
    </section>
  );
};

export default Projects;
