"use client";
import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
 
   <div className="flex flex-col items-center justify-center h-screen w-full" id="about">
       <motion.div
    className="text-center rounded-xl p-10 shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}  
  >
    <h1 className="text-2xl md:text-3xl mb-10 font-semibold text-gray-500 dark:text-gray-400 font-montserrat" >About <span className="text-3xl md:text-5xl font-extrabold dark:text-white font-montserrat ">ALGOUTSAV</span></h1>
    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mx-2 text-center md:text-left md:mx-20 font-gotham">AlgoUtsav is an esteemed event organized by the Algorithmic and Programming Society (APS) of NIT Rourkela, operating under the Technical Society of the Student Activity Centre (SAC), NIT Rourkela. This ICPC-style competition is meticulously designed to challenge your problem-solving prowess through a diverse array of competitive programming problems. Complementing the contest are inspiring guest sessions, entertaining activities, and exciting giveaways.</p>
  </motion.div>

  </div>
  
    

  );
}