"use client";
import React, { useState } from "react";
import "flowbite";
import Link from "next/link";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full shadow-md bg-gray-700 mx-2 md:mx-5 z-50 mt-5 rounded-full border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            alt="Flowbite Logo"
            className="mx-2 md:mx-10"
          />

          {/* Desktop Navigation Options */}
          <div className="hidden md:flex space-x-6">
            <Link href="#about" legacyBehavior>
              <a className="text-white hover:text-blue-500">About AU</a>
            </Link>
            <a
              href="#"
              className="text-white hover:text-blue-500"
            >
              Stats 2024
            </a>
            <a
              href="#sponsers"
              className="text-white hover:text-blue-500"
            >
              Sponsers
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-blue-500"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500"
            >
              FAQs
            </a>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in
            </button>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={24}
                color="#fff"
                rounded
              />
            </div>
          </div>

          {/* Sliding Mobile Dropdown Menu */}
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-gray-700 md:hidden z-30"
            >
              <ul className="flex flex-col p-4 font-medium border border-gray-100 rounded-lg bg-gray-700">
                <li>
                  <Link href="#about" legacyBehavior>
                    <a
                      className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      aria-current="page"
                    >
                      About AU
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Stats 2024
                  </a>
                </li>
                <li>
                  <a
                    href="#sponsers"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Sponsers
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
