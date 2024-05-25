import React from 'react';
import { useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import institutionsImage from '../../assets/home/institutions-banner.png';
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

const InstitutionsSection = () => {
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
          src={institutionsImage}
          className="w-full rounded-md h-full object-cover"
          alt="Institutions Banner"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 text-slate-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Robust Testing Platform <br /> for Educational Institutions
        </h2>
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Secure Testing Environment</span>
          </div>
          <p className="font-light">Maintain academic integrity with supervised exams.</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Comprehensive Assessments</span>
          </div>
          <p className="font-light">Test a wide range of subjects with customizable questions.</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              loading="lazy"
              src={buttonRoundedTickImage}
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Automated Grading</span>
          </div>
          <p className="font-light">Save time with accurate and fair AI grading.</p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="flex items-center justify-center cursor-pointer self-start px-4 py-2 mt-9 text-sm text-white bg-sky-500 rounded-md border border-sky-500 transition-transform duration-300"
          onClick={()=> navigate('/signUp',{ state: { activeTab:'educational' } })}
        >
          <span>Enhance Academic Assessment</span>
          <FaArrowRight className="ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InstitutionsSection;
