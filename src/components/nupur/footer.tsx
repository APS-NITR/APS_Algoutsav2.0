"use client";
import React from "react";
import Image from "next/image";
export default function Footer() {
    return (
        <>
        

<footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 mx-2 ">
    <div className="w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-center md:justify-start md:ml-24 mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src="/images/logo.png" width={50}
                   height={50} alt="Flowbite Logo" className=""/>
                     <div
    className="inline-block h-[100px] min-h-[1em] w-0.5  bg-neutral-200 dark:bg-gray-600"></div>
                   <Image src="/images/algoutsavlogo.png" width={60}
                   height={60} alt="Flowbite Logo" className=""/>
                
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center md:justify-end ">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        
    </div>
</footer>


        </>
    );
}