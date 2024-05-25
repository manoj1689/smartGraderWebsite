import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import smartLogo from "../../../assets/images/smart-logo.png"
import individualPerson from "../../../assets/images/individual-person.png"
import organizationPerson from "../../../assets/images/organization-person.png"
import educationalPerson from "../../../assets/images/educational-person.png"
import educationSticker from "../../../assets/persons/education-sticker.png"
import organisationSticker from "../../../assets/persons/organisation-sticker.png"
import individualSticker from "../../../assets/persons/individul-sticker.png"
function CreateAccount() {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);
  const [activeTab, setActiveTab] = useState('individual');

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
};
  return (
    <div className="container mx-auto  px-4 py-4 flex flex-col lg:flex-row">
       <div>
          <div className=" flex  lg:hidden  gap-4 items-start text-neutral-500 max-md:flex-wrap">
            <Link to="/">
              <img
                width={179}
                height={43}
                src={smartLogo}
                alt="smart Grader"
              />
            </Link>

            <div className="shrink-0 mt-2.5 w-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10 h-[33px]" />
            <div className="flex-auto mt-3 text-sm leading-5">
              A brief, catchy phrase that <br />
              encapsulates the SmartGrader mission.
            </div>
          </div>
        </div>
      <div className="w-full order-2 lg:order-1 lg:w-1/2">
        <div>
          <div className="flex max-lg:hidden  gap-4 items-start text-neutral-500 max-md:flex-wrap">
            <Link to="/">
              <img
                width={179}
                height={43}
                src={smartLogo}
                alt="smart Grader"
              />
            </Link>

            <div className="shrink-0 mt-2.5 w-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10 h-[33px]" />
            <div className="flex-auto mt-3 text-sm leading-5">
              A brief, catchy phrase that <br />
              encapsulates the SmartGrader mission.
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-40 md:w-5/6 w-full">
          <div className="text-2xl font-semibold md:text-4xl leading-8  text-slate-800 max-md:max-w-full">
            Signup with SmartGrader
          </div>
          <div
             className={`flex flex-col justify-center px-8 py-7 mt-8 bg-white rounded-md border ${activeTab === 'individual' ? 'border-sky-500' : 'border-black border-opacity-10'} hover:bg-sky-50 hover:rounded-md border hover:border-sky-500 border-solid max-md:pl-5 max-md:max-w-full cursor-pointer`}
             onClick={() => handleTabClick('individual')}

          >
            <div className="flex gap-5 max-md:flex-wrap">
              <img
                loading="lazy"
                alt="individualSticker"
                src={individualSticker}
                className="shrink-0 self-start w-12 aspect-[0.94]"
              />
              <div className="flex flex-col">
                <div className="text-2xl text-slate-800">Individual User</div>
                <div className="mt-1.5 text-base font-light leading-6 text-neutral-500">
                  I am a candidate and want to test my skills through mock
                  interviews.
                </div>
              </div>
            </div>
          </div>
          <div
           className={`flex flex-col justify-center px-8 py-7 mt-5 bg-white rounded-md border ${activeTab === 'organization' ? 'border-sky-500' : 'border-black border-opacity-10'} hover:bg-sky-50 hover:rounded-md border hover:border-sky-500 border-solid max-md:pl-5 max-md:max-w-full cursor-pointer`}
           onClick={() => handleTabClick('organization')}
          >
            <div className="flex gap-5 max-md:flex-wrap">
              <img
                loading="lazy"
                alt="organisationSticker"
                src={organisationSticker}
                className="shrink-0 self-start w-12 aspect-square"
              />
              <div className="flex flex-col">
                <div className="text-2xl text-slate-800">Organization</div>
                <div className="mt-1.5 text-base font-light leading-6 text-neutral-500">
                  I am an organization and want to outsource my interviews
                </div>
              </div>
            </div>
          </div>
          <div
              className={`flex flex-col justify-center px-8 py-7 mt-5 bg-white rounded-md border ${activeTab === 'educational' ? 'border-sky-500' : 'border-black border-opacity-10'} hover:bg-sky-50 hover:rounded-md border hover:border-sky-500 border-solid max-md:pl-5 max-md:max-w-full cursor-pointer`}
              onClick={() => handleTabClick('educational')}
          >
            <div className="flex gap-5 max-md:flex-wrap">
              <img
                loading="lazy"
                alt="educationSticker"
                src={educationSticker}
                className="shrink-0 self-start w-12 aspect-square"
              />
              <div className="flex flex-col">
                <div className="text-2xl text-slate-800">
                  Educational Institution
                </div>
                <div className="mt-1.5 text-base font-light leading-6 text-neutral-500">
                  I am a candidate and want to test my skills through mock
                  interviews.
                </div>
              </div>
            </div>
          </div>
          <button
            className={`flex justify-center items-center px-4 py-5 mt-8 text-sm text-white rounded-md border border-sky-500 border-solid max-md:px-5 max-md:max-w-full focus:outline-none ${
              isPressed ? "bg-sky-600" : "bg-sky-500"
            }`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={()=> navigate('/signUp',{ state: { activeTab } })}
          >
            <div className="flex gap-2.5 px-px">
              <span>Create an Account</span>
              <span>
              <FiArrowUpRight size={20} />
              </span>
            
            </div>
          </button>
        </div>
      </div>

      <div className="w-full order-1 lg:order-2 lg:w-1/2  flex justify-center items-end">
        <div className="mt-10">
          {activeTab === "individual"&& (
            <img
              src={individualPerson}
              alt="person"
              width={443}
              height={380}
            />
          )}
          { activeTab === "organization"&& (
            <img
              src={organizationPerson}
              alt="person"
              width={443}
              height={380}
            />
          )}
          { activeTab === "educational" && (
            <img
              src={educationalPerson}
              alt="person"
              width={443}
              height={380}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
