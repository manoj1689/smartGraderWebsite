import React ,{useState,useEffect} from 'react'
import smartLogo from "../assets/images/smart-logo.png"
import { Link,useNavigate } from 'react-router-dom' 
function SideBar() {
    const [activeItem, setActiveItem] = useState('Dashboard');
    const handleItemClick = (item) => {
        setActiveItem(item);
      };
      const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        navigate('/');
      };
  return (
    <div className=" px-10 py-10">
    <div className=" mb-8">
      <Link to ="/signIn/dashboard">
      <img className='h-11' src={smartLogo} alt="smart Grader" />
      </Link>

    </div>
    <div className="flex flex-col">
      <div className="flex gap-5 justify-between self-start px-px text-base">
        <div className="flex gap-3">
          <div className="flex flex-col my-auto">
            <div className="font-light leading-[150%] text-neutral-500">
              Welcome!
            </div>
            <div className="mt-2.5 leading-[100%] text-slate-800">
              {/* {props.individualData.name}  */} Rommy
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          alt="icon"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ab6f2493bc7f6254ec22b4ea860b52cc9ca6fb726427d72283b074d65eb70b9?"
          className="shrink-0 self-start mt-2.5 aspect-[4.35] w-[13px]"
        />
      </div>
      <div className="shrink-0 self-start mt-5 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10" />
      <div
        className={`flex gap-2 mt-7 text-base leading-4 cursor-pointer transition duration-300 ${
          activeItem === 'Dashboard' ? 'text-[#0190C3]' : 'text-neutral-500'
        }`}
        onClick={() => handleItemClick('Dashboard')}
      >
        <div className="flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-square">
          <img
            loading="lazy"
            alt="icon"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8fd369eed5249898922030772c2767223a956d7cbbfec314e96ac763671efb?"
            className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div className="flex-auto my-auto">
          Dashboard
        </div>
      </div>
      <div
        className={`flex gap-2 mt-7 text-base leading-4 cursor-pointer transition duration-300 ${
          activeItem === 'Mock Interviews' ? 'text-[#0190C3]' : 'text-neutral-500'
        }`}
        onClick={() => handleItemClick('Mock Interviews')}
      >
        <img
          loading="lazy"
          alt="icon"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9986a12bb134a1073bac464361a9e56a52cbd38f5581cec938a55959604ee5d?"
          className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
        />
        <div className="flex-auto my-auto">Mock Interviews</div>
      </div>
      <div
        className={`flex gap-2 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
          activeItem === 'Progress Tracker' ? 'text-[#0190C3]' : 'text-neutral-500'
        }`}
        onClick={() => handleItemClick('Progress Tracker')}
      >
        <img
          loading="lazy"
          alt="icon"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea158ca81ca036e0424dd2095b2555f3f16d5b7bf6f55822fc548cd23436bb4?"
          className="shrink-0 self-start aspect-[1.14] w-[17px] transition-transform duration-300 transform hover:scale-110"
        />
        <div className="flex-auto">Progress Tracker</div>
      </div>
      <div
        className={`flex gap-2 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
          activeItem === 'Quick Access' ? 'text-[#0190C3]' : 'text-neutral-500'
        }`}
        onClick={() => handleItemClick('Quick Access')}
      >
        <img
          loading="lazy"
          alt="icon"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/05341026f5ad1893ba1609ad6de1ee0d029b8f640153ce85a8cb046046721d71?"
          className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
        />
        <div className="flex-auto">Quick Access</div>
      </div>
      <button onClick={handleLogout} type="button" className="bg-blue-400 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-500 transition duration-300">
      Logout
    </button>
      <div className="shrink-0 self-start mt-96 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10" />
      <div
        className={`flex gap-2 mt-12 ml-4 text-base leading-4 whitespace-nowrap cursor-pointer transition duration-300 ${
          activeItem === 'Settings' ? 'text-[#0190C3]' : 'text-neutral-500'
        }`}
        onClick={() => handleItemClick('Settings')}
      >
        <img
          loading="lazy"
          alt="icon"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a24349ad5042312e50be0c6d5bcaca1ef4ca22b96ae99f43efb72112df1e7441?"
          className="shrink-0 aspect-square w-[19px] transition-transform duration-300 transform hover:scale-110"
        />
        <div>Settings</div>
      </div>
      <div
        className={`flex gap-1.5 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
          activeItem === 'Help & Support' ? 'text-[#0190C3]' : 'text-neutral-500'
        }`}
        onClick={() => handleItemClick('Help & Support')}
      >
        <img
          loading="lazy"
          alt="icon"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9bf7d7f2cbc11aebaef6ed2889430e122ca8ee6948d0ceabbe6c7bfeb8636b?"
          className="shrink-0 aspect-square w-[21px] transition-transform duration-300 transform hover:scale-110"
        />
        <div className="flex-auto my-auto">Help & Support</div>
      </div>
    </div>
    </div>
  )
}

export default SideBar