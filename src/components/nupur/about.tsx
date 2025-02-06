"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
 
const words = `AlgoUtsav is an esteemed event organized by the Algorithmic and Programming Society (APS) of NIT Rourkela, operating under the Technical Society of the Student Activity Centre (SAC), NIT Rourkela. This ICPC-style competition is meticulously designed to challenge your problem-solving prowess through a diverse array of competitive programming problems. Complementing the contest are inspiring guest sessions, entertaining activities, and exciting giveaways.
`;

export default function About() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full md:w-[90%] m-auto mt-10"
      id="about"
    >
      <motion.div
        className="text-center rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Updated heading with a fresh color combination */}
        <h2 className="mt-6 md:mt-0 font-display text-3xl sm:text-4xl">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white">
            About
          </span>{" "}
          <span className="font-extrabold text-transparent text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
            Algoutsav
          </span>
        </h2>

        <div className="mt-4">
          <TextGenerateEffect duration={2} filter={false} words={words} />
        </div>

        <a
          href="https://chat.whatsapp.com/J5AaMIMsK0Q6FYRRtmPrlM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-wrap items-center gap-2 mb-10 justify-center font-semibold text-gray-500 dark:text-gray-400 mt-10 hover:underline"
        >
          <span className="text-base md:text-xl">Join Our Whatsapp Community</span>
          <Image
            src="/images/wp.svg"
            width={30}
            height={30}
            alt="WhatsApp Logo"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
          />
        </a>
      </motion.div>
    </div>
  );
}
