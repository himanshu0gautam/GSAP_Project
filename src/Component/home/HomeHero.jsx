import React from "react";
import Video from "./Video";
import "../../External.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeHero = () => {
  //   const borderRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: `${length * 0.6} ${length * 0.8}`,
      strokeDashoffset: length,
    });
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2.5,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="font-[font1] pt-3 text-center">
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]">
        The Seed
      </div>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]">
        <div className="video h-[7vw] overflow-hidden">
          <Video />
        </div>
        Of
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-[55%] flex items-center justify-center">
          {/* <div
            ref={borderRef}
            className="absolute inset-0 border-2 rounded-[70%] border-[#D3FD50]"
          ></div> */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
          <ellipse
            ref={pathRef}
            cx="50"
            cy="50"
            rx="50"
            ry="45"
            fill="none"
            stroke="#D3FD50"
            strokeWidth="0.5" // Adjust thickness here
            strokeLinecap="round"
          />
        </svg>
          <h2 className="text-[9.5vw] uppercase leading-[8vw] z-10">
            Innovation
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
