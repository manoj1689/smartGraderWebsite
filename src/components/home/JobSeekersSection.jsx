import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate} from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import seekersImage from '../../assets/home/job-seekers-banner.png';
import buttonRoundedTickImage from '../../assets/home/rounded-tick-icon.png';

const cardVariants = {
  offscreen: {
    y: 100,
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

const JobSeekersSection = () => {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.4 }} 
      className="container mx-auto flex flex-col md:flex-row gap-5 max-w-[1005px] px-4"
      variants={cardVariants}
      style={{ marginBottom: '20px' }} // Added style for margin-bottom
    >
      <div className="w-full md:w-1/2 flex items-center">
        <motion.img
          loading="lazy"
          src={seekersImage}
          className="w-full rounded-md h-full object-cover"
          alt="Job Seekers Banner"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 text-slate-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Tailored Interview <br /> Preparation for Job Seekers
        </h2>
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Realistic Mock Interviews</span>
          </div>
          <p className="font-light">Experience job-like interview scenarios and questions.</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">AI Feedback</span>
          </div>
          <p className="font-light">Receive instant, AI-driven feedback on your answers and delivery.</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Progress Tracking</span>
          </div>
          <p className="font-light">Watch your interview skills improve with detailed analytics.</p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="flex items-center cursor-pointer justify-center self-start px-4 py-2 mt-9 text-sm text-white bg-sky-500 rounded-md border border-sky-500 transition-transform duration-300"
          onClick={()=> navigate('/signUp',{ state: { activeTab:'individual' } })}
        >
          <span>Start Preparing Today</span>
          <FaArrowRight className="ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JobSeekersSection;
