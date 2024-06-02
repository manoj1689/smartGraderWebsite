import * as React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReducedMotion } from "framer-motion";
import EvaluationRecord from "../components/EvaluationRecord/EvaluationRecord";
import LoadingIndicator from "../components/EvaluationRecord/LoadingIndicator";
import UserInfo from "../components/EvaluationRecord/UserInfo";
import MaleEmp from "../assets/images/male-employee-tick-in-checkbox.png"
function ResultPage() {
  const [user, setUser] = useState({});
  const printRef = useRef();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000");
        setUser(response.data);
        console.log(response);
      } catch (error) {
        console.error("There was an error fetching the user data!", error);
      }
    };

    fetchUserData();
  }, []);

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>User Profile</title>");
    printWindow.document.write("</head><body>");
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className=" flex flex-col justify-center bg-white">
      <div >
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div >
            <div >
              <div className="flex gap-5 justify-between px-0.5 w-full max-md:flex-wrap max-md:max-w-full"></div>
              <div
                ref={printRef}
                className="flex flex-col px-7 pt-7 pb-20 bg-white rounded-md border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full mt-0"
              >
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src={MaleEmp}
                        alt="Fail to load image"
                        className="grow shrink-0 w-60 max-w-full aspect-square max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 px-px w-full max-md:flex-wrap max-md:max-w-full justify-between">
                          <div className="my-auto text-2xl font-medium leading-6 text-sky-500">
                            {user.name}
                          </div>
                          <div
                            onClick={handlePrint}
                            className="flex flex-1 gap-2.5 justify-center px-[2%] py-[2%] text-sm text-white bg-sky-500 rounded-md border border-sky-500 border-solid cursor-pointer max-md:px-5 md:max-w-[20%]"
                          >
                            <div>Download PDF</div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b4506dcfad2637bb53bf541187812c239909983b58b3dd80d0ef130c2c8e41?apiKey=64ac1a7b85e84629af509d56edee2526&"
                              className="shrink-0 my-auto border-2 border-white border-solid aspect-[0.88] stroke-[2px] stroke-white w-[2%]"
                            />
                          </div>
                        </div>
                        <div className="shrink-0 mt-3.5 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10 max-md:max-w-full" />
                        <div className="mt-8 max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                              <div className="flex gap-4 max-md:mt-10">
                                <div className="flex flex-col items-center gap-[20%]">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/689799648e219099fa2906c4eecba4d25378612e478c66530469674a9f3f5960?apiKey=64ac1a7b85e84629af509d56edee2526&"
                                    className="aspect-square w-[45px]"
                                  />
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4688af2750f4f5b9750d17ae55a1ce0775cd8c223d235fd5eacc6dca6cfd8ae3?apiKey=64ac1a7b85e84629af509d56edee2526&"
                                    className="mt-12 aspect-square w-[45px] max-md:mt-10"
                                  />
                                </div>
                                <div className="flex flex-col self-start mt-1 text-base font-light leading-6 text-neutral-500">
                                  <div>Interview </div>
                                  <div className="mt-3 text-lg leading-6 text-slate-800">
                                    {user.role}
                                  </div>
                                  <div className="mt-14 max-md:mt-10">
                                    Interview Date & Time
                                  </div>
                                  <div className="mt-3 text-lg leading-6 text-slate-800">
                                    {user.interviewDate}{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                              <div className="grow max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                  <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col max-md:mt-10">
                                      <div className="flex gap-4">
                                        <img
                                          loading="lazy"
                                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/38bf0f1c2af7685f155a2ba733ae8a52012cd0ca18a8bee4abfbfd824b3f6498?apiKey=64ac1a7b85e84629af509d56edee2526&"
                                          className="shrink-0 aspect-square w-[45px]"
                                        />
                                        <div className="flex flex-col my-auto">
                                          <div className="text-base font-light leading-6 text-neutral-500">
                                            Results{" "}
                                          </div>
                                          <div className="mt-3 text-lg leading-6 text-red-600">
                                            No
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-4 mt-12 max-md:mt-10">
                                        <img
                                          loading="lazy"
                                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ed505ccfcfd99147e4d04ef42003172c25c65c7ce7e42ac5c2b2301d701b3d5?apiKey=64ac1a7b85e84629af509d56edee2526&"
                                          className="shrink-0 aspect-square w-[45px]"
                                        />
                                        <div className="flex flex-col my-auto">
                                          <div className="text-base font-light leading-6 text-neutral-500">
                                            Total Time Spent
                                          </div>
                                          <div className="mt-2 text-lg leading-6 text-slate-800">
                                            {user.totalTime}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                                    <div className="flex grow gap-5 justify-between items-start px-3 py-6 text-base rounded-md border border-solid border-black border-opacity-10 text-neutral-500 max-md:px-5 max-md:mt-10">
                                      <div className="flex flex-col self-start">
                                        <div className="font-light leading-[150%]">
                                          Candidate Rating
                                        </div>
                                        <div className="flex gap-5 mt-4 whitespace-nowrap leading-[137.5%]">
                                          <div className="flex flex-col self-end whitespace-nowrap leading-[137.5%] items-center">
                                            <div className="flex flex-col justify-center rounded-full border-2 border-solid border-red-500 stroke-[2px]">
                                              <div className="justify-center place-content-center items-center px-2.5 bg-white rounded-full border-1 border-green-400 border-solid h-[51px] stroke-[2px] w-[51px]">
                                                0-6
                                              </div>
                                            </div>
                                            <div className="mt-2 place-content-center">
                                              No
                                            </div>
                                          </div>
                                          <div className="flex flex-col self-end whitespace-nowrap leading-[137.5%] items-center">
                                            <div className="flex flex-col border-blue-500 justify-center rounded-full border-2 border-solid stroke-[2px]">
                                              <div className="justify-center place-content-center items-center px-2.5 bg-white rounded-full border-1 border-green-400 border-solid h-[51px] stroke-[2px] w-[51px]">
                                                6-8
                                              </div>
                                            </div>
                                            <div className="mt-2">Yes</div>
                                          </div>
                                          <div className="flex flex-col self-end whitespace-nowrap leading-[137.5%]">
                                            <div className="flex flex-col justify-center rounded-full border-2 border-solid border-neutral-500 stroke-[2px]">
                                              <div className="justify-center place-content-center items-center px-2.5 bg-white rounded-full border-1 border-green-400 border-solid h-[51px] stroke-[2px] w-[51px]">
                                                8-10
                                              </div>
                                            </div>
                                            <div className="mt-2">Strong</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-1.5 px-2 pr-1 mt-12 bg-sky-50 rounded-md border border-solid border-black border-opacity-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center">
                    <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full  ">
                      {user.scores?.map((skill, index) => {
                        return <UserInfo key={index} data={skill} />;
                      })}
                    </div>
                    {user && (
                      <LoadingIndicator scores={user.scores}></LoadingIndicator>
                    )}
                  </div>
                </div>
                 <EvaluationRecord user={user} /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
//Code by Pawan 
// import React from "react";
// import EvaluationRecord from "../components/EvaluationRecord/EvaluationRecord";

// const ResultPage = () => {
//   const user = {
//     name: "Jane Cooper",
//     role: "Frontend Developer",
//     interviewDate: "22 April 2024, 9:30 PM IST",
//     totalTime: "50 Minutes",
//     profileImage: "https://via.placeholder.com/100",
//     scores: [
//       { skill: "HTML/CSS", score: 7, maxScore: 10 },
//       { skill: "JavaScript", score: 4, maxScore: 10 },
//       { skill: "React JS", score: 2, maxScore: 10 },
//     ],
//     candidateRating: { no: "0-6", yes: "6-8", strong: "8-10" },
//     evaluationRecords: [
//       {
//         question: "Explain Media Queries in CSS?",
//         answer: "Media queries are a feature of CSS that apply specific styles based on the characteristics of the user's device or viewport...",
//         feedback: {
//           factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           completeness: "Pellentesque placerat facilisis mattis...",
//           relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//         },
//         score: 4.5,
//       },
//       {
//         question: "Describe CSS sprites and their importance to improve website performance?",
//         answer: "CSS sprites are a technique that is used to compress multiple images available on the web page into a single image file...",
//         feedback: {
//           factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           completeness: "Pellentesque placerat facilisis mattis...",
//           relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//         },
//         score: 4.0,
//       },
//       {
//         question: "Explain the box model in CSS.",
//         answer: "The CSS box model is a fundamental concept that describes the structure of a web page...",
//         feedback: {
//           factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           completeness: "Pellentesque placerat facilisis mattis...",
//           relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//         },
//         score: 4.2,
//       },
//       {
//         question: "Explain the difference between inline and block elements in HTML.",
//         answer: "Inline elements do not start on a new line and only take up as much width as necessary...",
//         feedback: {
//           factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           completeness: "Pellentesque placerat facilisis mattis...",
//           relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//         },
//         score: 3.8,
//       },
//       {
//         question: "What are pseudo-classes in CSS?",
//         answer: "Pseudo-classes are keywords added to selectors that specify a special state of the selected elements...",
//         feedback: {
//           factualAccuracy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           completeness: "Pellentesque placerat facilisis mattis...",
//           relevance: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           coherence: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//           scoring: "Morbi porttitor, erat sit amet tincidunt pulvinar...",
//         },
//         score: 4.4,
//       },
//     ],
//   };

//   const downloadPDF = () => {
//     console.log("Download PDF");
//   };

//   return (
//     <div className="flex flex-col items-center w-full p-4">
//       <div className="flex flex-col items-center w-full max-w-4xl p-4 bg-white rounded shadow-md">
//         <div className="flex flex-wrap items-center w-full mb-4">
//           <img
//             src={user.profileImage}
//             alt="Profile"
//             className="w-24 h-24 rounded-full mr-4"
//           />
//           <div className="flex flex-col flex-grow">
//             <h1 className="text-2xl font-bold">{user.name}</h1>
//             <p className="text-gray-600">{user.role}</p>
//             <p className="text-gray-600">{user.interviewDate}</p>
//             <p className="text-gray-600">{user.totalTime}</p>
//           </div>
//           <button
//             onClick={downloadPDF}
//             className="ml-auto px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
//           >
//             <i className="fas fa-download"></i> Download PDF
//           </button>
//         </div>
//         <div className="flex w-full justify-between mb-4 flex-wrap">
//           {user.scores.map((score, index) => (
//             <div key={index} className="flex flex-col items-center w-full md:w-1/3 mb-4">
//               <div className="text-xl font-bold">{score.skill}</div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
//                 <div
//                   className={`h-2.5 rounded-full ${score.score >= 5 ? "bg-blue-500" : "bg-red-500"}`}
//                   style={{ width: `${(score.score / score.maxScore) * 100}%` }}
//                 ></div>
//               </div>
//               <div className="text-sm font-medium text-gray-700">
//                 {score.score}/{score.maxScore}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center justify-center mb-4">
//           <div className="flex flex-col items-center mx-4">
//             <div className="text-lg font-semibold">0-6</div>
//             <div>No</div>
//           </div>
//           <div className="flex flex-col items-center mx-4">
//             <div className="text-lg font-semibold">6-8</div>
//             <div>Yes</div>
//           </div>
//           <div className="flex flex-col items-center mx-4">
//             <div className="text-lg font-semibold">8-10</div>
//             <div>Strong</div>
//           </div>
//         </div>
//       </div>
//       <EvaluationRecord user={user} />
//     </div>
//   );
// };

// export default ResultPage;
