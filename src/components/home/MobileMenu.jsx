import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ scrollToSection }) => {
  const navigate=useNavigate()
  return (
    <div className="md:hidden  z-50 bg-white shadow-md">
      <div className="flex flex-col  font-spline justify-center items-center space-y-4 px-4 py-6">
      <a href="#home" className="text-gray-900 hover:text-blue-700 transition  font-spline duration-300">Home</a>
  <a href="#how-it-works" className="text-gray-900 hover:text-blue-700  font-spline transition duration-300">How It Works</a>
  <a href="#pricing" className="text-gray-900 hover:text-blue-700   font-spline transition duration-300">Pricing</a>
  <a href="#partners" className="text-gray-900 hover:text-blue-700  font-spline transition duration-300">Partners</a>
  <div className='flex flex-row justify-around w-full'>
  <button
  className="bg-sky-500 hover:bg-sky-700 text-white font-medium  font-spline py-2 px-4 rounded-[2px] transition duration-300 ease-in-out"
  onClick={() => navigate("signIn")}
>
  Login
</button>
<button
  className="bg-green-500 hover:bg-green-700 text-white font-medium  font-spline py-2 px-4 rounded-[2px] transition duration-300 ease-in-out ml-4"
  onClick={() => navigate("createAccount")}
>
  Signup
</button>


  </div>
      
      </div>
    </div>
  );
};

export default MobileMenu;
