import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import organizationImage from '../../assets/home/organization-banner.png';
import buttonRoundedTickImage from '../../assets/home/rounded-tick-icon.png';

const cardVariants = {
  offscreen: {
    y: 150,
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
  return (
    <motion.div 
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.8 }} 
      className="w-full flex flex-col lg:flex-row-reverse items-center bg-sky-50 rounded-md py-20 px-4 lg:px-20"
      variants={cardVariants}
      style={{ marginBottom: '20px' }} // Added style for margin-bottom
    >
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
        <motion.img
          loading="lazy"
          src={organizationImage}
          className="w-full rounded-md h-full object-cover"
          alt="Organization Banner"
        />
      </div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 text-slate-800 items-center lg:items-start lg:pr-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-center lg:text-left">
          AI-Powered Hiring for <br /> Organizations
        </h2>
        <div className="mt-8 space-y-4 text-center lg:text-left">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Efficient Screening</span>
          </div>
          <p className="font-light">Quickly identify the best candidates with AI-driven insights.</p>
          <div className="flex items-center gap-2 mt-4 justify-center lg:justify-start">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Customizable Interviews</span>
          </div>
          <p className="font-light">Tailor interview questions to fit your company’s needs.</p>
          <div className="flex items-center gap-2 mt-4 justify-center lg:justify-start">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">In-depth Analytics</span>
          </div>
          <p className="font-light">Make informed hiring decisions with comprehensive reporting.</p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="flex items-center justify-center self-center lg:self-start px-4 py-2 mt-9 text-sm text-white bg-sky-500 rounded-md border border-sky-500 transition-transform duration-300"
        >
          <span>Optimize Your Hiring Process</span>
          <FaArrowRight className="ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrganizationsSection;
