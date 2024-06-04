import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
const MobileMenu = ({ scrollToSection }) => {
  const navigate=useNavigate()
  return (
    <div className="lg:hidden  z-50 bg-white shadow-md">
      <div className="flex flex-col  font-spline justify-center items-center space-y-4 px-4 py-6">
      <a href="#home" className="text-gray-900 hover:text-blue-700 transition  font-spline duration-300">Home</a>
  <a href="#how-it-works" className="text-gray-900 hover:text-blue-700  font-spline transition duration-300">How It Works</a>
  <a href="#pricing" className="text-gray-900 hover:text-blue-700   font-spline transition duration-300">Pricing</a>
  <a href="#partners" className="text-gray-900 hover:text-blue-700  font-spline transition duration-300">Partners</a>
  <a href="/evaluate"
  className="text-gray-900 flex items-center hover:text-blue-700 transition duration-300"
>
  Interview <span className="px-2"><MdArrowOutward /></span>
</a>
  {/* <a href="#faq" className="text-gray-900 hover:text-blue-700 transition duration-300">FAQ</a> */}
  <div className=' flex flex-col w-full justify-center items-center' >
  <button
  className="bg-white border border-sky-500 max-sm:w-11/12 sm:w-7/12 my-3  text-sky-500 hover:bg-sky-500 hover:text-white font-medium font-spline py-2 px-4 rounded-[1px] transition duration-300 ease-in-out"
  onClick={() => navigate("signIn")}
>
  <span className="text-sky-500">Sign In</span>
</button>

<button
  className="bg-sky-500 text-white font-medium font-spline py-2 px-4 max-sm:w-11/12 sm:w-7/12 my-3 rounded-[1px] transition duration-300 ease-in-out  "
  onClick={() => navigate("createAccount")}
>
  <span>Sign Up</span>
</button>



  </div>
      
      </div>
    </div>
  );
};

export default MobileMenu;
