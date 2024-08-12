import Link from 'next/link';
import React from 'react'
import { IoArrowForwardOutline, IoCloseOutline } from 'react-icons/io5'



export interface InfoItem {
  strategy?: string;
  design: string;
  client: string;
  technology?: string;
}

interface InfoProject {
  date: string;
  title: string;
  bg: string;
  link: string;
  infos: InfoItem;
  showActiveProject: (project: number | null) => void;
}

export const OneProject = ({ date, title, infos, bg, link, showActiveProject }: InfoProject) => {
  return (
    <div className={`w-full h-full flex bg-[#111013] transition duration-100 ease-in  max-md:flex-col `}>
      <div
        className='fixed top-7 right-7 text-white text-2xl cursor-pointer z-50
                   rounded-full w-8 h-8 flex justify-center items-center hover:bg-[#d9d9d92d] '
        onClick={() => showActiveProject(null)}
      >
        <IoCloseOutline />
      </div>
      <div
        className='w-[62%] h-[100%] bg-slate-900 bg-cover bg-center max-md:w-[100%] '
        style={{
          backgroundImage: `${bg}`
        }}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-duration="300"
      >
      </div>
      <div className='h-[100%] w-[38%]  flex justify-center items-center  p-16 max-md:w-[100%] max-md:p-7'>
        <div className='flex h-[100%] flex-col gap-6 w-full  text-white max-h-[100%] max-md:justify-around'>
          <span
            className='text-base font-medium leading-6'
            data-aos="fade-up"
            data-aos-duration="300">
            {date}
          </span>
          <h3
            className='text-[45px] leading-[48px] tracking-[-2px] font-bold sticky'
            data-aos="fade-up"
            data-aos-duration="400" >
            {title}
          </h3>
          <div
            className='flex h-auto gap-7 flex-wrap overflow-y-auto  max-2xl:max-h-[40%] scroll-br max-md:w-[calc(100% + 16px)] pr-4'
            data-aos="fade-up"
            data-aos-duration="500">
            {infos.strategy &&
              <div
                className='w-[27%] flex flex-col gap-4 py-3 border-t-[1px] border-[#80808040] ' >
                <h3 className='text-base font-semibold'>Strategy</h3>
                <ul >
                  <li className='text-sm text-[#9690a2]'>{infos.strategy}</li>
                </ul>

              </div>}
            <div className='w-[27%] flex flex-col gap-4 py-3 border-t-[1px] border-[#80808040]'>
              <h3 className='text-base font-semibold'>Design</h3>
              <ul >
                <li className='text-sm text-[#9690a2]'>{infos.design}</li>
              </ul>
            </div>
            <div className='w-[27%] flex flex-col gap-4 py-3 border-t-[1px] border-[#80808040]'>
              <h3 className='text-base font-semibold'>Client</h3>
              <ul >
                <li className='text-sm text-[#9690a2]'>{infos.client}</li>
              </ul>
            </div>
            {infos.technology &&
              <div className='w-[27%] flex flex-col gap-4 py-3 border-t-[1px] border-[#80808040]'>
                <h3 className='text-base font-semibold'>Technology</h3>
                <ul >
                  <li className='text-sm text-[#9690a2]'>{infos.technology}</li>
                </ul>
              </div>
            }
          </div>
          <Link
            className='slide_up_element  Link-project flex items-center opacity-20 gap-1 text-base font-semibold 2xl:text-lg w-[max-content] rounded-md p-[6px] hover:bg-[#80808016]
                        max-xl:mt-[-30px]
            '
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="600"
          >            <span>
              View project
            </span>
            <IoArrowForwardOutline className='text-xl chevron' />
          </Link>
        </div>
      </div>
    </div>
  )
}

