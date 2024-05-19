import React from 'react';

const MobileMenu = ({ scrollToSection }) => {
  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="flex flex-col space-y-4 px-4 py-6">
        {["How It Works", "Pricing", "Partners", "FAQ", "Contact Us", "Login", "Signup"].map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, "-"))}
            className="hover:text-blue-600 transition duration-300 text-gray-700"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
