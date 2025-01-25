"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
    return (
        <>
         
         <div className="
   flex flex-col items-center justify-center md:mt-48  mt-28 mx-5 ">
      <motion.div 
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
            <Image src="/images/algo.png" width={1000}
   height={1000} alt="Flowbite Logo" className="mb-8"/>
        </motion.div>
        <motion.div 
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        > 
   <div className="max-w-xl text-center"><p>AlgoUtsav is an esteemed event organized by the Algorithmic and Programming Society (APS) of NIT Rourkela, operating under the Technical Society of the Student Activity Centre (SAC), NIT Rourkela</p></div>    
   </motion.div>
   </div>
   <motion.div 
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        > 
   <a
  href="https://example.com/register" 
  target="_blank" 
  rel="noopener noreferrer"
> <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 mt-10">

Register Now 
<svg className="w-4 h-4 ml-2 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
</button></a>
  
</motion.div>       
   </>        
    );
}