import { useGSAP } from "@gsap/react";
import React, { useState } from "react";

const ProjectCard = ({ data, setHoverTitle, setHoverYear, setTitle }) => {
  return (
    <>
      <div
        onMouseEnter={() => {
          setHoverTitle(data.title1);
          setTitle(true);
        }}
        onMouseLeave={() => {
          setTitle(false);
        }}
        className="w-1/2 h-full group transition-all relative hover:rounded-4xl overflow-hidden"
      >
        <img className="h-full w-full object-cover" src={data.image1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-amber/10">
          <h2 className="uppercase text-5xl text-white pt-1 px-4 font-[font1] border-2 rounded-full">
            View Project
          </h2>
        </div>
      </div>

      <div
        onMouseEnter={() => {
          setHoverTitle(data.title2);
          setTitle(true);
        }}
        onMouseLeave={() => {
          setTitle(false);
        }}
        className="w-1/2 h-full group transition-all relative hover:rounded-4xl overflow-hidden"
      >
        <img className="h-full w-full object-cover" src={data.image2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-amber/10">
          <h2 className="uppercase text-5xl text-white pt-1 px-4 font-[font1] border-2 rounded-full">
            View Project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
