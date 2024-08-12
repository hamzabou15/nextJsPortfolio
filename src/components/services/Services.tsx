"use client";
import React from 'react'
import ServiceHero from './ServiceHero'
import ServiceIndication from './ServiceIndication'
import About from './About'
import Technical from './Technical'
import Diversification from './Diversification'


export const Services = () => {

  return (
    <div>
      <ServiceHero />
      <ServiceIndication />
      <About />
      <Technical />
      <Diversification />
      <div className='fixed top-1 left-16 z-50'>
      </div>
    </div>
  )
}
