"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import carouselPhoto1 from "../public/carousel-photo1.webp";
import carouselPhoto2 from "../public/carousel-photo2.webp";
import carouselPhoto3 from "../public/carousel-photo3.jpeg";
import Image from "next/image";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <header id="home">
      {/* Navbar */}
      <Navbar />

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
                <h2 className="text-4xl font-bold uppercase">
                  We are a Creative Agency
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
