import React, { useState } from "react";
import { Link } from "react-router-dom";
import passwordIcon from "../../../assets/images/password-icon.png"
import smartLogo from "../../../assets/images/smart-logo.png"
function Password() {
  const [isPressed, setIsPressed] = useState(false);
  const [recover,setRecover]=useState(true)
  const [reset,setReset]=useState(false)
  const [newPassword,setNewPassword]=useState(false)
  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };
  const [formData, setFormData] = useState({
    email: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [otp,setOtp]=useState(new Array(5).fill(""))

  const handleOtp=(element,index)=>{
   if(isNaN(element.value)) return false;
   setOtp([...otp.map((d,idx)=>(idx===index)? element.value: d)])
   if(element.nextSibling){
    element.nextSibling.focus();
   }
  }
  return (
    <>
      <div className="container mx-auto h-screen px-4 py-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-row justify-center items-center">
          <div>
            <img
              src={passwordIcon}
              alt="Click Password"
              width={102}
              height={102}
            />
          </div>
          <div className="flex  flex-col gap-3 max-w-[328px]">
            <div className="w-full text-2xl text-slate-800">
              Forgot Password
            </div>
            <div className="mt-1.5 w-full text-base font-light leading-6 text-neutral-500">
              Reset your SmaratGrader Password for account access
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div>
            <Link to="/">
              <img
                width={179}
                height={43}
                src={smartLogo}
                alt="smart Grader"
              />
            </Link>
          </div>
          {recover && 
          <>
             <div className="self-center my-10 text-2xl text-slate-800">
             Recover Password
           </div> 
           <div>
            <form>
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

              <button
                className={`flex justify-center items-center px-4 py-5 mt-8 text-white bg-sky-500 rounded-md border border-sky-500 border-solid w-full ${
                  isPressed ? "bg-sky-600" : "bg-sky-500"
                }`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                type="submit"
                onClick={()=>{setRecover(false);setReset(true)}}
              >
                <div className="flex gap-2.5 px-px">
                  <span>Send Recovery Link</span>
                </div>
              </button>

              <div className="flex flex-col self-end mt-8 max-w-full leading-5 text-center w-[381px]">
                <div>
                  <span className="font-light text-gray-600">Or you can</span>{" "}
                  <Link to="/signIn">
                    {" "}
                    <span className="text-cyan-600">Login</span>
                  </Link>{" "}
                  <span className="font-light gap-3 text-gray-600">Here</span>
                </div>
              </div>
            </form>
          </div>
          </>
          
          }
        
        {reset && <>
          <div className="self-center my-10 text-2xl text-slate-800">
            Reset Password
          </div>
          <div>
            <form>
              <div className="flex flex-row gap-4 justify-center">
                {otp.map((data,index)=>{
                  return  <input
                  type="text"
                  name="otp"
                  placeholder="*"
                  maxLength={1}
                  className="text-center leading-4 rounded-md border border-solid border-neutral-500 w-16 h-16"
                  key={index}
                  value={data}
                   onChange={(e)=>handleOtp(e.target,index)}
                   onFocus={e=>e.target.select()}
                />
                })}
                
              </div>

              <button
                className={`flex justify-center items-center px-4 py-5 mt-8 text-white bg-sky-500 rounded-md border border-sky-500 border-solid w-full ${
                  isPressed ? "bg-sky-600" : "bg-sky-500"
                }`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                type="submit"
                onClick={()=>{setNewPassword(true);setReset(false)}}
              >
                <div className="flex gap-2.5 px-px">
                  <span>Continue</span>
                </div>
              </button>
              <div className="flex flex-col self-end mt-8 max-w-full leading-5 text-center w-[381px]">
                <div>
                  <span className="font-light text-gray-600">Didn,t recieve the email?</span>{" "}
                  <Link to="/signIn">
                    {" "}
                    <span className="text-cyan-600">Resend</span>
                  </Link>{" "}
                  <span className="font-light gap-3 text-gray-600">Link</span>
                </div>
              </div>  

              <div className="flex flex-col self-end mt-8 max-w-full leading-5 text-center w-[381px]">
                <div>
                  <span className="font-light text-gray-600">Or you can</span>{" "}
                  <Link to="/signIn">
                    {" "}
                    <span className="text-cyan-600">Login</span>
                  </Link>{" "}
                  <span className="font-light gap-3 text-gray-600">Here</span>
                </div>
              </div>
            </form>
          </div>
        </>}
        {newPassword &&<>
          <div className="self-center my-10 text-2xl text-slate-800">
            Set New Password
          </div>
          <div>
            <form>
              <div>
                <input
                  type="text"
                  name="newPassword"
                  placeholder="New Password"
                  required
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="justify-center items-start p-5 mt-2 leading-4 rounded-md border border-solid border-neutral-500 w-full pr-10 "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  required
                  value={formData.ConfirmPassword}
                  onChange={handleChange}
                  className="justify-center items-start p-5 mt-2 leading-4 rounded-md border border-solid border-neutral-500 w-full pr-10 "
                />
              </div>

              <button
                className={`flex justify-center items-center px-4 py-5 mt-8 text-white bg-sky-500 rounded-md border border-sky-500 border-solid w-full ${
                  isPressed ? "bg-sky-600" : "bg-sky-500"
                }`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                type="submit"
                onClick={()=>alert("new Password Updated")}
              >
                <div className="flex gap-2.5 px-px">
                  <span>Set Password</span>
                </div>
              </button>

              <div className="flex flex-col self-end mt-8 max-w-full leading-5 text-center w-[381px]">
                <div>
                  <span className="font-light text-gray-600">Or you can</span>{" "}
                  <Link to="/signIn">
                    {" "}
                    <span className="text-cyan-600">Login</span>
                  </Link>{" "}
                  <span className="font-light gap-3 text-gray-600">Here</span>
                </div>
              </div>
            </form>
          </div>
        </>}
         
          
        </div>
      </div>
    </>
  );
}

export default Password;
