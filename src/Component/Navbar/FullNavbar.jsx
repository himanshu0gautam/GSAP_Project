import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { navbarContext } from "../../Context/Navcontext";

const FullNavbar = () => {
  const FullNavLinkref = useRef(null);
  const fullScreenRef = useRef(null);

  const { navbar, setNavbar } = useContext(navbarContext);
  console.log(navbar);

  useGSAP(function () {
    if (navbar) {
      const tl = gsap.timeline();

      tl.to(".fullscreennav", {
        display: "block",
      });

      tl.to(".stair2", {
        delay: 0.2,
        height: "100%",
        stagger: {
          amount: -0.2,
        },
      });

      tl.to(".link", {
        opacity: 1,
        rotateX: 0,
        stagger: {
          amount: 0.3,
        },
      });
      tl.to(".navlink",{
        opacity: 1,
      })
    } else {
      const tl = gsap.timeline();
      tl.to(".link", {
        opacity: 0,
        rotateX: 90,
        stagger: {
          amount: 0.1,
        },
      });
      tl.to(".stair2", {
        height: 0,
        stagger: {
          amount: 0.1,
        },
      });
      tl.to(".navlink",{
        opacity: 0,
      })
      tl.to(".fullscreennav", {
        display: "none",
      });
    }
  }, [navbar]);

  return (
    <div
      ref={fullScreenRef}
      id="fullScreenNav"
      className="fullscreennav hidden h-screen overflow-hidden w-full absolute z-50"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stair2 h-full w-1/6 bg-black"> </div>
          <div className="stair2 h-full w-1/6 bg-black"> </div>
          <div className="stair2 h-full w-1/6 bg-black"> </div>
          <div className="stair2 h-full w-1/6 bg-black"> </div>
          <div className="stair2 h-full w-1/6 bg-black"> </div>
          <div className="stair2 h-full w-1/6 bg-black"> </div>
        </div>
      </div>
      {/* main div */}
      <div ref={FullNavLinkref} className="realative">
        <div className="navlink flex p-4 w-full justify-between items-start">
          {/* navIcon */}
          <div className="">
            <div className="flex">
              <h1>Navbar</h1>
            </div>
          </div>

          {/* close button */}
          <div
            onClick={() => {
              setNavbar(false);
            }}
            className="closeBtn relative h-24 w-24 cursor-pointer"
          >
            <div className="absolute top-1/2 left-1/2 h-full w-1 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#D3FD50]"></div>
            <div className="absolute top-1/2 left-1/2 h-full w-1 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#D3FD50]"></div>
          </div>
        </div>

        <div id="allLink" className="py-10">
          {/* Project */}
          <div className="link origin-top relative border-y-1">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
              Project
            </h1>

            <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* about */}
          <div className="link origin-top relative border-y-1">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
              About
            </h1>

            <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* contact */}
          <div className="link origin-top relative border-y-1">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
              Contact
            </h1>

            <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* blog */}
          <div className="link origin-top relative border-y-1">
            <h1 className="font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
              Blog
            </h1>

            <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.9] pt-2 uppercase">
                  See everything
                </h1>
                <img
                  className="h-24 w-56 object-cover rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullNavbar;
