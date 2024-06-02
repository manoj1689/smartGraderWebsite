import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate} from "react-router-dom";
import organizationImage from '../../assets/home/Organisation-Banner.png';
import buttonRoundedTickImage from '../../assets/home/rounded-tick-icon.png';
import HomeLine from "../../assets/home/HomeLine.png"
const cardVariants = {
  offscreen: {
    y:100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

const OrganizationsSection = () => {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.4 }} 
      className="container mx-auto   flex flex-col  max-w-[1250px] md:flex-row-reverse items-center  rounded-md  px-4 py-4"
      // className="container mx-auto flex flex-col md:flex-row gap-5 max-w-[1005px] px-4"
      variants={cardVariants}
      style={{ marginBottom: '20px' }} // Added style for margin-bottom
    >
      <div className="w-full md:w-1/2 flex items-center ">
        <motion.img
          loading="lazy"
          src={organizationImage}
          className="w-full rounded-md h-full lg:p-16  object-cover "
          alt="Organization Banner"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 text-slate-800 px-4 py-4">
        <h2 className="text-3xl md:text-4xl font-spline font-medium my-4 leading-tight">
          AI-Powered Hiring for <br /> Organizations
        </h2>
        <img
        loading="lazy"
        src={HomeLine}
        className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
      />
        <div className="mt-8 space-y-4 text-left lg:text-left">
          <div className="flex items-center gap-2 lg:justify-start">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium font-spline text-gray-900 ">Efficient Screening</span>
          </div>
          <p className="font-light font-spline text-gray-700">Quickly identify the best candidates with AI-driven insights.</p>
          <div className="flex items-center gap-2 mt-4  lg:justify-start">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium font-spline text-gray-900 ">Customizable Interviews</span>
          </div>
          <p className="font-light font-spline text-gray-700">Tailor interview questions to fit your company’s needs.</p>
          <div className="flex items-center gap-2 mt-4 lg:justify-start">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium font-spline text-gray-900 ">In-depth Analytics</span>
          </div>
          <p className="font-light font-spline text-gray-700">Make informed hiring decisions with comprehensive reporting.</p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="flex items-center cursor-pointer justify-center self-start   w-2/3 lg:w-1/2 py-2 mt-9  text-sm text-white bg-sky-500 rounded-md border border-sky-500 transition-transform duration-300"
          onClick={()=> navigate('/signUp',{ state: { activeTab:'organization' } })}
        >
          <span>Optimize Your Hiring Process</span>
          <FaArrowRight className="ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrganizationsSection;
