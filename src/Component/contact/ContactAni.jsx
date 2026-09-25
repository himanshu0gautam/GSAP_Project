import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import arrow from '../../assets/arrow.png'

const ContactAni = () => {
    const marqueeContainerRef = useRef(null)

    useGSAP(() => {
        const tween = gsap.to('.marque', {
            xPercent: -100,
            repeat: -1,
            duration: 4,
            ease: 'none',
        })
            .totalProgress(0.5)

        const handleWheel = (e) => {
            if (e.deltaY > 0) {
                gsap.to(tween, {
                    timeScale: 1,
                    duration: 0.5,
                })
                gsap.to(marqueeContainerRef.current, {
                    rotate: 10,
                    duration: 0.5,
                    ease: "power2.out"
                })
                gsap.to('.marque img', {
                    rotate: 0,
                    // duration: 0.3
                })
            } else {
                gsap.to(tween, {
                    timeScale: -1,
                    duration: 0.5,
                    rotate: -50
                })
                gsap.to(marqueeContainerRef.current, {
                    rotate: -10,
                    duration: 0.5,
                    ease: "power2.out"
                })
                gsap.to('.marque img', {
                    rotate: 180,
                    // duration: 0.3
                });
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: true })
        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    },
        { scope: marqueeContainerRef }
    )

    return (
        <>
            <div
                ref={marqueeContainerRef}
                onMouseEnter={() => gsap.to(marqueeContainerRef.current, {
                    backgroundColor: '#FFFFFF',
                    duration: 0.5,
                    overwrite: 'auto',
                    ease: 'power1.out'
                })}
                onMouseLeave={() => gsap.to(marqueeContainerRef.current, {
                    backgroundColor: '#C8F04C',
                    duration: 0.5,
                    overwrite: 'auto',
                    ease: 'power1.out'
                })}
                className="move bg-[#C8F04C] flex py-3 uppercase w-full overflow-hidden cursor-pointer rotate-[10deg] origin-center transition-colors"
            >
                <div className="marque flex items-center gap-5 px-2 shrink-0">
                    <h1 className='text-[4rem] font-[font2]'>Thrive beyond limits </h1>
                    {/* beyond limits */}
                    <img className='h-20' src={arrow} alt="img" />
                </div>
                <div className="marque flex items-center gap-5 px-2 shrink-0">
                    <h1 className='text-[4rem] font-[font2]'>Thrive beyond limits </h1>
                    {/* beyond limits */}
                    <img className='h-20' src={arrow} alt="img" />
                </div>
                <div className="marque flex items-center gap-5 px-2 shrink-0">
                    <h1 className='text-[4rem] font-[font2]'>Thrive beyond limits </h1>
                    {/* beyond limits */}
                    <img className='h-20' src={arrow} alt="img" />
                </div>
                <div className="marque flex items-center gap-5 px-2 shrink-0">
                    <h1 className='text-[4rem] font-[font2]'>Thrive beyond limits </h1>
                    {/* beyond limits */}
                    <img className='h-20' src={arrow} alt="img" />
                </div>
                <div className="marque flex items-center gap-5 px-2 shrink-0">
                    <h1 className='text-[4rem] font-[font2]'>Thrive beyond limits </h1>
                    {/* beyond limits */}
                    <img className='h-20' src={arrow} alt="img" />
                </div>
            </div>
        </>
    )
}

export default ContactAni