import React from 'react'
import Video from "../Component/home/Video"
import HomeHero from '../Component/home/HomeHero'
import HomeBottom from '../Component/home/HomeBottom'

const Home = () => {
    return (
        <div className='fixed top-0 h-screen w-screen'>
            <div className="h-screen w-screen fixed top-0">
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