"use client"
import { Back, Estimate, Social } from '@/components'
import React, { useEffect } from 'react'
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Index: React.FC = () => {

    
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
    return (
        <MantineProvider
        >
            <Back/>
            <Estimate />
            <Social/>
        </MantineProvider>

    )
}

export default Index
