import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'; // Importing icons from react-icons

const Pricing = () => {
  const pricingPlans = [
    {
      plan: "Individual",
      price: "Free",
      features: ["Lorem ipsum dolor", "Nulla ornare maximus", "Nulla molestie"]
    },
    {
      plan: "Education Institutes",
      price: "$599 / Month",
      features: ["Lorem ipsum dolor", "Nulla ornare maximus", "Nulla molestie"]
    },
    {
      plan: "Startups",
      price: "$299 / Month",
      features: [
        "Everything in Basic Plan",
        "Lorem ipsum dolor",
        "Nulla ornare maximus",
        "Aliquam at posuere",
        "Nunc ultrices accumsan",
        "Nulla ornare maximus",
        "Nulla molestie"
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-600">Transparent Pricing for Every Need</h2>
          <p className="text-lg text-gray-700 mt-2">Choose a plan that fits your needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((pricing, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:bg-sky-50 transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ minHeight: '400px' }} // Set a minimum height for consistent card size
            >
              <div>
                <h3 className="text-xl font-bold mb-4 text-sky-600 text-left">{pricing.plan}</h3>
                <p className="text-2xl font-bold mb-4 text-gray-900 text-left">{pricing.price}</p>
                <ul className="mb-4 text-gray-700 text-left">
                  {pricing.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <FaCheckCircle className="text-sky-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#get-started"
                className="bg-sky-600 text-white px-4 py-2 rounded-md flex items-center justify-center transition-transform duration-300 mt-auto"
              >
                <span>Get Started</span>
                <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
