import React from "react";
import { FaClipboardCheck, FaLaptopCode, FaChartLine } from 'react-icons/fa'; // Importing icons from react-icons
import { motion } from 'framer-motion'; // Importing framer-motion for animations

const features = [
  {
    title: "Select Your Track",
    description: "Act as interviewee, Talent Acquisition Specialist, Training and placement head",
    icon: <FaClipboardCheck className="text-sky-600 w-12 h-12" />
  },
  {
    title: "Create Interview",
    description: "Tailored Questions and setup Interview for candidate quickly",
    icon: <FaLaptopCode className="text-sky-600 w-12 h-12" />
  },
  {
    title: "Review & Improve",
    description: "Gain insights through detailed analytics and reports to enhance your outcomes.",
    icon: <FaChartLine className="text-sky-600 w-12 h-12" />
  }
];

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          How Smart Graders Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-600 mb-12"
        >
          Intuitive. Intelligent. Impactful.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md w-full md:w-1/3 transform hover:shadow-lg transition duration-300"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">{feature.title}</h3>
              <p className="text-gray-700 mt-2 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
