import React from "react";
import { FaArrowRight } from 'react-icons/fa'; // Importing icon from react-icons
import heroImage from '../../assets/home/hero-image.png'; // Importing the hero image
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { useNavigate } from "react-router-dom";
import HomeLine from "../../assets/home/HomeLine.png"

const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className=" my-10 pt-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0 px-4 ">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex-col items-center"
          >
            <div className="w-full text-6xl font-spline text-slate-800 max-md:max-w-full max-md:text-4xl">
        Cultivate Confidence. Ace Interviews & Assessment.
      </div>
      <img
        loading="lazy"
        src={HomeLine}
        className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
      />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-3 w-full text-lg leading-6  font-spline font-thin  text-neutral-600 max-md:max-w-full"
          >
            Gain confidence and improve performance with precise feedback. Our platform leverages advanced technology to enhance interview and evaluation processes. Prepare smarter and excel with our AI-powered assessment solutions.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            onClick={()=>navigate("createAccount")}  
            className="bg-blue-700 text-white px-6 py-3 mt-6 font-spline text-sm rounded-md hover:bg-blue-800 transition duration-300 flex items-center max-w-max"
          >
            Get Started with SmartGrader <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-7/12 mt-10 flex justify-center"
        >
          <img src={heroImage} alt="Designed For Interview" className="w-full md:w-3/4" />
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
