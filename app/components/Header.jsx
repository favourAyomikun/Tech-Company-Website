"use client";

import React, { useState } from "react";
import { FaBars, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import carouselPhoto1 from "../public/carousel-photo1.webp";
import carouselPhoto2 from "../public/carousel-photo2.webp";
import carouselPhoto3 from "../public/carousel-photo3.jpeg";
import Image from "next/image";

const Header = () => {
  // set state to toggle navbar
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the visibility of the navbar
  const toggleNavbar = () => {
    // Toggle the state between open and closed
    setIsOpen(!isOpen);
  };

  return (
    <header id="home">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between px-5 items-center">
          <Link href="/" className="text-2xl font-semibold">
            IT Company
          </Link>
          <button
            className="block lg:hidden text-xl focus:outline-none"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div
            className={`lg:flex items-center ${isOpen ? "block" : "hidden"}`}
          >
            <ul className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0 text-base mt-4 lg:mt-0">
              <li>
                <Link href="#home" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-gray-400">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-gray-400">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel Slider Area */}
      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={3000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-gray-800 p-2 rounded-full text-white"
              >
                <FaArrowLeft size={20} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 bg-gray-800 p-2 rounded-full text-white"
              >
                <FaArrowRight size={20} />
              </button>
            )
          }
        >
          <div className="relative h-[600px]">
            <Image
              src={carouselPhoto1}
              alt="carousel-photo1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-4xl font-bold uppercase">We are a Creative Agency</h2>
                <p className="mt-4 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-6">
                  <Link
                    href="#contact"
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 mr-4"
                  >
                    Contact
                  </Link>
                  <Link
                    href="#about"
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src={carouselPhoto2}
              alt="carousel-photo2"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-4xl font-bold uppercase">
                  We are Creative Developers
                </h2>
                <p className="mt-4 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-6">
                  <Link
                    href="#contact"
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 mr-4"
                  >
                    Contact
                  </Link>
                  <Link
                    href="#about"
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src={carouselPhoto3}
              alt="carousel-photo3"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div>
                <h2 className="text-4xl font-bold uppercase">
                  We Do Design & Development
                </h2>
                <p className="mt-4 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-6">
                  <Link
                    href="#contact"
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 mr-4"
                  >
                    Contact
                  </Link>
                  <Link
                    href="#about"
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </header>
  );
};

export default Header;
