import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import smartLogo from "../../assets/images/smart-logo.png"
const SignUp = () => {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };
  const location = useLocation();
  const { activeTab } = location.state || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    user_type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams(formData);
      const queryString = queryParams.toString();
      const url = `http://34.131.249.177:8000/users/signup?${queryString}`;
  
      console.log("Constructed URL:", url);
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Account created successfully
        //alert("Account created successfully!");
       navigate('/signUp/selectInterest',{state:{activeTab}})
        // You can redirect the user to another page or perform any other action here
      } else {
        // Account creation failed
        alert("Account creation failed!");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      alert("An error occurred while creating the account.");
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    let user_type = "";
    if (activeTab === "individual") {
      user_type = "U";
    } else if (activeTab === "organization") {
      user_type = "O";
    } else if (activeTab === "educational") {
      user_type = "I";
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      user_type: user_type,
    }));
  };
  
  return (
    <>
      <div className="container mx-auto h-screen px-4 py-4 flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2  flex justify-center items-center">
          {activeTab === "individual" && (
            <div className="flex flex-col justify-center px-8 py-7 mt-8 bg-white rounded-md">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  alt="x"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2a3bb95b557667529e1799bade4aa16c1163b5562eac2ef0ee3315f24260670?"
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
          )}
          {activeTab === "organization" && (
            <div className="flex flex-col justify-center px-8 py-7 mt-5 bg-white rounded-md">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  alt="x"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/857369826d894bbb090fcbf80d186a2b33803a42d4a82b584e706a4ccd67f90c?"
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
          )}
          {activeTab === "educational" && (
            <div className="flex flex-col justify-center px-8 py-7 mt-5 bg-white rounded-md">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  alt="x"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e60a82cc2a2460c4e070453f9a1b2aad8a0a38d3ed980313177d151fa0049f3?"
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
          )}
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col grow px-5 mt-36 text-sm max-md:mt-10 max-md:max-w-full justify-center items-center">
            <Link to="/">
              <img
                width={179}
                height={43}
                src={smartLogo}
                alt="smart Grader"
              />
            </Link>
            {activeTab === "individual" && (
              <div className="self-center mt-5 text-2xl text-slate-800">
                Signup as Individual Users
              </div>
            )}
            {activeTab === "organization" && (
              <div className="self-center mt-5 text-2xl text-slate-800">
                Signup as Organization
              </div>
            )}
            {activeTab === "educational" && (
              <div className="self-center mt-5 text-2xl text-slate-800">
                Signup as Student
              </div>
            )}
            <form onSubmit={handleSubmit} >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="justify-center items-start p-5 mt-5 leading-4 rounded-md border border-solid border-neutral-500 w-full pr-10 "
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="justify-center items-start p-5 mt-2 leading-4 rounded-md border border-solid border-neutral-500 w-full pr-10 "
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="justify-center items-start p-5 mt-2 leading-4 rounded-md border border-solid border-neutral-500 w-full pr-10 "
                />
              </div>
              {/* <div>
                <input
                  type="text"
                  required
                  name="user_type"
                  placeholder="User Type"
                  value={formData.user_type}
                  onChange={handleChange}
                  className="justify-center items-start p-5 mt-2 leading-4 rounded-md border border-solid border-neutral-500 w-full pr-10 "
                />
              </div> */}
              <div className="flex gap-3 mt-6 leading-5  max-md:flex-wrap">
                {/* <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={(e) =>
              setFormData({ ...formData, agreedToTerms: e.target.checked })
            }
            className="shrink-0 self-start rounded-md border border-solid border-neutral-500 h-[18px] w-[18px]"
          />
        <div className="flex-auto text-gray-600 max-md:max-w-full">
          By signing up you agree to SmartGrade{" "}
          <span className="text-sky-500 underline">Privacy Policy</span> and
          <br />
          <span className="text-sky-500 underline">Terms of Service</span>
         
        </div> */}
              </div>
              <button
                className={`flex justify-center items-center px-4 py-5 mt-8 text-white bg-sky-500 rounded-md border border-sky-500 border-solid w-full ${
                  isPressed ? "bg-sky-600" : "bg-sky-500"
                }`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                type="submit"
              >
                <div className="flex gap-2.5 px-px">
                  <span>Create an Account</span>
                </div>
              </button>

              <div className="flex flex-col self-end mt-8 max-w-full leading-5 text-center text-cyan-600 w-[381px]">
                <div>
                  <span className="font-light">Already have an account?</span>{" "}
                  <br />
                  
                    <span className="text-cyan-600 cursor-pointer" onClick={()=>navigate("/signIn")}>Log in here</span>
                 
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
