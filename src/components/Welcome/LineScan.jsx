import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import QrCode from "../../assets/LINEQR.png";

const LineModal = (props) => {
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
        className={`fixed inset-0 bg-black transition-all duration-500 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
      ></div>
      <img
        className={`absolute w-72 transition-all duration-500  ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        src={QrCode}
        alt="Qr Code"
      />
    </div>
  );
};

const LineScan = (props) => {
  return (
    <>
      {createPortal(
        <LineModal close={props.close} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default LineScan;
