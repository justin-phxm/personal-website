"use client";
import { devInfo } from "public/devInfo";
import { AiFillCode, AiOutlineMail } from "react-icons/ai";
import {
  BiSolidUser,
  BiSolidDownArrow,
  BiSolidRightArrow,
} from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { BsFolder2, BsTelephoneFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import InfoView from "./InfoView";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const folderColors = ["text-rose-400", "text-emerald-400", "text-indigo-800"];
const sectionIcons = [
  <AiFillCode key="code" />,
  <BiSolidUser key="user" />,
  <FaGamepad key="gamepad" />,
];
export default function UserInfo() {
  const [aboutSectionIndex, setAboutSectionIndex] = useState(0);
  const [infoDescriptionIndex, setInfoDescriptionIndex] = useState(0);
  const aboutSection = devInfo.about.sections[aboutSectionIndex]!;
  const infoDescription = aboutSection.info[infoDescriptionIndex]!;
  return (
    <>
      <div className="flex flex-col gap-1 border-slate-800 lg:border-r">
        {/* Mobile Section icons */}
        {devInfo.about.sections.map((section, index) => (
          <>
            <button
              onClick={() => setAboutSectionIndex(index)}
              className="flex flex-row items-center gap-1 bg-slate-800 p-2 text-sm text-white lg:hidden"
            >
              {section === aboutSection ? (
                <BiSolidDownArrow />
              ) : (
                <BiSolidRightArrow />
              )}
              <p>{section.title}</p>
            </button>
            {section === aboutSection && (
              <div className="text-sm lg:hidden">
                {aboutSection.info.map((info, index) => (
                  <button
                    key={index}
                    onClick={() => setInfoDescriptionIndex(index)}
                    className="flex flex-row content-center items-center gap-2 p-1 text-center hover:bg-gray-700 hover:text-white"
                  >
                    <MdKeyboardArrowRight />
                    <BsFolder2
                      className={folderColors[index % folderColors.length]}
                    />
                    <p className={info === infoDescription ? "text-white" : ""}>
                      {info.title}
                    </p>
                  </button>
                ))}
              </div>
            )}
            {/* Desktop section icons */}
            <div
              className={
                "hidden cursor-pointer p-2 text-3xl hover:bg-gray-700 lg:block" +
                (section === aboutSection ? " text-gray-600" : "")
              }
              onClick={() => setAboutSectionIndex(index)}
            >
              {sectionIcons[index]}
            </div>
          </>
        ))}
      </div>
      <div className="border-r border-slate-800 text-white">
        {/* desktop */}
        <details
          open
          className="hidden cursor-pointer flex-row items-center gap-2 border-b border-slate-800 p-2 lg:block"
        >
          <summary className="whitespace-nowrap">{aboutSection.title}</summary>
          <div className="hidden whitespace-nowrap text-sm lg:block">
            {aboutSection.info.map((info, index) => (
              <button
                key={index}
                onClick={() => setInfoDescriptionIndex(index)}
                className="flex flex-row content-center items-center gap-2 p-1 text-center hover:bg-gray-700"
              >
                <FaFileAlt
                  className={folderColors[index % folderColors.length]}
                />
                <p
                  className={
                    info === infoDescription ? "text-white" : "text-slate-500"
                  }
                >
                  {info.title}
                </p>
              </button>
            ))}
          </div>
        </details>
        <details className="flex cursor-pointer flex-col gap-1 border-y border-slate-800 bg-slate-800 p-2 text-sm text-white lg:bg-inherit lg:text-base">
          <button className="flex flex-row items-center gap-1 py-2 text-xs text-slate-500 transition-colors hover:bg-gray-700 hover:text-white">
            <AiOutlineMail />
            <p>{devInfo.contacts.direct.sources.email}</p>
          </button>
          <button className="flex flex-row items-center gap-1 py-2 text-xs text-slate-500 transition-colors hover:bg-gray-700 hover:text-white">
            <BsTelephoneFill />
            <p>{devInfo.contacts.direct.sources.phone}</p>
          </button>
        </details>
      </div>
      <div className="w-full border-slate-800 lg:border-r">
        <InfoView
          infoDescription={infoDescription}
          aboutSection={aboutSection}
        />
      </div>
    </>
  );
}
