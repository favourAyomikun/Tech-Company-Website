import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import work_image1 from '../public/work-image1.jpg'
import work_image2 from '../public/work-image2.jpg'
import work_image3 from '../public/work-image3.jpg'
import work_image4 from '../public/work-image4.jpg'
import work_image5 from '../public/work-image5.jpg'
import work_image6 from '../public/work-image6.jpg'

const WorkSection = () => {
  const works = [
    {
      img: work_image1,
      title: "Project Name 1",
      category: "Development",
    },
    {
      img: work_image2,
      title: "Project Name 2",
      category: "Development",
    },
    {
      img: work_image3,
      title: "Project Name 3",
      category: "Development",
    },
    {
      img: work_image4,
      title: "Project Name 4",
      category: "Development",
    },
    {
      img: work_image5,
      title: "Project Name 5",
      category: "Development",
    },
    {
      img: work_image6,
      title: "Project Name 6",
      category: "Development",
    },
  ];

  return (
    <section id="work" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Our Awesome Work</h2>
          <span className="block my-2 h-1 w-16 bg-gray-400 mx-auto"></span>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elitsed ation
            Lorem ipsum
            <br />
            dolor sit amet. Veniam quis notru exercit.
          </p>
        </div>

        <div className="mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="relative group overflow-hidden"
            >
              <Image
                src={work.img}
                alt={work.title}
                height={400}
                width={400}
                className="w-full h-72 object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
              />
              <Link
                href={work.img}
                className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
              >
                <FaExternalLinkAlt className="text-white text-2xl" />
                <div className="text-center text-white ml-4">
                  <h5 className="text-xl font-bold">{work.title}</h5>
                  <p>{work.category}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
