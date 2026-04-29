import React from "react";
import { useRef } from "react";

const Navbar = () => {

  const navGreenRef = React.useRef(null);

  return (
    <div className="h-15 z-4 flex fixed top-0 w-full items-start justify-between">
      <div className="p-4">
        <div className="flex">
          <h1>Navbar</h1>
        </div>
      </div>

      <div onMouseEnter={()=>{
        navGreenRef.current.style.height = '100%'
      }}
      onMouseLeave={()=>{
        navGreenRef.current.style.height = '0%'
      }}
      className="h-11 bg-black relative w-60">
        <div className="relative"></div>
        <div ref={navGreenRef} className="bg-[#D3FD50] transition-all duration-200 absolute top-0 h-0 w-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
