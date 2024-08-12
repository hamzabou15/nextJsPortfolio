import React from 'react'
import Hero from './Hero'
import Process from './Process'
import { Progress } from '../progress'

export default function HomePage() {
  return (
    <div className='w-full'>
          <Hero/>
          <Process />
          <Progress />
    </div>
  )
}
