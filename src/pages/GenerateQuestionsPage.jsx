import React, { useEffect, useState } from "react";
import DomainQuestionsForm from "../components/GenerateQuestions/DomainQuestionsForm";
import ResumeQuestionsForm from "../components/GenerateQuestions/ResumeQuestionsForm";
import JDQuestionsForm from "../components/GenerateQuestions/JDQuestionsForm";
import OwnQuestionsForm from "../components/GenerateQuestions/OwnQuestionsForm";
import GeneratedQuestionsList from "../components/GenerateQuestions/GeneratedQuestionsList";
import ExamSettings from "../components/GenerateQuestions/ExamSettings";
import axiosInstance from "../axiosInstance";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import cheerfulMan from "../assets/images/cheerful-man-working.png";
import fileUpload from "../assets/images/file-uploading.png"
import maleEmployee from "../assets/images/male-employee-tick-in-checkbox.png";
import youngGirl from "../assets/images/young-girl-write-report.png"
const GenerateQuestionsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [questionSource, setQuestionSource] = useState("domain");
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [examTiming, setExamTiming] = useState(60);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  const [Image, setImage] = useState(maleEmployee);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    // Update image based on question source
    if (questionSource === "domain") {
      setImage(maleEmployee);
    } else if (questionSource === "resume") {
      setImage(fileUpload);
    } else if (questionSource === "jobDescription") {
      setImage(youngGirl);
    } else if (questionSource === "ownQuestions") {
      setImage(cheerfulMan);
    }
  }, [questionSource]);

  const handleConfirm = () => {
    // Add your confirm logic here
    // alert("test");
    setConfirm(true);
   
  navigate('/signIn/dashboard/interviewscreen')
    closeModal();
  };

  const handleGenerateQuestions = async (data) => {
    setLoading(true);
    setError("");

    try {
      let newQuestions = [];

      if (questionSource === "domain") {
        const response = await axiosInstance.post("/generate/subjective", data);
        newQuestions = response.data.questions;
      } else if (questionSource === "resume") {
        setImage(fileUpload);
        const formData = new FormData();
        formData.append("file", data.resume);
        const response = await axiosInstance.post(
          "/generate/pdftotext",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const parsedResumeText = response.data.text;
        const questionsResponse = await axiosInstance.post(
          "/generate/byresume",
          {
            resume: parsedResumeText,
            number_of_questions: data.numberOfQuestions,
          }
        );
        newQuestions = questionsResponse.data.questions;
      } else if (questionSource === "jobDescription") {
        const response = await axiosInstance.post("/generate/byjd", data);
        newQuestions = response.data.questions;
      } else if (questionSource === "ownQuestions") {
        newQuestions = data.ownQuestions.split("\n").map((question) => ({
          question_text: question,
          expected_answer_format: "",
        }));
      }
      // Append new questions to the existing generated questions
      setGeneratedQuestions((prevQuestions) => [
        ...prevQuestions,
        ...newQuestions,
      ]);
    } catch (error) {
      setError("Failed to generate questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveQuestionSet = async () => {
    try {
      openModal();
      if (true) {
        setLoading(true);
        await axiosInstance.post("/save_question_set", {
          questions: generatedQuestions,
          exam_timing: examTiming,
        });
        alert("Question set saved successfully!");
      }
    } catch (error) {
      setError("Failed to save question set. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex">
      <div className="data_container mx-auto py-8 px-4 w-4/6">
        <h1 className="text-3xl font-bold mb-6">Generate Exam Question Set</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Set Your Own Questions
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="domain"
                  name="questionSource"
                  value="domain"
                  onChange={() => setQuestionSource("domain")}
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="domain">By Selecting Different Domain</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="resume"
                  name="questionSource"
                  value="resume"
                  onChange={() => setQuestionSource("resume")}
                  className="mr-2"
                />
                <label htmlFor="resume">By Uploading Resume</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="jobDescription"
                  name="questionSource"
                  value="jobDescription"
                  onChange={() => setQuestionSource("jobDescription")}
                  className="mr-2"
                />
                <label htmlFor="jobDescription">By Writing JD</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="ownQuestions"
                  name="questionSource"
                  value="ownQuestions"
                  onChange={() => setQuestionSource("ownQuestions")}
                  className="mr-2"
                />
                <label htmlFor="ownQuestions">By Your Own Question Set</label>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-4 text-red-500 flex items-center">
              <MdErrorOutline className="mr-2" /> {error}
            </div>
          )}

          {questionSource === "domain" && (
            <DomainQuestionsForm
              onGenerate={handleGenerateQuestions}
              loading={loading}
            />
          )}

          {questionSource === "resume" && (
            <ResumeQuestionsForm
              onGenerate={handleGenerateQuestions}
              loading={loading}
            />
          )}

          {questionSource === "jobDescription" && (
            <JDQuestionsForm
              onGenerate={handleGenerateQuestions}
              loading={loading}
            />
          )}

          {questionSource === "ownQuestions" && (
            <OwnQuestionsForm
              onGenerate={handleGenerateQuestions}
              loading={loading}
            />
          )}
        </div>

        {generatedQuestions.length > 0 && (
          <>
            <ExamSettings
              examTiming={examTiming}
              setExamTiming={setExamTiming}
            />
            <GeneratedQuestionsList
              generatedQuestions={generatedQuestions}
              setGeneratedQuestions={setGeneratedQuestions}
            />
            <button
              onClick={handleSaveQuestionSet}
              className="mt-4 bg-green-500 text-white px-8 py-4 rounded-full transition duration-300 hover:bg-green-700 flex items-center"
            >
              {loading ? (
                <FaSpinner className="animate-spin mr-2" />
              ) : (
                <FaCheckCircle className="mr-2" />
              )}{" "}
              Save Question Set
            </button>
          </>
        )}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white w-96 p-6 rounded-md">
              <div className="text-xl font-bold mb-4">
                Question Generated Sucessfully
              </div>
              <div className="text-gray-700 mb-4">
                Do you want to start the interview assessment?
              </div>
              <div className="flex justify-around">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  start
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="image_container  w-1/3">
        <img src={Image} className="w-3/4" alt="Fail to load image" />
      </div>
    </div>
  );
};

export default GenerateQuestionsPage;
