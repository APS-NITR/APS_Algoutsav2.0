"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Sponsorship: React.FC = () => {
  const pastSponsors = [
    { src: "/images/walmart.png", alt: "Walmart" },
    { src: "/images/cisco.png", alt: "Cisco" },
    { src: "/images/volvo.png", alt: "Volvo" },
    { src: "/images/deloitte.png", alt: "Deloitte" },
    { src: "/images/okta.png", alt: "Okta" },
  ];

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
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-gray-300 text-sm uppercase tracking-wide">
          Past Year Sponsors
        </h2>
        <div className="flex justify-center items-center space-x-6 mt-4">
          {pastSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              transition={{ ...fadeInUp.transition, delay: index * 0.2 }}
              variants={fadeInUp}
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={80}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-center"
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
