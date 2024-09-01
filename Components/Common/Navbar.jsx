import React from "react";
import ThemeToggler from "./ThemeToggler";

export default function Navbar() {
  return (
    <div className="flex justify-between px-0 lg:px-36  py-4">
      <div>
        <h1 className="text-xl lg:text-3xl ml-3 lg:ml-0">
          <span className="text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#31e77d] ">
            Md
          </span> {" "}
          Rasel Molla
        </h1>
      </div>
      <div className="">
        <ThemeToggler />
      </div>
    </div>
  );
}
