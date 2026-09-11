import React from "react";
import NavBar from "./NavBar";
import { CiDark } from "react-icons/ci";

const Header = () => {
  return (
    <div className="px-4 py-6 flex justify-between">
      <h2 className="text-3xl font-bold">Shape.</h2>
      <NavBar />
      <div className="flex gap-4 items-center ">
        <CiDark className="text-2xl" />
        <button className="py-2 px-4 bg-[#d0ff71] rounded-full text-sm font-semibold">
          Start a project
        </button>
      </div>
    </div>
  );
};

export default Header;
