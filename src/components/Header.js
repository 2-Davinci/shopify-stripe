import React from "react";
import { logoDark, logoWhite } from "../assets";

const Header = () => {
  return (
    <div className=" w-full h-20 bg-white border-p-[1px] border-b-gray-800 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <img src={logoWhite} alt="logoWhite " />
      </div>
    </div>
  );
};

export default Header;
