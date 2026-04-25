import React from 'react'
import Video from "./Video"
import '../../External.css'

const HomeHero = () => {
    return (
        <div className="font-[font1] pt-3 text-center">
            <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]">The Seed</div>
            <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]">
                <div className="video h-[7vw] overflow-hidden"><Video /></div>
                Of</div>
            <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]">Innovation</div>
        </div>
    )
}

export default HomeHero