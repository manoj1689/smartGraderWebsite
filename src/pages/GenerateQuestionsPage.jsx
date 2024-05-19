import React, { useState } from "react";
import DomainQuestionsForm from "../components/GenerateQuestions/DomainQuestionsForm";
import ResumeQuestionsForm from "../components/GenerateQuestions/ResumeQuestionsForm";
import JDQuestionsForm from "../components/GenerateQuestions/JDQuestionsForm";
import OwnQuestionsForm from "../components/GenerateQuestions/OwnQuestionsForm";
import GeneratedQuestionsList from "../components/GenerateQuestions/GeneratedQuestionsList";
import ExamSettings from "../components/GenerateQuestions/ExamSettings";
import axiosInstance from "../axiosInstance";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const GenerateQuestionsPage = () => {
  const [loading, setLoading] = useState(false);
  const [questionSource, setQuestionSource] = useState('');
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [examTiming, setExamTiming] = useState(60);
  const [error, setError] = useState('');

  const handleGenerateQuestions = async (data) => {
    setLoading(true);
    setError('');

    try {
      if (questionSource === 'domain') {
        const response = await axiosInstance.post('/generate/subjective', data);
        setGeneratedQuestions(response.data.questions);
      } else if (questionSource === 'resume') {
        const formData = new FormData();
        formData.append('file', data.resume);
        const response = await axiosInstance.post('/generate/pdftotext', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const parsedResumeText = response.data.text;
        const questionsResponse = await axiosInstance.post('/generate/byresume', {
          resume: parsedResumeText,
          number_of_questions: data.numberOfQuestions,
        });
        setGeneratedQuestions(questionsResponse.data.questions);
      } else if (questionSource === 'jobDescription') {
        const response = await axiosInstance.post('/generate/byjd', data);
        setGeneratedQuestions(response.data.questions);
      } else if (questionSource === 'ownQuestions') {
        const questions = data.ownQuestions.split('\n').map(question => ({
          question_text: question,
          expected_answer_format: ''
        }));
        setGeneratedQuestions(questions);
      }
    } catch (error) {
      setError('Failed to generate questions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveQuestionSet = async () => {
    try {
      setLoading(true);
      await axiosInstance.post('/save_question_set', {
        questions: generatedQuestions,
        exam_timing: examTiming,
      });
      alert('Question set saved successfully!');
    } catch (error) {
      setError('Failed to save question set. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Generate Exam Question Set</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Set Your Own Questions
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center mb-4">
              <input type="radio" name="questionSource" value="domain" onChange={() => setQuestionSource('domain')} className="mr-2" />
              <span>By Selecting Different Domain</span>
            </div>
            <div className="flex items-center mb-4">
              <input type="radio" name="questionSource" value="resume" onChange={() => setQuestionSource('resume')} className="mr-2" />
              <span>By Uploading Resume</span>
            </div>
            <div className="flex items-center mb-4">
              <input type="radio" name="questionSource" value="jobDescription" onChange={() => setQuestionSource('jobDescription')} className="mr-2" />
              <span>By Writing JD</span>
            </div>
            <div className="flex items-center mb-4">
              <input type="radio" name="questionSource" value="ownQuestions" onChange={() => setQuestionSource('ownQuestions')} className="mr-2" />
              <span>By Your Own Question Set</span>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-4 text-red-500 flex items-center">
            <MdErrorOutline className="mr-2" /> {error}
          </div>
        )}

        {questionSource === 'domain' && (
          <DomainQuestionsForm onGenerate={handleGenerateQuestions} loading={loading} />
        )}

        {questionSource === 'resume' && (
          <ResumeQuestionsForm onGenerate={handleGenerateQuestions} loading={loading} />
        )}

        {questionSource === 'jobDescription' && (
          <JDQuestionsForm onGenerate={handleGenerateQuestions} loading={loading} />
        )}

        {questionSource === 'ownQuestions' && (
          <OwnQuestionsForm onGenerate={handleGenerateQuestions} loading={loading} />
        )}
      </div>

      {generatedQuestions.length > 0 && (
        <>
          <ExamSettings examTiming={examTiming} setExamTiming={setExamTiming} />
          <GeneratedQuestionsList generatedQuestions={generatedQuestions} setGeneratedQuestions={setGeneratedQuestions} />
          <button
            onClick={handleSaveQuestionSet}
            className="mt-4 bg-green-500 text-white px-8 py-4 rounded-full transition duration-300 hover:bg-green-700 flex items-center"
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : <FaCheckCircle className="mr-2" />} Save Question Set
          </button>
        </>
      )}
    </div>
  );
};

export default GenerateQuestionsPage;
