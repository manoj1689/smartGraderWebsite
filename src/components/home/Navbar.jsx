import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { FaUser, FaSignInAlt } from 'react-icons/fa'; // Importing icons from react-icons
import logoImage from '../../assets/home/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-lg font-semibold">
          <a href="/">
            <img src={logoImage} alt="Smart Grader Logo" className="h-8" /> {/* Adjust the path to your logo */}
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-900 hover:text-blue-700 transition duration-300">Home</a>
          <a href="#how-it-works" className="text-gray-900 hover:text-blue-700 transition duration-300">How It Works</a>
          <a href="#pricing" className="text-gray-900 hover:text-blue-700 transition duration-300">Pricing</a>
          <a href="#partners" className="text-gray-900 hover:text-blue-700 transition duration-300">Partners</a>
          <a href="#faq" className="text-gray-900 hover:text-blue-700 transition duration-300">FAQ</a>
          <a href="#contact" className="text-gray-900 hover:text-blue-700 transition duration-300">Contact Us</a>
          <a href="#login" className="text-gray-900 hover:text-blue-700 transition duration-300 flex items-center">
            <FaSignInAlt className="mr-2" /> Login
          </a>
          <a href="#signup" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 flex items-center">
            <FaUser className="mr-2" /> Signup
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Navbar;
