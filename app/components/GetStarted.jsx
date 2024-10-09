import React from 'react'
import Link from 'next/link';

const GetStartedSection = () => {
    return (
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <div className="text-center">
            <h4 className="text-xl md:text-2xl font-semibold text-gray-700">
              We Are Here to Assist You
            </h4>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4">
              Find the Perfect Solution for Your Business
            </h2>
            <Link
              className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-indigo-700 transition duration-300"
              href="#home"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default GetStartedSection;
