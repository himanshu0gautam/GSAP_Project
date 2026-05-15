import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <Link
        to="/project"
        className="hover:text-[#D3FD50] hover:border-[#D3FD50] text-[6vw] border-3 border-white rounded-full px-6 uppercase pt-1 leading-[6vw]"
      >
        Project
      </Link>
      <Link
        to="/about"
        className="hover:text-[#D3FD50] hover:border-[#D3FD50] text-[6vw] border-3 border-white rounded-full px-6 uppercase pt-1 leading-[6vw]"
      >
        About
      </Link>
    </div>
  );
};

export default HomeBottom;
