import React, { useRef } from 'react'
import '../External.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const About = () => {

  const imageArray = [
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6'
  ]

  const imageDiv = useRef(null);
  const image = useRef(null);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.to(imageDiv.current, {
          
      scrollTrigger: {
        trigger: imageDiv.current,
        start: "top 20%",
        end: "top -85%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e)=>{
          
          let imageIndex;
          if(e.progress < 1){
            imageIndex = Math.floor(e.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
         image.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <>
      <div className="setion1 py-1">
        <div ref={imageDiv} className="absolute overflow-hidden h-[16vw] w-[13vw] top-73 left-[30vw]">
          <img ref={image} className='rounded-2xl object-cover h-full w-full' src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847" alt="img1" />
        </div>

        <div className="relative font-[font2]">
          <div className="mt-[58vh]">
            <h1 className='uppercase text-[16vw] text-center leading-[15vw]'> origin of <br /> inspiration</h1>
          </div>

          <div className="font-[font1] pl-[40%]">
            <p className='text-5xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"We prioritize curiosity and collaboration, ensuring creative vision always comes before personal ego. Because a brand is an evolving entity defined by its values and narrative,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we look beyond short-term wins to build lasting cultural influence. We apply this principle to every brand story we craft."</p>
          </div>
        </div>

      </div>

      <div className="section2 h-screen">

      </div>

    </>
  )
}

export default About