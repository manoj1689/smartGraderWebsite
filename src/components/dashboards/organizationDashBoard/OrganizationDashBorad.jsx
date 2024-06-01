import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import NotificationBar from "../../NotificationBar/NotificationBar";
import CurrentJobs from "./CurrentJobs";
function OrganizationDashboard() {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="container mx-auto w-full h-full px-4 md:px-10">
    <NotificationBar/>
    <CurrentJobs/>
      <button onClick={handleLogout} type="button" className="bg-red-400">
        Logout
      </button>
    </div>
  );
}

export default OrganizationDashboard;
