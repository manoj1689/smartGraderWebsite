import React from 'react';
import { motion } from 'framer-motion';
import partnerLogo1 from '../../assets/home/logo_1.png';
import partnerLogo2 from '../../assets/home/logo_2.png';
import partnerLogo3 from '../../assets/home/logo_3.png';
import partnerLogo4 from '../../assets/home/logo_4.png';
import partnerLogo5 from '../../assets/home/logo_5.png';
import partnerLogo6 from '../../assets/home/logo_6.png';
import partnerLogo7 from '../../assets/home/logo_7.png';
import partnerLogo8 from '../../assets/home/logo_8.png';

const Partners = () => {
  const partnerLogos = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo6, partnerLogo7, partnerLogo8];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium font-spline text-sky-600">Trusted by Leading Entities</h2>
          <p className="text-lg text-gray-700 font-spline mt-2">Join our network of esteemed partners who have revolutionized their processes with SmartGrader.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={logo} alt={`Partner logo ${index + 1}`} className="h-16 transition-transform duration-300 hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
