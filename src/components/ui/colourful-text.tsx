"use client";
import React from "react";
import { motion } from "motion/react";

export default function ColourfulText({ text }: { text: string }) {
  // Refined Avengers-themed dark and bold colors
  const colors = [
    // "rgb(34, 211, 238)", // Medium purple
    "rgb(37, 99, 235)",   // Dark slate blue
    // "rgb(138, 43, 226)",  // Blue violet
    // "rgb(75, 0, 130)",    // Indigo
    // "rgb(139, 0, 139)",   // Dark magenta
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Smooth color transitions
      const rotatedColors = [...currentColors];
      rotatedColors.push(rotatedColors.shift()!);
      setCurrentColors(rotatedColors);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentColors]);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-serif font-extrabold text-4xl md:text-7xl"
    >
      {char}
    </motion.span>
  ));
}
