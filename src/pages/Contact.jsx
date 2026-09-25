import React from 'react'
import ContactAni from '../Component/contact/contactAni'

const Contact = () => {

    return (
        <>
            <div className="bg-black text-black overflow-hidden">
                <div className="page1 h-screen w-full flex flex-col">
                    <div className=" realtive w-full h-150 flex justify-center">
                        <div className="absolute top-6 flex flex-col w-1/2 justify-center text-center">
                            <h1 className='text-[9.5rem] text-white uppercase font-[font1] leading-[0.8]'>To talk about your project</h1>
                        </div>
                    </div>
                    <div className="w-full m-4 flex item-end">
                        <ContactAni />
                    </div>
                </div>
                <div className="page2 h-screen w-full flex flex-col">
                    <div className=" w-full h-150 flex justify-center">
                        <div className=" flex flex-col w-1/2 justify-center text-center">
                            <h1 className='text-[9.5rem] text-white uppercase font-[font1] leading-[0.8]'>To talk about your Brand</h1>
                        </div>
                    </div>
                    <div className="w-full m-4 flex item-end">
                        <ContactAni />
                    </div>
                </div>
                <div className="page3 h-screen w-full flex flex-col">
                    <div className="w-full h-150 flex justify-center">
                        <div className=" flex flex-col w-1/2 justify-center text-center">
                            <h1 className='text-[9.5rem] text-white uppercase font-[font1] leading-[0.8]'>To talk about your Goal</h1>
                        </div>
                    </div>
                    <div className="w-full m-4 flex item-end">
                        <ContactAni />
                    </div>
                </div>
                <div className="page4 h-screen w-full"></div>
            </div>
        </>
    )
}

export default Contact