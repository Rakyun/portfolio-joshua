import React, { useState } from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import { BiSolidBookAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-slate-800 px-11 py-7 text-white shadow-2xl ">
      <section
        className={`fixed sm:hidden bottom-0 left-0 top-[81px] w-[160px] bg-slate-800 bg-opacity-95 pt-5 text-white shadow-lg duration-500  ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col ">
          <li
            onClick={() => {
              props.screenChanger("Welcome");
            }}
            className="m-1 my-4 flex cursor-pointer select-none items-center px-4 text-xl font-bold duration-150 hover:text-gray-400 active:text-gray-200 "
          >
            <AiFillHome size={20} className="mr-1" />
            Home
          </li>
          <li
            onClick={() => {
              props.screenChanger("About");
            }}
            className="m-1 my-4  flex cursor-pointer select-none items-center px-4 text-xl font-bold duration-150 hover:text-gray-400 active:text-gray-200 "
          >
            <HiInformationCircle size={20} className="mr-1" />
            About
          </li>
          <li
            onClick={() => {
              props.screenChanger("Skills");
            }}
            className="m-1 my-4 flex cursor-pointer select-none items-center px-4 text-xl font-bold duration-150 hover:text-gray-400 active:text-gray-200 "
          >
            <BiSolidBookAlt size={20} className="mr-1" />
            Skills
          </li>
          <li
            onClick={() => {
              props.screenChanger("Projects");
            }}
            className="m-1 my-4 flex cursor-pointer select-none items-center px-4 text-xl font-bold duration-150 hover:text-gray-400 active:text-gray-200 "
          >
            <AiFillProject size={20} className="mr-1" />
            Projects
          </li>
        </ul>
      </section>

      <h1
        onClick={() => {
          props.screenChanger("Welcome");
        }}
        className="ml-[-30px] hidden cursor-pointer select-none text-3xl font-bold transition-all duration-150  hover:text-gray-400 active:text-gray-200 sm:ml-0 sm:inline"
      >
        JD
      </h1>
     
      <div
        onClick={toggleDrawer}
        className="ml-[-30px] inline cursor-pointer select-none text-3xl font-bold transition-all duration-150  hover:text-gray-400 active:text-gray-200 sm:ml-0 sm:hidden"
      >
        <FaBars size={25} />
      </div>
      <h1
        onClick={() => {
          props.screenChanger("Welcome");
        }}
        className="self-center cursor-pointer select-none text-3xl font-bold transition-all duration-150  hover:text-gray-400 active:text-gray-200 sm:hidden"
      >
        JD
      </h1>
      <div>
        <ul className="flex flex-wrap justify-around sm:flex-nowrap ">
          <li
            onClick={() => {
              props.screenChanger("About");
            }}
            className="hidden cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:flex sm:text-xl"
          >
            <HiInformationCircle size={20} className="mr-1" />
            About
          </li>
          <li
            onClick={() => {
              props.screenChanger("Skills");
            }}
            className="hidden cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:flex sm:text-xl"
          >
            <BiSolidBookAlt size={20} className="mr-1" />
            Skills
          </li>
          <li
            onClick={() => {
              props.screenChanger("Projects");
            }}
            className="hidden cursor-pointer select-none items-center px-4 text-base font-bold duration-150 hover:text-gray-400 active:text-gray-200 sm:flex sm:text-xl"
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
