import React, { useContext } from "react";
import { useRef } from "react";
import { navbarContext } from "../../Context/Navcontext";

const Navbar = () => {
  const navGreenRef = React.useRef(null);
  const { navbar, setNavbar } = useContext(navbarContext);

  return (
    <div className="h-12 fixed z-4 flex top-0 w-full items-start justify-between">
      <div className="">
        <div className="flex">
          {/* <h1>Himanshu</h1> */}
        </div>
      </div>

      <div
        onClick={() => {
          setNavbar(true);
        }}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        
        className="h-12 bg-black relative w-60 cursor-pointer"
      >
        <div className="relative h-full px-8 flex flex-col gap-1 items-end justify-center">
          <div className="w-14 h-[0.1rem] bg-amber-50 "></div>
          <div className="w-7 h-[0.1rem] bg-amber-50 "></div>
        </div>
        <div
          ref={navGreenRef}
          className="bg-[#D3FD50] transition-all duration-100 absolute top-0 h-0 w-full"
        >
          <div className="relative h-full px-8 flex flex-col gap-1 items-end justify-center">
            <div className="w-14 h-[0.1rem] bg-black"></div>
            <div className="w-7 h-[0.1rem] bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
