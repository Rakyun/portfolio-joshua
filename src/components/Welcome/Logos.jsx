import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { RiLineLine } from "react-icons/ri";
import LineScan from "./LineScan";
const Logos = (props) => {
  const [showScan, setShowScan] = useState(false);
  
  const closeHandler = () => {
    setShowScan(false)
  }

  const openHandler = () => {
    setShowScan(true)
  }

  return (
    <div>
      <ul className={props.className}>
        <li className="mr-10 transition hover:text-gray-400 active:text-gray-300 duration-150">
          <a
            href="https://www.linkedin.com/in/rakyun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={props.size} />
          </a>
        </li>
        <li className="mr-10 hover:text-gray-400 active:text-gray-300 duration-150">
          <a
            href="https://github.com/Rakyun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={props.size} />
          </a>
        </li>
        <li className="hover:text-gray-400 active:text-gray-300 duration-150">
          <button onClick={openHandler}>
            <RiLineLine size={props.size} />
          </button>
        </li>
      </ul>
      {showScan && <LineScan close={closeHandler}/>}
    </div>
  );
};

export default Logos;
