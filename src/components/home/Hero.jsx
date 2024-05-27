import React from "react";
import { FaArrowRight } from 'react-icons/fa'; // Importing icon from react-icons
import heroImage from '../../assets/home/hero-image.png'; // Importing the hero image
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="bg-blue-50 my-20 pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cultivate Confidence. Ace Interviews & Assessment.
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-700 mb-8"
          >
            Gain confidence and improve performance with precise feedback. Our platform leverages advanced technology to enhance interview and evaluation processes. Prepare smarter and excel with our AI-powered assessment solutions.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            onClick={()=>navigate("createAccount")}  
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300 flex items-center max-w-max"
          >
            Get Started with SmartGrader <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img src={heroImage} alt="Designed For Interview" className="w-full md:w-3/4" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
