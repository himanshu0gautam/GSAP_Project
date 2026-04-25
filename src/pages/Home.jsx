import React from 'react'
import Video from "../Component/home/Video"
import HomeHero from '../Component/home/HomeHero'
import HomeBottom from '../Component/home/HomeBottom'

const Home = () => {
    return (
        <div>
            <div className="h-screen w-screen fixed">
                <Video />
            </div>

            <div className="h-screen w-screen relative flex flex-col justify-between">
                <HomeHero />
                <HomeBottom />
            </div>
        </div>
    )
}

export default Home