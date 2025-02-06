"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
const Sponsorship: React.FC = () => {
  const sponsors = [
    { src: "/images/algozenith.png", alt: "Algozenith" },
    { src: "/images/senior.jpg", alt: "Senior" },
    { src: "/images/fastech.png", alt: "Evo" },
  ];

  return (
    <div id="sponsors" className=" py-16 flex flex-col items-center justify-center w-[90%] mx-auto">
      {/* Section Heading */}
      {/* <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-white  mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Sponsored By
      </motion.h2> */}
      <motion.h1 
                        variants={fadeIn('down', 'spring', 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        className="text-center mb-12 sm:mb-16"
                    >
                        <span className="font-extrabold text-transparent text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            SPONSORS
                        </span>
                    </motion.h1>

      {/* Sponsors Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl shadow-lg backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/30 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              width={160}
              height={80}
              className="object-contain rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsorship;
