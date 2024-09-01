import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Education() {
  return (
    <div>
      <div className="bg-[#F8FBFB] dark:bg-[#111111]  py-12 md:px-10 px-2  w-full mb-5">
        <div className="flex items-center pb-8">
          <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
            Education{" "}
          </h2>
          <div className="border border-green-400 w-28 ml-14 "></div>
        </div>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">June, 2022 - Dec, 2022</h3>
              <h4 className="vertical-timeline-element-subtitle text-sm">
                Programming Hero
              </h4>
              <p>Complete Web Development Course With Jhankar Mahbub</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">Sep, 2020 - jun, 2021</h3>
              <h4 className="vertical-timeline-element-subtitle text-sm">
                udemy.com
              </h4>
              <p>The Complete JavaScript Course: From Zero to Expert! by Jonas Schmedtmann</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">November, 2016 - April, 2017</h3>
              <h4 className="vertical-timeline-element-subtitle text-sm">
                Computer Palace, Khalispur, KHulna
              </h4>
              <p>Web Design and Development (WordPress)</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#9272d4", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">January, 2014 - February, 2016</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Marine Diesel Engine Artificer (Equipment to H.S.C)
              </h4>
              <p>Bangladesh Institute of Marine Technology</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            iconStyle={{ background: "#ca56f2", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">January, 2008 - March, 2013</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Adaghat High School
              </h4>
              <p>S.S.C</p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaGraduationCap />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
