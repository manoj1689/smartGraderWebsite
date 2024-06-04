import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../components/signUp/SignUp";
import SignIn from "../components/signIn/SignIn";
import SelectInterest from "../components/signIn/selectInterest/SelectInterest";
import CreateAccount from "../components/signUp/createAccount/CreateAccount";
import Password from "../components/signIn/password/Password";
import HideNav from "../components/HideNav/HideNav";
import Navbar from "../components/Header/Navbar";
import EvaluateStudentAnswer from "../pages/EvaluateStudentAnswer";
const PublicRoutes: React.FC = () => {
  return (
    <>
    <HideNav>
      <Navbar />
      </HideNav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUp/selectInterest" element={<SelectInterest />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signIn/password" element={<Password />} />
        <Route path="/evaluate" element={<EvaluateStudentAnswer />} />
      </Routes>
    </>
    
   
  );
};

export default PublicRoutes;
