import Image from 'next/image'
import React from 'react'

export default function ServiceIndication() {
    return (
        <div className='w-full h-full min-h-[100vh] bg-[#fffff] relative'>
            <div className=' text-black m-auto h-full flex flex-col gap-7 items-center px-[30px] py-[72px] lg:max-w-[1140px] ' >
                <div className='w-full flex items-center justify-center py-4 '>
                    <h1 className='text-center flex-col font-medium leading-[45px] text-[45px] 
                                  2xl:leading-[54px] 2xl:text-[54px] max-lg:text-[40px]
                                  max-lg:leading-10 tracking-[-1px]'
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        My
                        <br />
                        Expertise
                    </h1>
                </div>
                <div className='flex w-full gap-16 max-md:flex-col'>
                    <div className='flex-1 flex flex-col gap-[20px] max-md:gap-10 '>
                        <img src="https://dba.ma/wp-content/uploads/2022/06/dba_office_wireframing-500x500.jpg" alt=""
                            data-aos="fade-right"
                            data-aos-duration="500"
                            className='hover:filter hover:grayscale transition ease-in duration-[0.3s] max-md:h-96 md:h-72 xl:h-80 object-cover '
                        />
                        <div className='mb-[16px] max-md:mb-0'>
                            <span className='text-[25px] font-medium uppercase leading-7 '
                                data-aos="fade-right"
                                data-aos-duration="500"
                            >01. User experience</span>
                        </div>
                        <div>
                            <p className='text-base leading-[25px]'
                                data-aos="fade-right"
                                data-aos-duration="500"
                            >Let’s start with an overall brainstorming about your project. A roundtable
                                meeting to talk about UX, technologies and design. Then we’ll elaborate
                                a strategy that fits perfectly with your end results.</p>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-[20px] max-md:gap-9 '>
                        <img src="/imgs/design.jpg" alt=""
                        data-aos="fade-right"
                            data-aos-duration="500"
                            className=' hover:filter hover:grayscale transition ease-in duration-[0.3s] max-md:h-96 md:h-72 xl:h-80 object-cover'
                        />
                        <div className='mb-[16px] max-md:mb-0'>
                            <span className='text-[25px] font-medium uppercase leading-7'
                            data-aos="fade-right"
                            data-aos-duration="500"
                            >02. DESIGN </span>
                        </div>
                        <div>
                            <p className='text-base leading-[25px]'
                            data-aos="fade-right"
                            data-aos-duration="500"
                            >Time to go to the drawing board and translate
                                the strategic basis of the project into something visual and more expressive. It’s a way to
                                push the conversation forward and really tailor everything.
                            </p>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-[20px] max-md:gap-9 '>
                        <img src="/imgs/coding.jpg" alt=""
                        data-aos="fade-right"
                            data-aos-duration="500"
                            className='hover:filter hover:grayscale transition ease-in duration-[0.3s] max-md:h-96 md:h-72 xl:h-80 object-cover '
                        />
                        <div className='mb-[16px] max-md:mb-0'>
                            <span className='text-[25px] font-medium uppercase leading-7'
                            data-aos="fade-right"
                            data-aos-duration="500"
                            >03. CODING</span>
                        </div>
                        <div>
                            <p className='text-base leading-[25px]'
                            data-aos="fade-right"
                            data-aos-duration="500"
                            >I will build your custom software from the ground up
                                with the needs of your business and your users at its core.
                                I will implement my in-house strong process to ensure your software project runs smoothly.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

