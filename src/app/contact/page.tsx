"use client";
import React, { useEffect } from 'react';
// import { Contact, Navbar, Social, Works } from '@/components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Contact } from '@/components/contact';
import { Back, Social } from '@/components';


const Index: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div >
      <Back />
      <Contact />
      <Social />
    </div>
  );
};

export default Index;
