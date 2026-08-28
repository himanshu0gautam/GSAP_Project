import React, { useRef, useEffect } from "react";
import "../External.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import bg from "../assets/blank.jpg";
import MyImg from "../assets/myprofile.jpeg"

const About = () => {
  const imageArray = [
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
  ];

  const imageDiv = useRef(null);
  const image = useRef(null);
  const colorchange = useRef(null);
  // black bg effect
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const overlayImageRef  = useRef(null);

  useEffect(() => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
        start: "top 20%",
        end: "top -85%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          let imageIndex;
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          image.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  useGSAP(
    function () {
      gsap.to(document.body, {
        backgroundColor: "#000000", // Deep Pitch Black
        color: "#ffffff", // Automatically switches text to white for readability
        duration: 0.8,
        scrollTrigger: {
          trigger: colorchange.current,
          start: "top center",
          end: "bottom center",
          // scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: colorchange },
  );

  useGSAP(
    ()=>{
    gsap.to(textRef.current, {
      xPercent:-50,
      repeat: -1,
      duration: 12,
      ease: 'none'
    })
    // image
    gsap.to(overlayImageRef.current,{
      yPercent: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        marker: true,
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true
      }
    })
  },
  {scope: containerRef}
)

  return (
    <>
      <div className="setion1 py-1 text-black">
        <div
          ref={imageDiv}
          className="absolute overflow-hidden h-[16vw] w-[13vw] top-73 left-[30vw]"
        >
          <img
            ref={image}
            className="rounded-2xl object-cover h-full w-full"
            src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847"
            alt="img1"
          />
        </div>

        <div className="relative font-[font2]">
          <div className="mt-[58vh]">
            <h1 className="uppercase text-[16vw] text-center leading-[15vw]">
              {" "}
              origin of <br /> inspiration
            </h1>
          </div>

          <div className="font-[font1] pl-[40%]">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"We
              prioritize curiosity and collaboration, ensuring creative vision
              always comes before personal ego. Because a brand is an evolving
              entity defined by its values and
              narrative,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we look
              beyond short-term wins to build lasting cultural influence. We
              apply this principle to every brand story we craft."
            </p>
          </div>
        </div>
        <div className="py-58">
          <div className=" p-24 ">
            <div className="gap-16 flex font-[font2] text-xl font-bold">
              <h3 className="">
                Our Work_ Born in curiosity, raised by dedication and fed with a
                steady diet of creativity.
              </h3>
              <h3>
                Our Creative_ Simmering in an environment where talent can come
                to a full boil. Encouraged to become the best versions of
                ourselves.
              </h3>
              <h3>
                Our Culture_ We’re open to each other. Period. The team works
                together to create a space that makes us proud.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div ref={colorchange} className="section2 h-screen">

 <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 left-[33%] h-full object-cover z-0"
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div ref={textRef} className="moveX flex whitespace-nowrap">
          <h1 className="font-[font2] text-[12vw] uppercase leading-[0.9] text-white font-extrabold tracking-wide drop-shadow-lg pr-12">
            Himanshu &nbsp; Himanshu &nbsp; Himanshu
          </h1>
        </div>
      </div>

<div ref={overlayImageRef}
        className="absolute inset-0 z-20 w-full h-full"
        style={{
          transform: 'translateY(100%)', 
          willChange: 'transform',
        }}
      >
        <img
          src={MyImg}
          alt="Second Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>


      </div>

      <div className="bg-white "></div>
    </>
  );
};

export default About;
