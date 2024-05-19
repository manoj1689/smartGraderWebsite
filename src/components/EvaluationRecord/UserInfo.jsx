import React from "react";

const UserInfo = ({ user, downloadPDF }) => {
  return (
    <div className="flex flex-wrap items-center w-full mb-4">
      <img
        src={user.profileImage}
        alt="Profile"
        className="w-24 h-24 rounded-full mr-4"
      />
      <div className="flex flex-col flex-grow">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.role}</p>
        <p className="text-gray-600">{user.interviewDate}</p>
        <p className="text-gray-600">{user.totalTime}</p>
      </div>
      <button
        onClick={downloadPDF}
        className="ml-auto px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        <i className="fas fa-download"></i> Download PDF
      </button>
    </div>
  );
};

export default UserInfo;
