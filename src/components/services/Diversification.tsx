"use client";
import React, { useState } from 'react'
import { Button } from '../sources'
import { TbChevronDownRight } from 'react-icons/tb';

export default function Diversification() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='w-full h-full min-h-[100vh] bg-[#161519] relative '>
      <div className=' text-white m-auto h-full flex flex-col items-center gap-8 px-[40px] py-24 lg:max-w-[1140px] ' >
        <div className='w-full  ' >
          <h2 className='text-[46px] leading-[46px] font-medium'>
            4 ways to work <br />
            with me
          </h2>
        </div>
        <div className="flex flex-wrap w-full mt-12  max-md:flex-col">
          <div className="w-1/2 flex flex-col gap-8 mb-9 max-md:w-full ">
            <div className='w-full'>
              <h3 className=" font-bold">FIXED PRICE</h3>
            </div>
            <div className='w-full'>
              <p className='text-base leading-[25px] text-white/75 max-w-[96%]'>
                I use this model for projects with predefined scope of work and timeline. This type of cooperation
                is ideal for projects where there is little to no change expected in terms of features
                and the overall scope of the project.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-8 mb-9 max-md:w-full">
            <div className='w-full'>
              <h3 className=" font-bold">TIME AND MATERIALS</h3>
            </div>
            <div className='w-full'>
              <p className='text-base leading-[25px] text-white/75 max-w-[96%]'>
                This model applies to most new product development projects, because their scope is often difficult
                to predict. We start with a broad prediction of budget and timeline, which goes into more detail with
                each following phase to ensure full control of the spending.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-8 mb-9 max-md:w-full">
            <div className='w-full'>
              <h3 className=" font-bold">RETAINED PARTNERSHIP</h3>
            </div>
            <div className='w-full'>
              <p className='text-base leading-[25px] text-white/75 max-w-[96%]'>
                This model allows you to have one person working full-time on your project. It`s
                perfect if you have long-term needs for designers, developers, and other experts.

              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-8 mb-9 max-md:w-full">
            <div className="w-full">
              <h3 className="font-bold">DEVELOPMENT STRATEGY</h3>
            </div>
            <div className="w-full">
              <p className="text-base leading-[25px] text-white/75 max-w-[96%]">
                This section outlines effective strategies and best practices for front-end development, focusing on optimizing user interfaces and enhancing user experiences through advanced front-end technologies and methodologies.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <Button
            onClick={handleClick}
            text="Interested ? Contact-me"
            icon={<TbChevronDownRight className='text-base mr-2' />}
            size="small"
            variant="filledGray"
            className="font-bold text-lg-important cursor-pointer border rounded-[30px] transition duration-300 ease-in"
          />
        </div>
      </div>
    </div>
  )
}

