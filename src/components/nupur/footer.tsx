"use client";
import React from "react";
import Image from "next/image";
//import { AnimatedTooltip } from "../ui/animated-tooltip";
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
            <ul className="flex flex-wrap items-center gap-1  justify-center md:justify-end ">
                <li>
                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGvsFXvbjcTMwAAAZQ2VrZAylI432X-Rc8T6sdGT0z3OVZnNOlOu6lxpREcdp0nNYpai9gPBU-HpMdBWt5pwc-HH7nHfxUVJkhs5mv_RZczxWMc4JwFH2pT2KC6vBnEJA5ZLCE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Faps-nitr%2F" className="hover:underline me-4 md:me-6" target="_blank">
                    <Image src="/images/linkedin.svg" width={30}   height={30} alt="Flowbite Logo" className=""/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/aps.nitr/" className="hover:underline me-4 md:me-6" target="_blank">
                    <Image src="/images/instagram.svg" width={30}   height={30} alt="Flowbite Logo" className=""/>
                    </a>
                </li>
                <li>
                <a href="https://www.threads.net/@aps.nitr" className="hover:underline me-4 md:me-6" target="_blank">
                    <Image src="/images/threads.svg" width={30}   height={30} alt="Flowbite Logo" className=""/>
                    </a>
                </li>
                <li>
                <a href="https://www.youtube.com/@APSNITR" className="hover:underline me-4 md:me-6" target="_blank">
                    <Image src="/images/yt.svg" width={30}   height={30} alt="Flowbite Logo" className=""/>
                    </a>
                </li>
                <li>
                <a href="https://x.com/ApsocietyNitr?mx=24" className="hover:underline me-4 md:me-6" target="_blank">
                    <Image src="/images/x.svg" width={30}   height={30} alt="Flowbite Logo" className=""/>
                    </a>
                </li>
                
            </ul>
        </div>
        
    </div>
</footer>


        </>
    );
}