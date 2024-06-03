import React from 'react';
import educationPerson from '../../assets/images/educational-person.png';


function NavBar() {
  return (
    <div className="bg-blue-500 text-white p-4 fixed w-full top-0 lg:hidden">
      Mobile Navigation Bar
    </div>
  );
}

function SideBar() {
  return (
    <div className="bg-gray-800 text-white p-4 fixed top-0 h-full w-64 hidden lg:block">
      Sidebar
    </div>
  );
}

function MainContent() {
  return (
    <div className="p-4 mt-16 lg:ml-64">
      <h1 className="text-2xl">Main Content Area</h1>
      <p>This is where your main content will go.</p>
    </div>
  );
}
function Practise() {
  return (
    <div className="p-4">
  <div>
      <NavBar />
      <SideBar />
      <MainContent />
    </div>
  </div>
  );
}

export default Practise;
