"use client";
import React, { useState } from 'react'
import { Button } from '../sources';
import { TbChevronDownRight } from 'react-icons/tb';
import Workshop2 from '../../../public/imgs/workshop.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function Process() {


    const router = useRouter()

    const handleClick = () => {
        router.push('/contact')
    };

    return (
        <div className='min-h-[100vh]    m-auto  flex flex-col items-center gap-[40px] px-8 py-14 lg:max-w-[1140px]  max-lg:gap-[70px] ' >
            <div className='  h-[100%] flex flex-col gap-20 mb-4 w-full max-md:gap-12 '>
                <h3 className='text-base text-black font-semibold' >WHAT I DO</h3>
                <p className='text-[28px] font-normal tracking-[1px] leading-[1.6] max-lg:text-[24px]' >I’m technologist and entrepreneur, so I understand both the technical and business challenges of creating digital products.</p>
            </div>
            <div className='flex justify-between gap-8 w-full max-lg:flex-col ' >
                <div className='w-[55%] flex flex-col gap-[70px] max-lg:w-full max-md:gap-12 ' >
                    <div className='flex flex-col gap-[30px] mt-3  ' >
                        <div className='flex gap-10 items-start max-lg:flex-col max-lg:ml-auto max-lg:max-w-[70%] max-lg:gap-5' >
                            <div className='max-lg:ml-auto' >
                                <h2 className='text-[44px] leading-[42px] font-bold w-[60px] max-lg:text-[32px] max-lg:leading-[32px] max-lg:w-auto ' >01</h2>
                            </div>
                            <div>
                                <h2 className='text-[42px] leading-[42px] font-normal tracking-[-1px] max-lg:text-[32px] max-lg:leading-[32px] max-lg:text-right '>Analysis & Evaluation</h2>
                            </div>
                        </div>
                        <div className='flex gap-10 items-start  max-lg:flex-col max-lg:max-w-[70%] max-lg:gap-5' >
                            <div className='' >
                                <h2 className='text-[44px] leading-[42px] font-bold w-[60px] max-lg:text-[32px] max-lg:leading-[32px] max-lg:w-auto ' >02</h2>
                            </div>
                            <div>
                                <h2 className='text-[42px] leading-[42px] font-normal tracking-[-1px] max-lg:text-[32px] max-lg:leading-[32px]  '>Design & development</h2>
                            </div>
                        </div>
                        <div className='flex gap-10 items-start max-lg:flex-col max-lg:ml-auto max-lg:max-w-[70%] max-lg:gap-5' >
                            <div className='max-lg:ml-auto' >
                                <h2 className='text-[44px] leading-[42px] font-bold w-[60px] max-lg:text-[32px] max-lg:leading-[32px] max-lg:w-auto ' >03</h2>
                            </div>
                            <div>
                                <h2 className='text-[42px] leading-[42px] font-normal tracking-[-1px] max-lg:text-[32px] max-lg:leading-[32px] max-lg:text-right '>Deployment & maintenance</h2>
                            </div>
                        </div>
                    </div>
                    <h3>Whatever the challenge, i always deliver a solution.</h3>
                    <div className='max-w-[200px]:' >
                        <Button
                            onClick={handleClick}
                            text="See what I do"
                            icon={<TbChevronDownRight className='text-base mr-2' />}
                            size="medium"
                            variant="filled"
                            className="font-bold text-xl-important cursor-pointer border rounded-[5px] transition duration-300 ease-in "
                        />
                    </div>
                </div>

                <div className='w-[40%] z-[-1] h-[570px]  relative overflow-hidden max-lg:w-full max-md:gap-12 '>
                    <iframe
                        className='absolute top-0 left-0 z-[-1]'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="dba working"
                        width="640"
                        height="700"
                        src="https://www.youtube.com/embed/kql-gJPxh2k?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdba.ma&amp;widgetid=1&amp;autoplay=1&amp;modestbranding=1&amp;showinfo=0"
                        style={{ width: '1139.56px', height: '641px', zIndex: '-1' }}>
                    </iframe>
                </div>
            </div>
            <div className='flex justify-between gap-8 w-full max-lg:flex-col-reverse ' >
                <div className='w-[43%] h-[570px] max-lg:w-[100%]'>
                    <Image className='w-full h-full object-cover' src={Workshop2} alt="Workshop" />
                    {/* <Workshop style={{objectFit:"contain"}} width={"inherit"} height={"inherit"}  /> */}
                </div>
                <div className='w-[50%] h-auto flex flex-col justify-center gap-24 max-lg:w-[100%] max-lg:gap-10'>
                    <h2 className=' rubik-font text-[45px] leading-[50px] font-normal tracking-[-1] max-md:text-4xl'>Creating better products faster</h2>
                    <p className='leading-7 text-base' >Discovery workshops are a part of a project’s initial planning phase. It is used to define the scope of your project, and results in reduced overall costs, increased production speed and minimized risk of potential issues.</p>
                </div>
            </div>
            <div className='flex justify-between gap-8 w-full mt-32 max-lg:flex-col max-lg:mt-0' >
                <div className='w-[43%]  max-lg:hidden'>
                    {/* <Image className='w-full h-full object-cover' src={Workshop2} alt="Workshop" /> */}
                    {/* <Workshop style={{objectFit:"contain"}} width={"inherit"} height={"inherit"}  /> */}
                </div>
                <div className='w-[50%] h-auto flex flex-col justify-center gap-24 max-lg:w-full max-md:gap-14'>
                    <h2 className=' rubik-font text-[45px] leading-[50px] font-normal tracking-[-1] uppercase max-md:text-4xl'>Interested in digging deeper?</h2>
                    <div className='max-w-[200px]:' >
                        <Button
                            onClick={handleClick}
                            text="Discuss your project with me"
                            icon={<TbChevronDownRight className='text-base mr-2' />}
                            size="small"
                            variant="filled"
                            className="font-bold text-lg-important cursor-pointer border rounded-[30px] transition duration-300 ease-in "
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-8 w-full mt-11 mb-8 max-lg:flex-col max-lg:mt-0' >
                <div className='w-[50%] h-auto flex flex-col justify-center gap-16 max-lg:w-full max-md:gap-12'>
                    <h2 className=' rubik-font text-[45px] leading-[50px] font-normal tracking-[-1] uppercase max-md:text-4xl'>NEED DEDICATED PERSON ?</h2>
                    <div className='flex flex-col gap-10' >
                        <p className='leading-7 text-base' >Need a temporary dedicated Person with Experience ? See what i do and how i can start working togheter.</p>
                        <div className='max-w-[200px]:' >
                            <Button
                                onClick={handleClick}
                                text="Contact me now !"
                                icon={<TbChevronDownRight className='text-base mr-2' />}
                                size="small"
                                variant="filled"
                                className="font-bold text-lg-important cursor-pointer border rounded-[30px] transition duration-300 ease-in "
                            />
                        </div>
                    </div>
                </div>
                <div className='w-[43%] '>
                    {/* <Image className='w-full h-full object-cover' src={Workshop2} alt="Workshop" /> */}
                    {/* <Workshop style={{objectFit:"contain"}} width={"inherit"} height={"inherit"}  /> */}
                </div>
            </div>

        </div>
    )
}
