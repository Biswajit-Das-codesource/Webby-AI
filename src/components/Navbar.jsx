import React from "react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-14 w-full flex justify-between items-center bg-black shadow-cyan-300 px-4 sm:px-6 md:px-10 md:h-20">
      <h1 className="text-xl font-bold text-white">Webby</h1>
      <button className="text-black py-2 px-4 bg-white flex justify-center items-center rounded-3xl gap-2 font-medium text-sm sm:text-base">
        Give it a Star
        <FaGithub size={"1.4rem"} />
      </button>
    </header>
  );
}

export default Navbar;
