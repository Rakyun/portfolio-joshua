import React, { useState, useEffect } from "react";
import Project1 from "../../assets/ParkSpot.png";
import Projects from "./Projects";
import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
const Project = () => {
  const projectitems = [
    {
      title: "ParkSpot",
      picture: Project1,
      logo: [
        <BiLogoTailwindCss size={30} key={1} />,
        <BiLogoReact size={30} key={2} />,
      ],
      desc: "A Mobile application, that helps King Mongkut’s Institute of Technology Ladkrabang (KMITL) students to find parking slots inspecific parking areas / spots, to help find parking slots inside the campus quicker and easier. Our main users in our application are KMITL students. The students can check the number of car parked in each slots in specific",
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
        Projects
      </h1>
      <div className="mt-10 flex w-[80%] flex-col flex-wrap justify-between rounded-xl p-10 text-white md:flex-row md:justify-between">
       {projectitems.map((items,index) => <Projects key={index} title={items.title} desc={items.desc} logo={items.logo} picture={items.picture} />)}
      </div>
    </div>
  );
};

export default Project;
