import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import logoImage from '../../assets/home/logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-5 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" className="text-white hover:text-sky-500 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-sky-500 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://google.com" className="text-white hover:text-sky-500 transition duration-300">
            <FaGoogle />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-sky-500 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-sky-500 transition duration-300">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" className="text-white hover:text-sky-500 transition duration-300">
            <FaGithub />
          </a>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm font-light leading-7">
            © Copyrights 2024 All Rights Reserved Smart Graders
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
