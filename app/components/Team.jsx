import Image from "next/image";
import Link from "next/link";
import React from "react";
import team1 from '../public/team1.png'
import team2 from '../public/team2.png'
import team3 from '../public/team3.webp'

import { FaFacebook, FaTwitter, FaSkype, FaLinkedin } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Web Developer",
      imageUrl: team1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Favour Doe",
      role: "Graphic Designer",
      imageUrl: team2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitsed.",
    },
    {
      name: "Jones Stella",
      role: "Robotics Engineer",
      imageUrl: team3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitsed.",
    },
  ];

  return (
    <section id="team" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
          <span className="block my-2 h-1 w-16 bg-gray-400 mx-auto"></span>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elitsed ation
            Lorem ipsum
            <br />
            dolor sit amet. Veniam quis notru exercit.
          </p>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:shadow-xl hover:border hover:border-blue-500 border-transparent"
            >
              <Image
                height={400}
                width={400}
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-[300px] object-center object-cover mb-4 rounded-lg"
              />
              <h4 className="text-xl font-semibold text-blue-600">
                {member.name}
              </h4>
              <h6 className="text-gray-500 font-semibold text-base mb-4 uppercase">{member.role}</h6>
              <p className="text-gray-500 mb-4">{member.description}</p>
              <ul className="flex justify-center space-x-4 text-lg text-gray-600">
                <li>
                  <Link href="#">
                    <FaFacebook className="hover:text-blue-600 transition-colors" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaTwitter className="hover:text-blue-400 transition-colors" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaSkype className="hover:text-blue-300 transition-colors" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaLinkedin className="hover:text-blue-300 transition-colors" />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
