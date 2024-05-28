import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import smartLogo from '../assets/images/smart-logo.png';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FaLaptopMedical } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsQuestionCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";

function SideBar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('emailId');
    localStorage.removeItem('accessToken')
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
    className={`flex flex-col  overflow-y-auto h-full shadow-md bg-sky-100  ${
      isSidebarOpen ? 'w-64' : 'w-20'
    } md:hover:w-64 fixed z-50`}
    onMouseEnter={() => setIsSidebarOpen(true)}
    onMouseLeave={() => setIsSidebarOpen(false)}
  
    style={{ scrollBehavior: 'smooth' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        
        <GiHamburgerMenu color='grey' size={20} />
        
        <button className="md:hidden" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col items-center justify-center mt-6 space-y-4">
          <div
            className={`flex items-center w-full p-4 text-base cursor-pointer transition duration-300 ${
              activeItem === 'Dashboard' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Dashboard')}
          >
            <MdOutlineDashboardCustomize className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-4">Dashboard</span>}
          </div>
          <div
            className={`flex items-center w-full p-4 text-base cursor-pointer transition duration-300 ${
              activeItem === 'Mock Interviews' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Mock Interviews')}
          >
            <FaLaptopMedical className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-4">Mock Interviews</span>}
          </div>
          <div
            className={`flex items-center w-full p-4 text-base cursor-pointer transition duration-300 ${
              activeItem === 'Progress Tracker' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Progress Tracker')}
          >
            <GiProgression className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-4">Progress Tracker</span>}
          </div>
          <div
            className={`flex items-center w-full p-4 text-base cursor-pointer transition duration-300 ${
              activeItem === 'Quick Access' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Quick Access')}
          >
            <BsGraphUpArrow className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-4">Quick Access</span>}
          </div>
          <div
            className={`flex items-center w-full p-4 text-base cursor-pointer transition duration-300 ${
              activeItem === 'Settings' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Settings')}
          >
            <IoSettingsOutline className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-4">Settings</span>}
          </div>
          <div
            className={`flex items-center w-full p-4 text-base cursor-pointer transition duration-300 ${
              activeItem === 'Help & Support' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Help & Support')}
          >
            <BsQuestionCircle className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-4">Help & Support</span>}
          </div>
        </div>
        <div className="flex items-center justify-center mt-60 md:mt-40 mb-6">
          
        <div
            className={`flex items-center w-full p-4 text-base cursor-pointer transition duration-300 ${
              activeItem === 'Help & Support' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick(handleLogout)}
          >
            <AiOutlineLogout className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-4">Logout</span>}
            </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

