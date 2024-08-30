"use client";
import { CgClose } from "react-icons/cg";
import React, { useState, useEffect } from 'react';
import { Button, MenuIcon } from '..'
import Image from 'next/image'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { BsDribbble } from "react-icons/bs";


interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}


export const Navbar = () => {

    const pathname = usePathname();
    const [scroll, setScroll] = useState(false);
    const [selectedLink, setSelectedLink] = useState<string>(pathname);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    // scroll to change navbar height
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScroll(scrollTop > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };
    const handleClickMobile = () => {
        setShowMenuMobile(!showMenuMobile);
    };

 

    useEffect(() => {
        // Fonction pour mettre à jour la taille de la fenêtre
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);

        // Appeler la fonction pour définir la taille initiale
        handleResize();

        // Nettoyer l'écouteur d'événement lors du démontage du composant
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount


    const router = useRouter();

    

    return (
        <div >
            {/* nav bar */}
            <div
                className={`${!scroll ? "absolute" : "fixed"} 
                            none top-0 left-0 w-full flex items-center justify-between px-5
                            ${scroll ? "py-1 bg-[#0a0a0a]" : "py-3"}   max-lg:h-22
                            2xl:h-24 z-30
                            `}
            >
                <div className='flex items-center gap-5' >
                    <div
                        onClick={handleClick}
                        className={`p-1 ${scroll ? "scale-[0.85]" : "scale-100"}
                                   bg-[#67666644] rounded-full transition-all cursor-pointer  
                                     max-md:hidden 2xl:scale-125   `}
                    >
                        <MenuIcon
                            className={`text-[white] hover:transform hover:scale-105 `}
                        />
                    </div>
                    <Link href={"/"} >
                        <Image className='cursor-pointer hover:opacity-80 hover:transition-all 2xl:h-28 2xl:w-28' width={scroll ? 80 : 95} height={60} src="/imgs/logo.svg" alt='test' />
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Button onClick={() =>    router.push('/estimate') } text="GET AN ESTIMATE " size={windowSize.width && windowSize.width > 1536 ? "medium" : "small"} variant='outlined' className='font-bold cursor-pointer transition duration-300 ease-in hover:bg-[#efea5a]   ' />
                    <div onClick={handleClickMobile} className={`p-1 ${scroll ? "scale-[0.85]" : "scale-100"} bg-[#67666644] rounded-full transition-all cursor-pointer hidden  max-md:flex `} >
                        <MenuIcon className={`text-[white] hover:transform hover:scale-105`} />
                    </div>
                </div>
            </div>
            {/* nav bar opening */}
            <div className={`w-full fixed top-0 left-0  bg-[rgba(17,16,19,.99)] h-full overflow-hidden transition duration-500 ease-in ${showMenu ? "opacity-100 z-[30] " : "opacity-0 z-[-2]"} `} >
                <div className="w-full h-28 flex items-center" >
                    <button onClick={handleClick} className="absolute top-3 left-4 rounded-full border-[1px] cursor-pointer border-transparent outline-1 outline-solid outline-[red] transition-all
                                border-solid hover:border-[gray] p-4 hover:bg-[#67666644]  ">
                        <CgClose className="text-[white] text-lg hover:transform hover:scale-105  " />
                    </button>
                </div>
                <div className="max-w-[1140px] items-center justify-center w-full gap-5 flex m-auto px-20 max-xl:px-15 " style={{ height: "calc(100% - 28)" }} >
                    <div className="w-[70%] max-xl:w-[90%] " >
                        <ul className="flex flex-col gap-5 max-xl:gap-9" >
                            <li className="menu-link" onClick={() => { setShowMenu(false), setSelectedLink("/") }}  >
                                <div className="flex justify-start gap-2">
                                    <span className=" number text-[14px] text-[#9690a2] font-semibold " >01</span>
                                    <Link prefetch={true} href={"/"}
                                        className={` relative leading-[1] overflow-hidden flex flex-col text-[10vh] w-full max-xl:text-8xl max-lg:text-7xl ${selectedLink ? (pathname == "/" ? "text-[#f1c453]" : "text-white") : "text-[#f1c453]"} `}>
                                        <span className=" text-inherit leading-[1]" >Home</span>
                                        <span className=" leading-[1]  absolute top-0 translate-y-[100%] closed opacity-0">HOME</span>
                                    </Link>
                                </div>

                            </li>
                            <li className="menu-link" onClick={() => { setShowMenu(false), setSelectedLink("works") }}  >
                                <div className="flex justify-start gap-2">

                                    <span className=" number text-[14px] text-[#9690a2] font-semibold " >02</span>
                                    <Link prefetch={true} href={"/works"} className={` relative leading-[1] overflow-hidden flex flex-col text-[10vh] w-full max-xl:text-8xl max-lg:text-7xl ${pathname == "/works" ? "text-[#f1c453]" : "text-white"}  `}>
                                        <span className=" text-inherit leading-[1]" >works</span>
                                        <span className=" leading-[1]  absolute top-0 translate-y-[100%] closed opacity-0">works</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="menu-link" onClick={() => { setShowMenu(false), setSelectedLink("services") }}  >
                                <div className="flex justify-start gap-2">
                                    <span className=" number text-[14px] text-[#9690a2] font-semibold " >03</span>
                                    <Link prefetch={true} href={"/services"} className={` relative leading-[1] overflow-hidden flex flex-col text-[10vh] w-full max-xl:text-8xl max-lg:text-7xl ${pathname == "/services" ? "text-[#f1c453]" : "text-white"}  `}>
                                        <span className="text-inherit leading-[1]" >services</span>
                                        <span className=" leading-[1]  absolute top-0 translate-y-[100%] closed opacity-0">services</span>
                                    </Link>
                                </div>

                            </li>
                            <li className="menu-link" onClick={() => { setShowMenu(false), setSelectedLink("contact") }}  >
                                <div className="flex justify-start gap-2">

                                    <span className=" number text-[14px] text-[#9690a2] font-semibold " >04</span>
                                    <Link prefetch={true} href={"/contact"} className={` relative leading-[1] overflow-hidden flex flex-col text-[10vh] w-full max-xl:text-8xl max-lg:text-7xl ${pathname == "/contact" ? "text-[#f1c453]" : "text-white"}  `}>
                                        <span className=" text-inherit leading-[1]" >contact</span>
                                        <span className=" leading-[1]  absolute top-0 translate-y-[100%] closed opacity-0">contact</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[30%] h-full  flex flex-col gap-8 " >
                        <div className=" global-secondary-font w-full text-[#635d6f] text-sm gap-1  flex flex-col " >
                            <h3 className=" font-bold tracking-wider text-sm text-white" >Get In Touch</h3>
                            <span className="font-medium tracking-wider " >06, rue oujda Narjiss Fes</span>
                            <span className="font-medium tracking-wider ">+212693788807</span>
                            <span className="font-medium tracking-wider ">Hamza8pro@gmail.com</span>
                        </div>
                        <div className=" global-secondary-font w-full text-[#635d6f] text-sm gap-1  flex flex-col " >
                            <h3 className="font-bold tracking-wider text-sm text-white" >Social Media</h3>
                            <div className="flex gap-2 mt-4 " >
                                <Link prefetch={true} href={"/"} className="scale-icon  w-10 h-10 cursor-pointer text-white flex justify-center items-center bg-[#9690a240] rounded-full">
                                    <FaFacebookF />
                                </Link>
                                <Link prefetch={true} href={"/"} className="scale-icon w-10 h-10 cursor-pointer text-white flex justify-center items-center bg-[#9690a240] rounded-full">
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`w-full fixed top-0 left-0  bg-[rgba(0,0,0,0.7)] h-full overflow-hidden transition 
                            duration-500 ease-in ${showMenuMobile ? "opacity-100 z-[30] " : "opacity-0 z-[-2]"} flex items-center  `}
                onClick={() =>
                    setShowMenuMobile(false)
                }
            >
                <div className="w-[85%] h-full bg-[rgba(17,16,19,.99)] "
                    onClick={(event) => {
                        event.stopPropagation(),
                            setShowMenuMobile(true)
                    }
                    }
                >
                    <div className="flex flex-col gap-12 py-24 px-7">
                        <ul className="flex flex-col gap-10 " >
                            <li onClick={(event) => {  event.stopPropagation() ,  setShowMenuMobile(false) , setSelectedLink("/")}}  >
                                <div className="flex justify-start gap-2">
                                    <Link prefetch={true} href={"/"} className={` relative leading-[1] overflow-hidden flex flex-col text-lg w-full ${selectedLink ? (pathname == "/" ? "text-[#f1c453]" : "text-white") : "text-[#f1c453]"} `}>
                                        <span className=" leading-[1] font-medium" >Home</span>
                                    </Link>
                                </div>

                            </li>
                            <li onClick={(event) => {  event.stopPropagation() ,  setShowMenuMobile(false), setSelectedLink("works") }}  >
                                <div className="flex justify-start gap-2">
                                    <Link prefetch={true} href={"/works"} className={` relative leading-[1] overflow-hidden flex flex-col text-lg w-full ${pathname == "/works" ? "text-[#f1c453]" : "text-white"}  `}>
                                        <span className=" leading-[1] font-medium" >works</span>
                                    </Link>
                                </div>
                            </li>
                            <li onClick={(event) => {  event.stopPropagation() ,  setShowMenuMobile(false), setSelectedLink("services") }}  >
                                <div className="flex justify-start gap-2">
                                    <Link prefetch={true} href={"/services"} className={` relative leading-[1] overflow-hidden flex flex-col text-lg w-full ${pathname == "/services" ? "text-[#f1c453]" : "text-white"}  `}>
                                        <span className=" leading-[1] font-medium" >services</span>
                                    </Link>
                                </div>
                            </li>
                            <li onClick={(event) => {  event.stopPropagation() ,  setShowMenuMobile(false), setSelectedLink("contact") }}  >
                                <div className="flex justify-start gap-2">
                                    <Link prefetch={true} href={"/contact"} className={` relative leading-[1] overflow-hidden flex flex-col text-lg w-full ${pathname == "/contact" ? "text-[#f1c453]" : "text-white"}  `}>
                                        <span className=" leading-[1] font-medium" >contact</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="copyright text-white">
                            © 2022, Hamza Bouyoussef             <br />
                            All rights reserved.            </div>
                    </div>
                </div>
                <div className="w-[15%] h-full" >
                    <div className=" h-full justify-center items-center gap-7 text-white flex flex-col-reverse " >
                        <div style={{ transform: "rotate(-90deg)" }} className='mt-4 text-base font-semibold w-[max-content]' >Follow Me  </div>
                        <div style={{ transform: "rotate(90deg)" }} className='text-base font-semibold' >  — </div>
                        <Link prefetch={true} href='https://dribbble.com/hb15' className='hover:text-[#f1c453] hover:scale-[1.05] text-xl transition duration-300 ease-in' ><BsDribbble /></Link>
                        <Link prefetch={true} href='https://www.linkedin.com/in/hamza-bouyoussef-449642192/' className='hover:text-[#f1c453] hover:scale-[1.05] text-xl  transition duration-300 ease-in'  ><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

