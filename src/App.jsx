import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Header/Navbar";
import HideNav from "./components/HideNav/HideNav";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";
import CreateAccount from "./components/signUp/createAccount/CreateAccount";
import Password from "./components/signIn/password/Password";
import ProtectedRoute from "./services/ProtectedRoute";
import Dashboard from "./components/dashboards/Dashboard";
import SelectInterest from "./components/signIn/selectInterest/SelectInterest";
import QuestionPage from "./components/dashboards/userDashBoard/QuestionPage";
import InterviewScreen from "./pages/InterviewPage";
import GenerateQuestionsPage from "./pages/GenerateQuestionsPage"
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HideNav>
          <Navbar />
        </HideNav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="/signUp/selectInterest" element={<SelectInterest />} />
          <Route path="createAccount" element={<CreateAccount />} />
          <Route path="/signIn/password" element={<Password />} />
          <Route path="/signIn/dashboard" element={<ProtectedRoute />}>
            <Route path="/signIn/dashboard" element={<Dashboard />} />

            <Route
              path="/signIn/dashboard/question/:id"
              element={<QuestionPage />}
            />
              <Route path="/signIn/dashboard/generatequestion" element={<GenerateQuestionsPage />} />
          <Route path="/signIn/dashboard/result" element={<ResultPage />} />
          <Route path="/signIn/dashboard/interviewscreen" element={<InterviewScreen />} />
          </Route>
        

        </Routes>
      </BrowserRouter>

      {/* <InterviewScreen /> */}
      {/* <GenerateQuestionsPage /> */}
      {/* <ResultPage/> */}
    </div>
  );
}

export default App;
