'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa6';

export const Progress = () => {

    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
    const [scroll, setScroll] = useState<number>(0)

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const currentScrollPercentage = (scrollTop / (fullHeight - windowHeight)) * 100;
        setScrollPercentage(Number(currentScrollPercentage.toFixed(0))); // Convertir en nombre avant d'affecter
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const scrrollFunc = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', scrrollFunc);
        return () => {
            window.removeEventListener('scroll', scrrollFunc);
        };
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Défilement en douceur
        });
      };

    return (
        <div className={` ${scroll <  90 ? "opacity-0" : "opacity-100 ease-in duration-[0.3s] " } mix-blend-difference fixed left-0 z-50 top-1/2 transform -translate-y-1/2 gap-7 
                        cursor-pointer text-white flex flex-col-reverse items-center 
                        max-md:hidden transition `}
              onClick={scrollToTop}          
                        >
            <div className='w-[2px] h-[68px] bg-[#ffffff3b] rounded-full'>
                <div className={`w-inherit bg-[#ffffffcb]`} style={{ height: `${scrollPercentage}%` }}>
                </div>
            </div>
            <div style={{ transform: "rotate(-90deg)" }} className='mb-6 text-sm font-semibold' >Scroll to top  </div>
        </div>
    )
}


