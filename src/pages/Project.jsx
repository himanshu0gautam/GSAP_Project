import React from "react";
import ProjectCard from "../Component/Project/ProjectCard";

const Project = () => {

  const project =[{}]

  return (
    <div>
      {/* name */}
      <div className="pt-[45vh]">
        <h1 className="font-[font1] flex text-[12vw] uppercase">
          Project
          <span className="text-[2vw] pt-10 pl-2">17</span>
        </h1>
      </div>

      {/* description */}
      <div className="-mt-18">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
