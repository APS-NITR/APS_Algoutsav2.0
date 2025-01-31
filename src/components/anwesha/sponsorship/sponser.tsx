"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Sponsorship: React.FC = () => {
 

  const currentSponsors = [
    { src: "/images/all.png", alt: "ALL" },
    { src: "/images/hexagon.png", alt: "Groupe All" },
    { src: "/images/evo.png", alt: "Evo" },
    { src: "/images/caneva.png", alt: "Caneva" },
    { src: "/images/haba.png", alt: "Haba" },
    { src: "/images/kiabi.png", alt: "Kiabi" },
    { src: "/images/hula.png", alt: "Hula" },
    { src: "/images/momento.png", alt: "Memento Mori" },
    { src: "/images/bpce.png", alt: "Groupe BPCE" },
    { src: "/images/idruide.png", alt: "Idruide" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div id="sponsers"
      className="bg-cover bg-center py-12 px-6 "
      style={{ backgroundImage: 'url("/backgrounds/sponsors-bg.jpg")'}}
    >
      

      <motion.div
        className="text-center w-[80%] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-white text-4xl m-2 font-bold tracking-wide">
          Sponsored By
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
          {currentSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              transition={{ ...fadeInUp.transition, delay: index * 0.2 }}
              variants={fadeInUp}
              className="p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsorship;
