import React from 'react'
import { NetIcon, SiteIcon, SquareIcon } from '../icons';
import { BsCheck2 } from "react-icons/bs";



export default function ServiceHero() {

    return (
        <div className='w-full h-full min-h-[100vh] bg-[#161519] relative    '>
            <div className='swiper-slide-active text-white m-auto h-full flex flex-col items-center
                             gap-[144px] px-8 py-14 lg:max-w-[1140px] max-lg:gap-[90px] max-md:gap-[60px]  ' >
                <h1 className='slide_up_element text-6xl font-bold pt-[5rem] max-lg:text-5xl'>Services</h1>
                <div className='flex flex-col justify-center items-center text-[46px] 
                                tracking-[-2px] leading-[50px] font-bold max-lg:text-[36px]
                                max-lg:leading-10 max-md:tracking-tight max-md:leading-normal max-md:text-[22px] text-center'>
                    <h2 className='slide_up_element'>Let’s bring your vision to life together.</h2>
                    <h2 className='slide_up_element'>A dedicated team will share your dream.</h2>
                </div>
                <div className='flex gap-3 w-full max-md:flex-col max-md:gap-14' >
                    <div
                        className='flex-1 px-[20px] py-6 flex rounded-lg flex-col gap-[24px]
                        hover:bg-[#9690a214] transition ease duration-400 max-md:bg-[#9690a214] '
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <SquareIcon color='#F1C453' />
                        <h4 className="text-[24px] font-bold max-lg:leading-7">Design </h4>
                        <p className='text-base text-[#ffffffbf]'>
                            Creating visually engaging designs that resonate with your audiences needs is my goal.	    </p>
                        <ul className='flex flex-col gap-3 text-[15px] text-[#ffffffbf] '>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span>Figma</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span> Adobe Illustrator</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span> Vectary 3D</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className='flex-1 px-[20px] py-6 flex rounded-lg flex-col gap-[24px]
                        hover:bg-[#9690a214] transition ease duration-400 max-md:bg-[#9690a214]'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <NetIcon color='#F1C453' />
                        <h4 className="text-[24px] font-bold max-lg:leading-7">Web development </h4>
                        <p className='text-base text-[#ffffffbf]'>
                            Get access to a talented  developer that will build custom software
                            that delivers real results.	    </p>
                        <ul className='flex flex-col gap-3 text-[15px] text-[#ffffffbf] '>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span>NodeJS, PHP, ExpressJs</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span> ReactJS, Next.JS</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span> Mongodb, Mongoose</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span> Firebase</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className='flex-1 px-[20px] py-6 flex rounded-lg flex-col gap-[24px]
                        hover:bg-[#9690a214] transition ease duration-400 max-md:bg-[#9690a214]'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <SiteIcon color='#F1C453' />
                        <h4 className="text-[24px] font-bold max-lg:leading-7">Website </h4>
                        <p className='text-base text-[#ffffffbf]'>
                            Make your business stands out with a custom web development. My
                            experience will deliver top-notch development for your website.	    </p>
                        <ul className='flex flex-col gap-3 text-[15px] text-[#ffffffbf] '>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span>Wordpress, Customized CMS</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span> Headless CMS </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <BsCheck2 color='#f1c453' className='text-[20px]' />
                                <span>  E-commerce website</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
