"use client";
import React from "react";
import Image from "next/image";
export default function Background() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden">
        <Image src="/images/bg.png" width={1920}  height={1080} alt="background" className="object-cover w-full h-screen"/>
        <div className="absolute inset-0 bg-black/75 backdrop-blur-xs"></div>
        </div>
    );
}