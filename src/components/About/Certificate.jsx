import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import WDCertificate from "../../assets/WDCertificate.jpg";

const CertificateModal = (props) => {
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
        className={`absolute w-[90%] md:w-[50%] rounded-xl transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        src={WDCertificate}
        alt="Qr Code"
      />
    </div>
  );
};

const Certificate = (props) => {
  return (
    <>
      {createPortal(
        <CertificateModal close={props.close} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Certificate;
