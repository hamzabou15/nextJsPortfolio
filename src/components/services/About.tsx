import React from 'react'

export default function About() {

    return (
        <div className='w-full  bg-[#a53d91] flex justify-center items-center '>
            <div className='max-w-[1140px] h-auto w-full flex gap-14 max-md:flex-col-reverse max-md:gap-0'>
                <div className='flex flex-col gap-6 flex-1 h-full '>
                    <div className='w-full h-10'>
                    </div>
                    <img
                        className='max-h-[420px] object-contain object-right max-md:object-center max-md:max-height-[620px]' 
                        src="/imgs/me.png" alt="test" />
                </div>

                <div className="flex-1 h-auto flex justify-center  flex-col text-white ">
                    <div className="flex flex-col gap-6 elementor-blockquote max-md:p-8">
                        <p className="max-w-[450px] text-base leading-[26px] max-md:max-w-fit">
                            I believe that I can live in a world where every product
                             or service has an easy to use experience on all platforms. And my mission is to make it happen.			</p>
                        <div className="">
                            <div className="text-base leading-[26px]"><b className='text-[15px]'>Hamza BOUYOUSSEF</b><br/>DEVELOPER</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}