"use client";
import React, { useEffect } from 'react';
import { Navbar, Social, Works } from '@/components';
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
      <Works />
      <Social />
    </div>
  );
};

export default Index;
