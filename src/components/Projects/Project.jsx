import React, { useState, useEffect } from "react";
import Project1 from "../../assets/ParkSpot.png";
import Project2 from "../../assets/Expense.png";
import Projects from "./Projects";
import { BiLogoReact } from "react-icons/bi";
const Project = () => {
  const projectitems = [
    {
      title: "ParkSpot",
      picture: Project1,
      logo: [<BiLogoReact size={30} key={2} />],
      desc: "A Mobile application, that helps King Mongkut’s Institute of Technology Ladkrabang (KMITL) students to find parking slots inspecific parking areas / spots, to help find parking slots inside the campus quicker and easier. Our main users in our application are KMITL students. The students can check the number of car parked in each slots in specific",
      link: "https://github.com/Rakyun/ParkSpot_Project",
    },
    {
      title: "Expense List",
      picture: Project2,
      logo: [<BiLogoReact size={30} key={2} />],
      desc: "Expense List is a React project that allows users to efficiently manage their expenses. With a user-friendly interface, it enables them to add new expenses with details such as amount, description, and date. The project also incorporates a handy filtering feature, enabling users to sort and view expenses based on the chosen year. ",
      link: "https://rakyun.github.io/expense-list",
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
      <div className="xl: mt-16 flex w-[80%] flex-col items-center justify-center rounded-xl text-white xl:flex-row xl:flex-wrap ">
        {projectitems.map((items, index) => (
          <Projects
            key={index}
            title={items.title}
            desc={items.desc}
            logo={items.logo}
            picture={items.picture}
            link={items.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
