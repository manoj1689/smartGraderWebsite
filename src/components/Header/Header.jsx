import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
import MobileMenu from "../home"
import { FaUser, FaSignInAlt } from 'react-icons/fa'; // Importing icons from react-icons
// import logoImage from '../../assets/home/logo.png';
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
 <>
  <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-lg font-semibold">
          <a href="/">
            {/* <img src={logoImage} alt="Smart Grader Logo" className="h-8" />  */}
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-gray-900 hover:text-blue-700 transition duration-300">Home</a>
          <a href="works" className="text-gray-900 hover:text-blue-700 transition duration-300">How It Works</a>
          <a href="pricing" className="text-gray-900 hover:text-blue-700 transition duration-300">Pricing</a>
          <a href="partners" className="text-gray-900 hover:text-blue-700 transition duration-300">Partners</a>
          <a href="/Evaluate"
  className="text-gray-900 hover:text-blue-700 transition duration-300"
>
  Interview
</a>
          <a
  href="Evaluate"
  className="text-gray-900 hover:text-blue-700 transition duration-300"
>
  Interview
</a>
          {/* <a href="FAQ" className="text-gray-900 hover:text-blue-700 transition duration-300">FAQ</a>
          <a href="contactUs" className="text-gray-900 hover:text-blue-700 transition duration-300">Contact Us</a> */}
          <a href="signIn" className="text-gray-900 hover:text-blue-700 transition duration-300 flex items-center">
            <FaSignInAlt className="mr-2" /> Login
          </a>
          <a href="createAccount" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 flex items-center">
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
 {/* <div className='container mx-auto px-4 py-4 flex flex-row '>
  <div className='basis-1/4 '>
    <img width={179} height={43} src='./images/smartGraderLogo.png' alt="smart Grader" />
  </div>
  <div className='basis-1/2 content-center' >
  <div className='flex justify-center gap-6 font-spline' >
    <span><Link to="/">Home</Link></span>
    <span><Link to="works">How It Works</Link></span>
    <span><Link to="pricing">Pricing</Link></span>
    <span><Link to="partners">Partners</Link></span>
    <span><Link to="FAQ">FAQ</Link></span>
    <span><Link to="contactUs">ContactUs</Link></span>
  </div>

  </div>
  
  <div className='basis-1/4  flex justify-end gap-2'>
    <span><Link to="signIn">SignIn</Link></span>
    <span> <Link to="createAccount">SignUp</Link></span>
  </div>
 </div> */}
 </>
  
  )
}

export default Header