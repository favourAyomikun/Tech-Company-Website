import React from "react";
import { FaCheckSquare, FaCode, FaMobile } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div>
          {/* SECTION TITLE */}
          <div className="w-full text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold">
              About Us
            </h2>
            <span className="block my-2 h-1 w-16 bg-gray-400 mx-auto"></span>
            <div className="mt-4">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                ation Lorem ipsum
                <br />
                dolor sit amet. Veniam quis notru exercit.
              </p>
            </div>
          </div>
        </div>

        {/* ABOUT FEATURES */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FEATURE 1 */}
            <div>
              <div className="bg-blue-600 rounded-full p-3 inline-block">
                <FaMobile className="text-3xl md:text-4xl text-white" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold">Fully Responsive</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                ation Lorem ipsum
              </p>
            </div>
            {/* FEATURE 2 */}
            <div>
              <div className="bg-blue-600 rounded-full p-3 inline-block">
                <FaCode className="text-3xl md:text-4xl text-white" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold">Clean Code</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                ation Lorem ipsum
              </p>
            </div>
            {/* FEATURE 3 */}
            <div>
              <div className="bg-blue-600 rounded-full p-3 inline-block">
                <FaCheckSquare className="text-3xl md:text-4xl text-white" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold">Easy To Customize</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                ation Lorem ipsum
              </p>
            </div>
          </div>
        </div>

        {/* ABOUT TEXT AND EXPERTISE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* ABOUT TEXT */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Welcome to <span className="text-blue-600">IT COMPANY</span>
            </h4>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-600 mb-6">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <a
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
              href="#"
            >
              Read More
            </a>
          </div>

          {/* EXPERTISE */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold mb-6">Our Expertise</h4>
            {/* PROGRESS BARS */}
            <div className="space-y-6">
              {/* Progress Bar 1 */}
              <div>
                <p className="flex justify-between mb-1">
                  <span>Graphic Design</span>
                  <span>90%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              {/* Progress Bar 2 */}
              <div>
                <p className="flex justify-between mb-1">
                  <span>Web Design</span>
                  <span>85%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              {/* Progress Bar 3 */}
              <div>
                <p className="flex justify-between mb-1">
                  <span>Development</span>
                  <span>90%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              {/* Progress Bar 4 */}
              <div>
                <p className="flex justify-between mb-1">
                  <span>WordPress</span>
                  <span>95%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              {/* Progress Bar 5 */}
              <div>
                <p className="flex justify-between mb-1">
                  <span>jQuery</span>
                  <span>80%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
