import React, { Children } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname;

    const stairPraentRef = useRef(null);
    const PageRef = useRef(null);

    useGSAP(function () {

        const tl = gsap.timeline();

        tl.to(stairPraentRef.current, {
            display: 'block'
        })

        tl.from(".stair", {
            height: 0,
            stagger: {
                amount: -0.20
            }
        })

        tl.to(".stair", {
            y: '100%',
            stagger: {
                amount: -0.20
            }
        })

        tl.to(stairPraentRef.current, {
            display: 'none'
        })

        tl.to(".stair", {
            y: '0%'
        })

        gsap.from(PageRef.current,{
        opacity:0,
        delay:1.2,
        scale:1.2
        })

    }, [currentPath])


    return (
        <>
            <div className="">
                <div ref={stairPraentRef} className="h-screen w-full fixed z-20 top-0">
                    <div className="h-full w-full flex">
                        <div className="stair h-full w-1/6 bg-black"> </div>
                        <div className="stair h-full w-1/6 bg-black"> </div>
                        <div className="stair h-full w-1/6 bg-black"> </div>
                        <div className="stair h-full w-1/6 bg-black"> </div>
                        <div className="stair h-full w-1/6 bg-black"> </div>
                        <div className="stair h-full w-1/6 bg-black"> </div>
                    </div>
                </div>
                <div ref={PageRef} className="">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Stairs