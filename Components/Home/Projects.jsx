import Image from "next/image";
import React from "react";
import daeImage from "../../assets/Images/dae.png";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import Footer from "./Footer";

export default function Projects() {
  return (
    <div className="bg-white  dark:bg-[#0D0D0D]  rounded-2xl my-9">
      <div className=" py-12 px-2 sm:px-5 md:px-10  w-full p-8  ">
        <div className="flex items-center pb-8">
          <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
            Projects
          </h2>
          <div className="border border-green-400 w-28 ml-14 "></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {" "}
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={daeImage} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                DAE Application
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                Application for Department Of Agricultural Extension .
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://dae-app.vercel.app/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
