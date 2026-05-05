import { useGSAP } from "@gsap/react";
import React from "react";

const ProjectCard = (props) => {

  return (
    <>
        <div className="w-1/2 h-full group transition-all relative hover:rounded-[10%] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={props.image1}
            alt=""
          />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-amber/10">
            <h2 className="uppercase text-5xl text-white pt-1 px-4 font-[font1] border-2 rounded-full">
              View Project
            </h2>
          </div>
        </div>

        <div className="w-1/2 h-full group transition-all relative hover:rounded-[10%] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={props.image2}
            alt=""
          />
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
