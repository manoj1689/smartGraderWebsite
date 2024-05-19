import React from "react";
import EvaluationRecord from "../components/EvaluationRecord/EvaluationRecord";

const ResultPage = () => {
  const user = {
    name: "Jane Cooper",
    role: "Frontend Developer",
    interviewDate: "22 April 2024, 9:30 PM IST",
    totalTime: "50 Minutes",
    profileImage: "https://via.placeholder.com/100",
    scores: [
      { skill: "HTML/CSS", score: 7, maxScore: 10 },
      { skill: "JavaScript", score: 4, maxScore: 10 },
      { skill: "React JS", score: 2, maxScore: 10 },
    ],
    candidateRating: { no: "0-6", yes: "6-8", strong: "8-10" },
    evaluationRecords: [
      {
        question: "Explain Media Queries in CSS?",
        answer: "Media queries are a feature of CSS that apply specific styles based on the characteristics of the user's device or viewport...",
        feedback: {
          factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          completeness: "Pellentesque placerat facilisis mattis...",
          relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
        },
        score: 4.5,
      },
      {
        question: "Describe CSS sprites and their importance to improve website performance?",
        answer: "CSS sprites are a technique that is used to compress multiple images available on the web page into a single image file...",
        feedback: {
          factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          completeness: "Pellentesque placerat facilisis mattis...",
          relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
        },
        score: 4.0,
      },
      {
        question: "Explain the box model in CSS.",
        answer: "The CSS box model is a fundamental concept that describes the structure of a web page...",
        feedback: {
          factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          completeness: "Pellentesque placerat facilisis mattis...",
          relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
        },
        score: 4.2,
      },
      {
        question: "Explain the difference between inline and block elements in HTML.",
        answer: "Inline elements do not start on a new line and only take up as much width as necessary...",
        feedback: {
          factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          completeness: "Pellentesque placerat facilisis mattis...",
          relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
        },
        score: 3.8,
      },
      {
        question: "What are pseudo-classes in CSS?",
        answer: "Pseudo-classes are keywords added to selectors that specify a special state of the selected elements...",
        feedback: {
          factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          completeness: "Pellentesque placerat facilisis mattis...",
          relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
          scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
        },
        score: 4.4,
      },
    ],
  };

  const downloadPDF = () => {
    console.log("Download PDF");
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex flex-col items-center w-full max-w-4xl p-4 bg-white rounded shadow-md">
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
        <div className="flex w-full justify-between mb-4 flex-wrap">
          {user.scores.map((score, index) => (
            <div key={index} className="flex flex-col items-center w-full md:w-1/3 mb-4">
              <div className="text-xl font-bold">{score.skill}</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className={`h-2.5 rounded-full ${score.score >= 5 ? "bg-blue-500" : "bg-red-500"}`}
                  style={{ width: `${(score.score / score.maxScore) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm font-medium text-gray-700">
                {score.score}/{score.maxScore}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mb-4">
          <div className="flex flex-col items-center mx-4">
            <div className="text-lg font-semibold">0-6</div>
            <div>No</div>
          </div>
          <div className="flex flex-col items-center mx-4">
            <div className="text-lg font-semibold">6-8</div>
            <div>Yes</div>
          </div>
          <div className="flex flex-col items-center mx-4">
            <div className="text-lg font-semibold">8-10</div>
            <div>Strong</div>
          </div>
        </div>
      </div>
      <EvaluationRecord user={user} />
    </div>
  );
};

export default ResultPage;
