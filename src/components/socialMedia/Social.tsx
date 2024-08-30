import Link from 'next/link'
import React from 'react'
import { BsDribbble } from 'react-icons/bs'
import { FaDribbbleSquare } from 'react-icons/fa'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa6'

export const Social = () => {
  return (
    <div className="fixed mix-blend-difference right-9 top-1/2 transform -translate-y-1/2 gap-4 text-white flex flex-col-reverse items-center max-md:hidden z-[5]" >
      <div style={{ transform: "rotate(-90deg)" }} className='mt-4 text-sm font-semibold' >Follow Me  </div>
      <div style={{ transform: "rotate(90deg)" }} className='text-sm font-semibold' >  — </div>
      <Link prefetch={true} target='_blank' href='https://www.linkedin.com/in/hamza-bouyoussef-449642192/' className='hover:text-[#f1c453] hover:scale-[1.05] text-xl transition duration-300 ease-in' ><FaLinkedin /></Link>
      <Link prefetch={true} target='_blank'  href='https://dribbble.com/hb15  ' className='hover:text-[#f1c453] hover:scale-[1.05] text-xl  transition duration-300 ease-in'  ><BsDribbble />
      </Link>

    </div>
  )
}
