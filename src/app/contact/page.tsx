"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Explicitly define the component types
const Contact = dynamic(() => import('@/components/contact/Contact').then(mod => mod.Contact), { ssr: false });
const Back = dynamic(() => import('@/components/back/Back').then(mod => mod.Back), { ssr: false });
const Social = dynamic(() => import('@/components/socialMedia/Social').then(mod => mod.Social), { ssr: false });

const Index: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div>
      <Back />
      <Contact />
      <Social />
    </div>
  );
};

export default Index;
