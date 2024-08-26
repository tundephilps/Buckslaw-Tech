import React from "react";
import CAC from "../assets/images/CAC.jpg";
import FIRS from "../assets/images/FIRS.png";

import NCC from "../assets/images/NCC.jpg";
import NBA from "../assets/images/NBA.png";

import BPP from "../assets/images/BPP.jpeg";
import ITF from "../assets/images/ITF.jpeg";
import NSITF from "../assets/images/NSITF.png";

import NUPRC from "../assets/images/NUPRC.jpg";
import SCUML from "../assets/images/SCUML.png";

const Trusted = () => {
  return (
    <div className="mt-14 px-4 md:px-8 pb-12 ">
      <p className="text-center text-sm text-gray-700 font-semibold">
        Trusted and licenced
      </p>
      <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
        <img src={CAC} className="h-32 w-32 rounded-md" alt="Float UI logo" />
        <img src={FIRS} className="h-32 w-32 rounded-md" alt="Float UI logo" />

        <img src={NBA} className="h-32 w-32 rounded-md" alt="Float UI logo" />
        <img src={NCC} className="h-32 w-32 rounded-md" alt="Float UI logo" />

        <img src={BPP} className="h-32 w-32 rounded-md" alt="Float UI logo" />
        <img src={ITF} className="h-32 w-32 rounded-md" alt="Float UI logo" />

        <img src={NSITF} className="h-32 w-32 rounded-md" alt="Float UI logo" />
        <img src={NUPRC} className="h-32 w-32 rounded-md" alt="Float UI logo" />

        <img src={SCUML} className="h-32 w-32 rounded-md" alt="Float UI logo" />
      </div>
    </div>
  );
};

export default Trusted;
