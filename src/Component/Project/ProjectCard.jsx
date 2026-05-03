import React from "react";

const ProjectCard = () => {
  return (
    <div>
      <div className="w-full h-[400px] mb-3 flex gap-2">
        <div className="w-1/2 h-full group transition-all relative hover:rounded-4xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
            alt=""
          />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-amber/10">
            <h2 className="uppercase text-5xl pt-1 px-4 font-[font1] border-2 rounded-full">
              View Project
            </h2>
          </div>
        </div>

        <div className="w-1/2 h-full group transition-all relative hover:rounded-4xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
            alt=""
          />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-amber/10">
            <h2 className="uppercase text-5xl pt-1 px-4 font-[font1] border-2 rounded-full">
              View Project
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
