"use client";
import React, { useState } from 'react'
import { TbChevronDownRight } from "react-icons/tb";
import { Button } from '../sources';
import { useRouter } from 'next/navigation';


export default function Hero() {


  const router = useRouter()

  const handleClick = () => {
    router.push('/services')
  };

  return (
    <div className='w-full min-h-[100vh] bg-[#161418] justify-center flex flex-col items-center  py-20 max-md:py-28  max-md:min-h-[auto]'  >
      <div className=' flex justify-center items-center max-w-[900px] max-lg:max-w-[85%] ' >
        <div className=' flex flex-col  items-start gap-7 xl:gap-10 2xl:gap-14  max-xl:gap-12 max-md:max-w-[auto] ' >
          <h2 className='text-white  text-[92px] font-[700] tracking-[1PX] leading-[100px] 
                           max-lg:text-[62px] max-lg:leading-[70px] max-md:text-[32px] max-md:leading-[40px] '
            data-aos="fade-up"
            data-aos-duration="600"
          >I create premium custom web and design solutions</h2>
          <div className='text-[#ffffffbf] text-base tracking-widest '> <p className='font-light max-lg:max-w-[700px]'
            data-aos="fade-up"
            data-aos-duration="600"
          > Hire a dedicated skilled developer to develop and design your <span className='font-bold text-[#f1c453] '> custom software</span> or <span className='font-bold  text-[#f1c453]'>website</span> </p> </div>
          <Button
            onClick={handleClick}
            text="See what I do"
            icon={<TbChevronDownRight className='text-base mr-2' />}
            size="medium"
            variant="filledGray"
            className="font-bold text-xl-important cursor-pointer border rounded-[5px] transition duration-300 ease-in active:border-red-500"
          />
        </div>
      </div>
    </div>
  )
}
