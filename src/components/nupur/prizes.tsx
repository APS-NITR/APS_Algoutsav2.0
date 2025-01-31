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
        <div className="space-y-8  lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
            
            <div
                className="mx-auto  flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-gray-200 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-6 text-gray-900 xl:p-8 md:order-1">

                <h3 className="text-xl font-normal ">1st Prize</h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">$290</span>
                    
                </div>

                <p className="font-light text-gray-800 sm:text-sm">Yay! You are the Winner</p>
               
                
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-900  text-sm">
                    <li className="flex items-center space-x-3 ">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Participation Certificate</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Unlimited widgets</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>All analytics features</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Lifetime updates</span>
                    </li>
                </ul>

            </div>
            
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 p-6 text-gray-900 xl:p-8 md:order-2">

                <h3 className="text-xl font-normal ">2nd Prize </h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">$190</span>
                    
                </div>

                <p className="font-light text-gray-900 sm:text-sm">Yay! You are the first Runner Up.</p>
                
                
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-900  text-sm">
                    <li className="flex items-center space-x-3 ">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>10,000 visitors</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Unlimited widgets</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>All analytics features</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Lifetime updates</span>
                    </li>
                </ul>

            </div>
            
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 p-6 text-center text-gray-900 xl:p-8">

                <h3 className="text-xl font-normal ">3rd Prize</h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">$90</span>
                    
                </div>

                <p className="font-light text-gray-900 sm:text-sm">Yay! You are the 2nd Runner Up.</p>
                
                
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-900  text-sm">
                    <li className="flex items-center space-x-3 ">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>10,000 visitors</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Unlimited widgets</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>All analytics features</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                       
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Lifetime updates</span>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    </motion.div>
    </div>
    
   
  


  </>
  );
}