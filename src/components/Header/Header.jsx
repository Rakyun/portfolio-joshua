import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import { BiSolidBookAlt } from "react-icons/bi";
import {FaBars} from "react-icons/fa"
const Header = (props) => {
  const screenChange = (event) => {
    switch (event.target.textContent) {
      case "JD":
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
      <h1 onClick={screenChange} className="hidden sm:inline ml-[-30px] transition-all cursor-pointer duration-150 hover:text-gray-400 active:text-gray-200  select-none text-3xl font-bold sm:ml-0">
        JD
      </h1>
      <div onClick={screenChange} className="inline sm:hidden ml-[-30px] transition-all cursor-pointer duration-150 hover:text-gray-400 active:text-gray-200  select-none text-3xl font-bold sm:ml-0">
        <FaBars size={25}/>
      </div>
      <div>
        <ul className="flex flex-wrap justify-around sm:flex-nowrap ">
          <li
            onClick={screenChange}
            className="hidden sm:flex cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:text-lg"
          >
            <HiInformationCircle size={20} className="mr-1" />
            About
          </li>
          <li
            onClick={screenChange}
            className="hidden sm:flex cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:text-lg"
          >
            <BiSolidBookAlt size={20} className="mr-1" />
            Skills
          </li>
          <li
            onClick={screenChange}
            className="hidden sm:flex cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:text-lg"
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
