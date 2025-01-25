import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Ensure you have 'next/link' for navigation.
import { FaQuestionCircle, FaLink, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import different icons

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the maximum number of members in a team allowed?",
      answer: "A maximum of 2-3 members are allowed in a team as it will be an ICPC-style contest.",
    },
    { question: "Question 2?", answer: "Answer to question 2." },
    { question: "Question 3?", answer: "Answer to question 3." },
    { question: "Question 4?", answer: "Answer to question 4." },
    { question: "Question 5?", answer: "Answer to question 5." },
  ];

  const links = [
    { label: "Visit FAQ Center", url: "/" }, // Link to FAQ center
    { label: "Register Now", url: "/register" }, // Link to Register page
    { label: "Ask for More Help", url: "/" }, // Link to Home or another help page
  ];

  return (
    <div className="flex justify-center bg-gradient-to-b from-[#090c29] to-[#121a41] py-10">
      <div className="w-[80%] flex flex-col md:flex-row items-start gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-5xl font-bold text-white my-4 flex items-center">
            Frequently Asked Questions
            <FaQuestionCircle className="ml-3 text-green-400" size={35} /> {/* Icon added */}
          </h2>
          <div className="space-y-4">
            {links.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.url}>
                  <div
                    className="w-full flex items-center justify-between p-4 text-lg font-semibold bg-[white] text-[black] hover:bg-[cyan] rounded-lg shadow-md"
                  >
                    <span className="flex items-center gap-2">
                      <FaLink size={20} className="text-blue-500" /> {/* Link icon */}
                      {link.label}
                    </span>
                    <span>➔</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 w-full space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow-md ${openIndex === index ? "bg-purple-600" : "bg-gray-800"} text-white cursor-pointer`}
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />} {/* Chevron icon */}
                </motion.span>
              </div>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm mt-2">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
