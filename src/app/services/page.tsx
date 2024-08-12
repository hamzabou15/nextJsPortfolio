"use client"
import { Back, Progress, Services, Social   } from '@/components'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div>
       <Back/> 
       <Services/> 
       <Social/>
       <Progress/>
    </div>
  )
}

export default Index
