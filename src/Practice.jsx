// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import bg from "./assets/blank.jpg";
// import MyImg from "./assets/myprofile.jpeg";

// gsap.registerPlugin(ScrollTrigger);

// const Practice = () => {
//     const containerRef = useRef(null);
//     const overlayImageRef = useRef(null);
//     const textRef = useRef(null);

//     useGSAP(
//         () => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: "top top",      // Page 2 viewport ke top par aate hi pin hoga
//                     end: "+=150%",         // Scroll distance (cover animation + pause duration)
//                     scrub: 1,              // Smooth scroll synchronization
//                     pin: true,              // Page 2 tab tak pinned rahega jab tak timeline complete na ho
//                     anticipatePin: 1,
//                     markers: true,
//                     pinSpacing: true
//                 },
//             });
//             gsap.to(textRef.current, {
//                 xPercent: -50,
//                 repeat: -1,
//                 duration: 12,
//                 ease: 'none'
//             })

//             // Step 1: Second image bottom se upar aakar first image ko cover karegi
//             tl.to(overlayImageRef.current, {
//                 y: -"100%",
//                 ease: "none",
//                 duration: 1,
//                 marker: true
//             })
//                 // Step 2: Cover hone ke baad 0.5s ka pause taaki Page 3 aane se pehle image fully visible rahe
//                 // .to({}, { duration: 0.5 });
//         },
//         { scope: containerRef }
//     );

//     // useGSAP(() => {
//     //     gsap.to(".page1 h1", {
//     //         transform: "translateX(-140%)",
//     //         scrollTrigger: {
//     //             trigger: ".page1",
//     //             scroller: "body",
//     //             markers: true,
//     //             start: "top 0%",
//     //             end: "top -100%",
//     //             scrub: 2,
//     //             pin: true
//     //         }
//     //     })
//     // })

//     return (
//         <div className="bg-black w-full">
//             {/* PAGE 1 */}
//             <div className="page1 w-full h-screen bg-gray-400 flex items-center justify-center">
//                 <h1 className="text-4xl font-bold">Page 1</h1>
//             </div>

//             {/* PAGE 2 (PINNED CONTAINER) */}
//             <section
//                 ref={containerRef}
//                 className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
//             >
//                 {/* FIRST BASE IMAGE (Fixed Center Slot) */}
//                 <div className="w-1/3 h-full overflow-hidden relative z-10">
//                     <img
//                         src={bg}
//                         alt="Base BG"
//                         className="w-full h-full object-cover block"
//                     />
//                 </div>

//                     <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
//                         <div ref={textRef} className="moveX flex whitespace-nowrap">
//                             <h1 className="font-[font2] text-[12vw] uppercase leading-[0.9] text-white font-extrabold tracking-wide drop-shadow-lg pr-12">
//                                 Himanshu &nbsp; Himanshu &nbsp; Himanshu
//                             </h1>
//                         </div>
//                     </div>

//                 {/* SECOND OVERLAY IMAGE (Placed top-full and moves up to cover base image) */}
//                 <div
//                     ref={overlayImageRef}
//                     className="absolute top-full left-1/2 -translate-x-1/2 z-20 w-1/3 h-full overflow-hidden"
//                 >
//                     <img
//                         src={MyImg}
//                         alt="Overlay Profile"
//                         className="w-full h-full object-cover block"
//                     />
//                 </div>
//             </section>

//             {/* PAGE 3 */}
//             <div className="page3 w-full h-screen bg-red-400 flex items-center justify-center">
//                 <h1 className="text-4xl font-bold text-white">Page 3</h1>
//             </div>
//         </div>
//     );
// };

// export default Practice;