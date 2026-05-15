import React, { useState } from "react";
import ProjectCard from "../Component/Project/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLenis } from "lenis/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const lenis = useLenis(({ scroll }) => {});

  useGSAP(() => {
    const heroDivs = gsap.utils.toArray(".hero");

    heroDivs.forEach((div) => {
      gsap.from(div, {
        height: "120px",
        // ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: div, // Each div triggers itself
          scroller: "body", // Use the default scroller
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    });
  }, []);

  const project = [
    {
      image1:
        "https://images.pexels.com/photos/8939267/pexels-photo-8939267.jpeg",
      title1: "food web app",
      image2:
        "https://media.istockphoto.com/id/963800958/photo/people-group-icon-with-computer-data-code-in-futuristic-technology-concept-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=LSyMwvuStyhEAamR6rJ0WU2rLMa4rSP1H4bE8g6L_RY=",
      title2: "code Hub",
    },
    {
      image1:
        "https://media.istockphoto.com/id/1354021513/photo/full-frame-image-of-asphalt-playground-surface-painted-with-snakes-and-ladders-game-rows-of.jpg?s=2048x2048&w=is&k=20&c=I4itmeQ9b6sBMx7ZwlUz9TMhima5tbydYy-anaKzhrQ=",
      title1: "Snake Game",
      image2:
        "https://images.pexels.com/photos/5794231/pexels-photo-5794231.jpeg",
      title2: "Tracking App",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
      title1: "Random",
      image2:
        "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
      title2: "code Hub",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
      title1: "Random",
      image2:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      title2: "code Hub",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
      title1: "Random",

      image2:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
      title2: "code Hub",
    },
  ];

  const [hoverTitle, setHoverTitle] = useState("hover an image");
  const [hoveryear, setHoverYear] = useState("2025");
  const [title, setTitle] = useState(false);
  console.log(title);

  const titleRef = useRef(null);

  useGSAP(() => {
    if (!title) {
      gsap.to(titleRef.current, {
        y: "-100%",
        opacity: 0,
        display: "none",
        duration: 0.6,
        ease: "power2.inOut",
      });
    } else {
      gsap.fromTo(
        titleRef.current,
        {
          display: "none",
          y: "-100%",
          // stagger: 0.3,
          opacity: 0,
        },
        {
          display: "flex",
          y: "72%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
      );
    }
  }, [title]);

  return (
    <div className="bg-white text-black min-h-screen">
      <div
        ref={titleRef}
        className="title sticky top-0 z-4 flex-col gap-14 bg-white"
      >
        <div className="border-y-3 p-2 font-[font2] uppercase text-[2vw] flex justify-between">
          {hoverTitle}
          <span className="">{hoveryear}</span>
        </div>
      </div>
      {/* name */}
      <div className="pt-[42vh]">
        <h1 className="font-[font1] flex text-[12vw] uppercase">
          Project
          <span className="text-[2vw] pt-10 pl-2">17</span>
        </h1>
      </div>

      {/* description */}
      <div className="-mt-18 card">
        {project.map(function (elem, index) {
          return (
            <div
              key={index}
              className="hero w-full h-[500px] overflow-hidden mb-3 flex gap-1"
            >
              <ProjectCard
                data={elem}
                setHoverTitle={setHoverTitle}
                setHoverYear={setHoverYear}
                setTitle={setTitle}
              />
              ;
            </div>
          );
        })}
        <div className="h-[20vh] w-full"></div>
      </div>
    </div>
  );
};

export default Project;
