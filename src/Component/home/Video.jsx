import React from 'react'
import video from '../../assets/v1.mp4'

const Video = () => {
    return (
        <div className='h-full w-full'>
            <video src={video}
                autoPlay
                loop
                muted
                className='h-full w-full object-cover'
            ></video>
        </div>
    )
}

export default Video