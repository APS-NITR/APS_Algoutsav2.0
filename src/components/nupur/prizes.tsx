"use client";
import React from "react";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedNumberProps {
    value: number;
  }
  const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = value;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / end));
  
        const timer = setInterval(() => {
          start += 100;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, stepTime);
      }
    }, [isInView, value]);
  
    return <span ref={ref}>{count}+</span>;
  };
export default function About() {
  return (
   <>
  
<div  className="flex w-full mt-10 items-center justify-center">
<motion.div
    className="text-center rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}  
  >
    
        <div className="mb-8 lg:mb-12 text-center">
            <h2 className="mb-10 text-white font-black md:text-5xl text-3xl font-montserrat tracking-wider">Takeaways</h2>
        </div>
        <div  className="mx-4 p-8 rounded-3xl border border-gray-500 text-center shadow-2xl backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, rgba(50,50,50,0.8), rgba(200,200,200,0.1))",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)"}}>
                <p className="text-2xl font-black font-gotham text-gray-300 ">Prizes Worth</p>

                <h3 className="text-6xl mt-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-md">
              <AnimatedNumber value={150000} />
            </h3>
            <h3 className="text-4xl mt-1 font-bold bg-clip-text  text-gray-300 drop-shadow-md">
              INR
            </h3>
            
              </div>
<div className="flex items-center justify-center">
   
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
       
        <div className="space-y-8  lg:grid md:grid-cols-2 lg:space-y-0 lg:gap-10">
           
            <div
                className="flex w-full space-y-8 items-center flex-col rounded-3xl border border-gray-500 backdrop-blur-lg shadow-2xl
 p-6 text-gray-300 
                 xl:p-8">

                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-md text-3xl font-semibold ">Team Contest</h2>
                
                
                <div className="mb-8 space-y-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-md  text-sm">
                    <p className="flex flex-col items-center justify-center ">
                       <Image src="/images/1st-prize.png" width={70}
                                          height={70} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-xl font-black">Winners</span>
                        <span className="text-2xl font-black">
                        INR <AnimatedNumber value={39000} /> 
                        </span>
                    </p>

                    <p className="flex flex-col items-center justify-center ">
                       <Image src="/images/2nd-place.png" width={70}
                                          height={70} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-xl font-black">1st Runners Up</span>
                        <span className="text-2xl font-black">
                        INR <AnimatedNumber value={32000} /> 
                        </span>
                    </p>
                    <p className="flex flex-col items-center justify-center ">
                       <Image src="/images/3rd-place.png" width={70}
                                          height={70} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-xl font-black">2nd Runners Up</span>
                        <span className="text-2xl font-black">
                        INR <AnimatedNumber value={23000} /> 
                        </span>
                    </p>
                    <p className="flex flex-col items-center justify-center ">
                       <Image src="/images/hoodie2.png" width={70}
                                          height={70} alt="Flowbite Logo" className=""/>
                        <span className="text-xl font-black">AlgoUtsav Exclusive Merch for every participant.</span>
                        
                    </p>
                    
                    
                </div>

            </div>
            <div
                className="flex w-full space-y-8 items-center flex-col rounded-3xl border border-gray-500 backdrop-blur-lg shadow-2xl
 p-6 text-gray-300 
                 xl:p-8">

                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-md text-3xl font-semibold ">Individual Contest</h2>
                
                
                <div className="mb-8 space-y-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-md  text-sm">
                    <p className="flex flex-col items-center justify-center ">
                       <Image src="/images/1st-prize.png" width={70}
                                          height={70} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-xl font-black">Winner</span>
                        <span className="text-2xl font-black">
                        INR <AnimatedNumber value={24000} /> 
                        </span>
                    </p>

                    <p className="flex flex-col items-center justify-center ">
                       <Image src="/images/2nd-place.png" width={70}
                                          height={70} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-xl font-black">1st Runners Up</span>
                        <span className="text-2xl font-black">
                        INR <AnimatedNumber value={19000} /> 
                        </span>
                    </p>
                    <p className="flex flex-col items-center justify-center ">
                       <Image src="/images/3rd-place.png" width={70}
                                          height={70} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-xl font-black">2nd Runners Up</span>
                        <span className="text-2xl font-black">
                        INR <AnimatedNumber value={13000} /> 
                        </span>
                    </p>
                    <p className="flex flex-col items-center justify-center ">
                       <Image src="/images/hoodie2.png" width={70}
                                          height={70} alt="Flowbite Logo" className=""/>
                        <span className="text-xl font-black">AlgoUtsav Exclusive Merch for every participant.</span>
                        
                    </p>
                    
                    
                </div>

            </div>
            
            
            
        </div>
    </div>
   
    </div>
        
    
    </motion.div>
    </div>
    
   
  


  </>
  );
}