"use client";
import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
    return (
        <div className="pt-16 mx-6">
    <motion.div
    className="flex items-center justify-center bg-opacity-0 mt-40 mb-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}  >
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ms-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Preliminary Team Contest</h3>
                <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 15th, 2025 (2:00PM to 4:30PM)</time>
                <ul role="list" className="marker:text-sky-800 dark:marker:text-sky-300">
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Team Size: </span>2 - 3 Members</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Duration: </span>150 minutes</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Platform: </span>CodeForces</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Eligibility: </span>All Indian Institutes</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Mode: </span>Online</p></li>
                </ul>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">ICPC Style Coding Contest</h3>
                <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 8th, 2025 (4:00PM to 7:00PM)</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Top performers from the online preliminary round will be invited to NIT Rourkela for the on-site finals. Compete in person and showcase your skills in both team and individual contests.</p>
                <ul role="list" className="marker:text-sky-800 dark:marker:text-sky-300">
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Team Size: </span>2 - 3 Members</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Duration: </span>180 minutes</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Platform: </span>CodeForces</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Eligibility: </span>Shortlisted Teams Only</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Mode: </span>Offline</p></li>
                </ul>
            </li>
            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Individual Coding Contest</h3>
                <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 9th, 2025 (2:30PM to 4:30PM)</time>
                <ul role="list" className="marker:text-sky-800 dark:marker:text-sky-300">
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Team Size: </span>1 Member</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Duration: </span>180 minutes</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Platform: </span>CodeForces</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Eligibility: </span>Shortlisted Teams Only</p></li>
                    <li><p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"><span className="font-bold">Mode: </span>Offline</p></li>
                </ul>
            </li>
        </ol>


    </motion.div>
    </div>
    );
}

export default Timeline;