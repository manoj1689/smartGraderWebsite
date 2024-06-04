import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../services/ProtectedRoute";
import Dashboard from "../components/dashboards/Dashboard";
import InterviewScreen from "../pages/InterviewPage";
import GenerateQuestionsPage from "../pages/GenerateQuestionsPage";
import ResultPage from "../pages/ResultPage";
import CreateJobs from "../components/dashboards/organizationDashBoard/CreateJobs";
import SelectQuestion from "../components/dashboards/organizationDashBoard/SelectQuestion";
import EditJobs from "../components/dashboards/organizationDashBoard/EditJobs";


const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="question/:id" element={<InterviewScreen />} />
        <Route path="generatequestion" element={<GenerateQuestionsPage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="interviewscreen" element={<InterviewScreen />} />
        <Route path="createjobs" element={<CreateJobs />} />
        <Route path="createjobs/selectquestion" element={<SelectQuestion />} />
        <Route path="editjobs" element={<EditJobs />} />
       
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
