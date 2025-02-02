"use client";
import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
   <>
  
<div  className="flex  items-center justify-center">
<motion.div
    className="text-center rounded-xl p-10 shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}  
  >
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md  lg:mb-12 text-center">
            <h2 className="mb-10 text-4xl font-bold tracking-tight text-white">Takeaways</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
      <div className="bg-transparent border border-white text-white p-6 rounded-xl">
      <h1 className="text-center text-2xl mb-2 font-bold text-gray-400 ">Team Contest</h1>
      <ul className="text-left font-montserrat text-gray-400 list-disc list-inside space-y-2 leading-relaxed  md:text-base">
      
      <li className="flex flex-col gap-1 pl-1">
    <span className="font-semibold text-lg md:text-xl">WINNERS 🥇</span> 
    <span>Rs. <span className="font-semibold text-lg md:text-xl">39,000</span></span>
  </li>
  <li className="flex flex-col gap-1 pl-1">
    <span className="font-semibold text-lg md:text-xl">1st RUNNERS UP 🥈</span> 
    <span>Rs. <span className="font-semibold text-lg md:text-xl">32,000</span></span>
  </li>
  <li className="flex flex-col gap-1 pl-1">
    <span className="font-semibold text-lg md:text-xl">2nd RUNNERS UP 🥉</span> 
    <span>Rs. <span className="font-semibold text-lg md:text-xl">23,000</span></span>
  </li>
        </ul> 
      </div>
      <div className="hidden lg:block h-[250px] w-0.5 bg-neutral-200 dark:bg-gray-600"></div>
      <div className="bg-transparent border border-white text-white p-6 rounded-xl">
      <h1 className="text-center text-2xl mb-2 font-bold text-gray-400 ">Individual Contest</h1>
      <ul className="text-left font-montserrat text-gray-400 list-disc list-inside space-y-2 leading-relaxed  md:text-base">
      
      <li className="flex flex-col gap-1 pl-1">
    <span className="font-semibold text-lg md:text-xl">WINNER 🥇</span> 
    <span>Rs. <span className="font-semibold text-lg md:text-xl">24,000</span></span>
  </li>
  <li className="flex flex-col gap-1 pl-1">
    <span className="font-semibold text-lg md:text-xl">1st RUNNERS UP 🥈</span> 
    <span>Rs. <span className="font-semibold text-lg md:text-xl">19,000</span></span>
  </li>
  <li className="flex flex-col gap-1 pl-1">
    <span className="font-semibold text-lg md:text-xl">2nd RUNNERS UP 🥉</span> 
    <span>Rs. <span className="font-semibold text-lg md:text-xl">13,000</span></span>
  </li>
        </ul> 
        </div>
    </div> 
      
    </div>
    <div className="bg-transparent border border-white text-gray-300 text-xl p-6 rounded-xl">Algoutsav Exclusive Merch will be given along with the prizes to all the participants.</div>    
    
    </motion.div>
    </div>
    
   
  


  </>
  );
}