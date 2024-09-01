import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaToolbox } from "react-icons/fa";
import Resume from "./Resume";
import Contact from "./Contact";
import { MdContactMail } from "react-icons/md";

export default function TabRouting() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div class="  lg:mt-0">
        <div className="flex justify-center lg:justify-normal gap-5 bg-white dark:bg-[#111111] p-8 rounded-2xl ">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <div
              id="tabs-with-underline-item-1"
              data-hs-tab="#tabs-with-underline-1"
              aria-controls="tabs-with-underline-1"
              role="tab"
              className={`cursor-pointer bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl p-2 text-center w-20 h-20 hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white active ${
                activeTab == 1
                  ? "bg-gradient-to-l to-[#23CE6B] from-[#286e45]"
                  : ""
              }`}
              onClick={() => setActiveTab(1)}
            >
              <p className={`mt-3 ${activeTab == 1 ? "text-white" : ""}`}>
                <span className=" flex justify-center text-xl">
                  <AiOutlineUser />{" "}
                </span>
                <span className=" flex justify-center">About</span>
              </p>
            </div>
            <div
              id="tabs-with-underline-item-2"
              data-hs-tab="#tabs-with-underline-2"
              aria-controls="tabs-with-underline-2"
              role="tab"
              className={`cursor-pointer bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl p-2 text-center w-20 h-20 hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white active ${
                activeTab == 2
                  ? "bg-gradient-to-l to-[#23CE6B] from-[#286e45]"
                  : ""
              }`}
              onClick={() => setActiveTab(2)}
            >
              <p className={`mt-3 ${activeTab == 2 ? "text-white" : ""}`}>
                {" "}
                <span className=" flex justify-center text-xl">
                  <HiOutlineDocumentText />{" "}
                </span>
                <span className=" flex justify-center">Resume</span>
              </p>
            </div>
            <div
              id="tabs-with-underline-item-3"
              data-hs-tab="#tabs-with-underline-3"
              aria-controls="tabs-with-underline-3"
              role="tab"
              className={`cursor-pointer bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl p-2 text-center w-20 h-20 hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white active ${
                activeTab == 3
                  ? "bg-gradient-to-l to-[#23CE6B] from-[#286e45]"
                  : ""
              }`}
              onClick={() => setActiveTab(3)}
            >
              <p className={`mt-3 ${activeTab == 3 ? "text-white" : ""}`}>
                {" "}
                <span className=" flex justify-center text-xl">
                  <FaToolbox />{" "}
                </span>
                <span className=" flex justify-center">Projects</span>
              </p>
            </div>
            <div
              id="tabs-with-underline-item-4"
              data-hs-tab="#tabs-with-underline-4"
              aria-controls="tabs-with-underline-4"
              role="tab"
              className={`cursor-pointer bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl p-2 text-center w-20 h-20 hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white active ${
                activeTab == 4
                  ? "bg-gradient-to-l to-[#23CE6B] from-[#286e45]"
                  : ""
              }`}
              onClick={() => setActiveTab(4)}
            >
              <p className={`mt-3 ${activeTab == 4 ? "text-white" : ""}`}>
                {" "}
                <span className=" flex justify-center text-xl">
                  <MdContactMail />{" "}
                </span>
                <span className=" flex justify-center">Contact</span>
              </p>
            </div>
          </nav>
        </div>
      </div>

      <div class="mt-3">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <About />
        </div>
        <div
          id="tabs-with-underline-2"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          <Resume />
        </div>
        <div
          id="tabs-with-underline-3"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <Projects />
        </div>
        <div
          id="tabs-with-underline-4"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-4"
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}
