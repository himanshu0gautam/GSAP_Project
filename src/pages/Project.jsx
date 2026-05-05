import React from "react";
import ProjectCard from "../Component/Project/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLenis } from "lenis/react";


gsap.registerPlugin(ScrollTrigger);

const Project = () => {

  const lenis = useLenis(({ scroll }) =>{})

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
      image2:
        "https://media.istockphoto.com/id/963800958/photo/people-group-icon-with-computer-data-code-in-futuristic-technology-concept-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=LSyMwvuStyhEAamR6rJ0WU2rLMa4rSP1H4bE8g6L_RY=",
    },
    {
      image1:
        "https://media.istockphoto.com/id/1354021513/photo/full-frame-image-of-asphalt-playground-surface-painted-with-snakes-and-ladders-game-rows-of.jpg?s=2048x2048&w=is&k=20&c=I4itmeQ9b6sBMx7ZwlUz9TMhima5tbydYy-anaKzhrQ=",
      image2:
        "https://images.pexels.com/photos/5794231/pexels-photo-5794231.jpeg",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
      image2:
        "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
      image2:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
      image2:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
    },
  ];

  return (
      <div className="bg-white text-black min-h-screen">
        {/* name */}
        <div className="pt-[45vh]">
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
                className="hero w-full h-[500px] overflow-hidden mb-3 flex gap-2"
              >
                <ProjectCard image1={elem.image1} image2={elem.image2} />;
              </div>
            );
          })}
          <div className="h-[20vh] w-full"></div>
        </div>
      </div>
  );
};

export default Project;
