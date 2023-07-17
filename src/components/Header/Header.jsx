import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import { BiSolidBookAlt } from "react-icons/bi";
const Header = (props) => {
  const screenChange = (event) => {
    switch (event.target.textContent) {
      case "Home":
        return props.screenChanger("Welcome");
      case "About":
        return props.screenChanger("About");
      case "Skills":
        return props.screenChanger("Skills");
      case "Projects":
        return props.screenChanger("Projects");
    }
  };

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-slate-800 px-11 py-7 text-white shadow-2xl ">
      <h1 className=" ml-[-30px]  select-none text-3xl font-bold sm:ml-0">
        JD
      </h1>
      <div>
        <ul className="flex flex-wrap justify-around sm:flex-nowrap ">
          <li
            onClick={screenChange}
            className="flex cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:text-lg"
          >
            <AiFillHome size={20} className="mr-1" />
            Home
          </li>
          <li
            onClick={screenChange}
            className="flex cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:text-lg"
          >
            <HiInformationCircle size={20} className="mr-1" />
            About
          </li>
          <li
            onClick={screenChange}
            className="flex cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:text-lg"
          >
            <BiSolidBookAlt size={20} className="mr-1" />
            Skills
          </li>
          <li
            onClick={screenChange}
            className="flex cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:text-lg"
          >
            <AiFillProject size={20} className="mr-1" />
            Projects
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
