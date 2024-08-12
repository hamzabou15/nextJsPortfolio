"use client"
import { Social } from "@/components";
// import Hero from "@/components/homePage/Hero";
import HomePage from "@/components/homePage/HomePage";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
        <HomePage/>
        <Social/>
    </div>
  );
}
