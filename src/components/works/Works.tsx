"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoArrowForwardOutline } from "react-icons/io5";
import { OneProject } from './oneWork';
import { useState } from 'react';
import { projects } from '../data';

export const Works = () => {

  const [activeWork, setActiveWork] = useState<number | null>(null)

  const showActiveProject = (projectId: number | null) => {
    setActiveWork(projectId)
  }


  return (
    <div className=' w-[100vw] h-[100vh] top-0 left-0 z-0 bg-black flex justify-center items-center'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className='m-0'
          >
            <div className=' h-full w-full  absolute top-0 left-0 z-[-2] text-[#b6b6b61b] flex justify-center items-end max-md:items-center max-md:justify-end  max-md:z-50'>
              <h1 className='text-9xl mb-[40px] text-center font-bold max-md:rotate-[-90deg] max-md:text-6xl max-md:m-0 max-md:mr-[-30%]'>{project.title}</h1>
            </div>
            <div className='fixed z-[200] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-9  text-white 2xl:gap-5 
                max-md:translate-x-[none] max-md:left-0 max-md:ml-[20px] max-md:gap-7 max-md:max-w-[90%]
              '>
              <h3 className='slide_up_element text-[64px] tracking-[-1px] leading-[64px] 2xl:text-[78px] font-bold max-w-[350px]  '>
                {project.title}
              </h3>
              {/* je veux quand je click ici le num 1 dans les oneProject recois activeWork == true */}
              <button
                className='slide_up_element Link-project flex items-center gap-1 text-lg font-bold 2xl:text-xl 
               w-[max-content] rounded-md p-[6px] hover:bg-[#80808016] '
                onClick={() =>
                  showActiveProject(index + 1)
                }
              >
                <span>
                  show project
                </span>
                <IoArrowForwardOutline className='text-lg chevron' />
              </button>
            </div>
            <div className='flex relative items-center w-full h-full z-1 max-md:flex-col'>
              <div
                className="w-full transform-3d flex-1 bg-cover bg-no-repeat bg-center 
                          transition-transform duration-700 ease-in-out hover:hover-transform-3d 
                          h-full  max-md:bg-top "
                style={{
                  backgroundImage: `linear-gradient(270deg, rgba(17, 16, 19, 0.95) 0%, rgba(17, 16, 19, 0) 100%), ${project.bg}`
                }}
              >
              </div>
              <div className='flex-1'>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {activeWork &&
        <div className={`fixed w-[100vw] h-[100vh]  lef-0 top-0 z-50  `}>
          {projects.map((project, index) => (
            (index + 1) == activeWork &&
            (<OneProject
              key={index}
              bg={project.bg}
              date={project.date}
              infos={project.infos}
              title={project.title}
              link={project.link}
              showActiveProject={showActiveProject}
            />)
          ))}
        </div>}
    </div>
  )
}