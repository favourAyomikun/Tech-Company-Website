"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

export const Navbar = () => {
  // set state to toggle navbar
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the visibility of the navbar
  const toggleNavbar = () => {
    // Toggle the state between open and closed
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between px-5 items-center">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-semibold">
          IT Company
        </Link>
        <button
          className="block lg:hidden text-xl focus:outline-none"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <div className={`lg:flex items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0 text-base mt-4 lg:mt-0">
            {/* Mobile view items */}
            <li className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
              <Link href="#home" className=" hover:text-blue-400">
                Home
              </Link>
            </li>
            <li className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
              <Link href="#about" className=" hover:text-blue-400">
                About
              </Link>
            </li>
            <li className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
              <Link href="#services" className=" hover:text-blue-400">
                Services
              </Link>
            </li>
            <li className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
              <Link href="#team" className=" hover:text-blue-400">
                Team
              </Link>
            </li>
            <li className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
              <Link href="#work" className=" hover:text-blue-400">
                Work
              </Link>
            </li>
            <li className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
              <Link href="#pricing" className=" hover:text-blue-400">
                Pricing
              </Link>
            </li>
            <li className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
              <Link href="#contact" className=" hover:text-blue-400">
                Contact
              </Link>
            </li>
            {/* End of mobile view items */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
