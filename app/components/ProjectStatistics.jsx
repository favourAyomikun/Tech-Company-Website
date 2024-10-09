import React from 'react';
import { FaThumbsUp, FaUsers, FaClock, FaCoffee } from 'react-icons/fa';

const ProjectStatisticsSection = () => {
  const stats = [
    {
      icon: <FaThumbsUp />, 
      count: 1200,
      label: 'Project Complete',
    },
    {
      icon: <FaUsers />,
      count: 600,
      label: 'Happy Customers',
    },
    {
      icon: <FaClock />,
      count: 800,
      label: 'Working Hours',
    },
    {
      icon: <FaCoffee />,
      count: 400,
      label: 'Cups of Coffee',
    },
  ];

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl md:text-4xl text-blue-500 flex justify-center mb-4">{stat.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{stat.count}</h2>
              <h6 className="text-gray-600 text-md mt-2">{stat.label}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStatisticsSection;