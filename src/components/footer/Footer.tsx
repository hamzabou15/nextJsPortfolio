"use client";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Footer = () => {

  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState<string>(pathname);



  return (
    <div className="w-full min-h-80 bg-[#161519] Nunito-font p-20 pb-0 max-lg:p-11 max-md:p-6 " >
      <div className="py-6 h-full text-white pb-20  justify-between max-w-[1140px] w-full m-auto  gap-20 flex max-md:flex-col max-md:gap-10  lg:flex-row ">
        <div className=" flex-[0.9] flex flex-col gap-5" >
          <Image
            className='cursor-pointer transition ease duration-300 hover:opacity-80 hover:scale-110'
            width={95}
            height={60}
            src="/imgs/logo.svg"
            alt='logo' />
          <div className="flex flex-col  gap-2">
            <div className="text-[#ffffffd0]">
              <p className="text-[1em] font-light leading-[24px]">
                <strong className="font-bold" >Fès :</strong> 06, Rue Oujda Hay amal Rte Sefrou Narjiss - 1er Etage
              </p>
            </div>
            <div className="text-[#ffffffd0]">
              <p className="text-[1em] font-light leading-[24px]">
                <strong className="font-bold" >Témara :</strong> Bd Moulouya Oued Loukos 12000, Témara - 4er Etage
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <div className="text-[#ffffffd0]">
              <p className="text-[1em] font-light leading-[24px] ">
                <strong className="font-bold " >Contacts :</strong> <br />   </p>
              <p className="text-[1em] font-light leading-[24px]"> +212 693788807 ( a landline is useless, join me anytime !)
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="text-[1em] text-[#ffffffd0] font-light leading-[24px] mb-2" >Hamza8pro@gmail.com</span>
          </div>

        </div>
        <div className=" flex-[0.9]  text-white flex flex-col gap-6" >
          <h2 className="text-base font-bold tracking-wide">Work inquiries</h2>
          <div className="flex flex-col gap-1 text-[#ffffffd0]">
            <p className="text-[1em] font-light leading-[24px] ">Interested in working with me?</p>
            <a
              className="text-[1em] text-[#ffffffd0] cursor-pointer hover:text-[#f1c453] leading-8 font-light mb-2 relative w-[max-content]  animated-border"
              href="mailto:Hamza8pro@gmail.com"
            >
              <strong className="font-extrabold" >Hamza8pro@gmail.com</strong>
            </a>
          </div>
        </div>
        <div className=" flex-[0.9] flex flex-col  gap-6" >
          <h2 className="text-base font-bold tracking-wide">Navigation</h2>
          <div className="text-[#ffffffd0] flex flex-col gap-4 ">
            <Link href={"/"}>
              <p className={`text-[1em]  leading-[24px] cursor-pointer hover:text-[#f1c453] ${currentPage == "/" ? "font-bold text-[#f1c453]" : "font-light"} `}>Home</p>
            </Link>
            <Link href={"/works"}>
              <p className={`text-[1em]  leading-[24px] cursor-pointer hover:text-[#f1c453] ${currentPage == "/works" ? "font-bold text-[#f1c453]" : "font-light"} `}>Works</p>
            </Link>
            <Link href={"/services"}>
              <p className={`text-[1em]  leading-[24px] cursor-pointer hover:text-[#f1c453] ${currentPage == "/services" ? "font-bold text-[#f1c453]" : "font-light"} `}>Services</p>
            </Link>
            <Link href={"/contact"}>
              <p className={`text-[1em]  leading-[24px] cursor-pointer hover:text-[#f1c453] ${currentPage == "/contact" ? "font-bold text-[#f1c453]" : "font-light"} `}>Contact</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.7px] rounded-full bg-[#ffffff1e] max-w-[1140px]  m-auto">
      </div>
      <div className="w-full flex justify-between items-center py-4  max-md:flex-col  max-md:gap-3 max-w-[1140px]  m-auto">
        <span className="text-base font-light text-[#ffffffd0]  ">
          © 2024, Hamza Bouyoussef
        </span>
        <span className="text-base font-light text-[#ffffffd0] ">
          All rights reserved.
        </span>
      </div>

    </div>
  )
}

