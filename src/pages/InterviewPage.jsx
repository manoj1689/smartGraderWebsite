import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaVolumeUp } from "react-icons/fa";
import CameraFeed from "../components/Interview/CameraFeed";
import BrowserInstructions from "../components/Interview/BrowserInstructions";
import Checklist from "../components/Interview/Checklist";
import QuestionDisplay from "../components/Interview/QuestionDisplay";
import SpeechToText from "../components/Interview/SpeechToText";
import AnswerField from "../components/Interview/AnswerField";
import SubmitButton from "../components/Interview/SubmitButton";
import axiosInstance from "../axiosInstance";
import useFullscreen from "../components/Interview/CheatingPrevention/useFullscreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../components/common/ErrorBoundary";
import { GiSoundWaves } from "react-icons/gi";
import { CiMicrophoneOn } from "react-icons/ci";

const InterviewScreen = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [permissions, setPermissions] = useState({
    camera: false,
    microphone: false,
    fullscreen: false,
    devToolsOpen: false,
  });
  const [faceDetectionResults, setFaceDetectionResults] = useState({
    faceVerified: false,
    multiplePeopleDetected: false,
  });
  const [ttsPlaying, setTtsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const synth = window.speechSynthesis;
  const fullscreenRef = useRef(null);
  const speak = useCallback(
    (text) => {
      if (synth.speaking) {
        synth.cancel();
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setTtsPlaying(false);
      synth.speak(utterance);
      setTtsPlaying(true);
    },
    [synth]
  );

  const id = "1"; // Replace with your actual set_id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/questions/all?set_id=${id}`);
        setQuestionsData(response.data.data);
        console.log("Questions fetched:", response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching questions");
      }
    };
    fetchData();
  }, [id]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setProgress(30);

    try {
      const response = await axiosInstance.post("/evaluate_student_answer", {
        question: questionsData[currentQuestionIndex].title,
        user_answer: answer,
        knowledge_level: "Advanced",
      });
      console.log("Answer submitted:", response.data);
      setError(null);
      setProgress(100);
      handleNextQuestion();
      setAnswer(""); // Clear the answer field
    } catch (err) {
      console.error("Error evaluating answer:", err);
      setError("An error occurred while evaluating the answer.");
      setProgress(0);
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion = questionsData[currentQuestionIndex];
  console.log(currentQuestion);
  async function requestCameraAndMicrophone() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      const cameraStatus = await navigator.permissions.query({
        name: "camera",
      });
      const microphoneStatus = await navigator.permissions.query({
        name: "microphone",
      });
      setPermissions((prev) => ({
        ...prev,
        camera: cameraStatus.state === "granted",
        microphone: microphoneStatus.state === "granted",
      }));
    } catch (error) {
      console.error("Error requesting media permissions:", error);
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      fullscreenRef.current.requestFullscreen().catch((err) => {
        console.error(`Failed to enter fullscreen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(`Failed to exit fullscreen mode: ${err.message}`);
      });
    }
  };

  const checkFullscreenStatus = () => {
    const isFullscreen = document.fullscreenElement !== null;
    setPermissions((prev) => ({ ...prev, fullscreen: isFullscreen }));
  };

  const handleVisibilityChange = () => {
    const isActive = document.visibilityState === "visible";
    setPermissions((prev) => ({ ...prev, tabActive: isActive }));
  };

  const detectDevToolsOpen = () => {
    const threshold = 100;
    const devToolsOpen = window.outerWidth - window.innerWidth > threshold;
    setPermissions((prev) => ({ ...prev, devToolsOpen }));
  };

  useEffect(() => {
    requestCameraAndMicrophone();

    document.addEventListener("fullscreenchange", checkFullscreenStatus);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", detectDevToolsOpen);

    checkFullscreenStatus();
    handleVisibilityChange();
    detectDevToolsOpen();

    return () => {
      document.removeEventListener("fullscreenchange", checkFullscreenStatus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", detectDevToolsOpen);
    };
  }, []);

  const handleFacesDetected = (results) => {
    // console.log('Face detection results:', results);
    setFaceDetectionResults(results);
  };

  const updateTranscript = (newTranscript) => {
    setAnswer((prevAnswer) => prevAnswer + newTranscript);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  useFullscreen(true); // Ensure fullscreen button is shown by default

  if (!questionsData.length) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <div ref={fullscreenRef} className="flex h-screen bg-gray-100">
        <div className="basis-1/3">
          <aside className="p-4 bg-white shadow-lg">
            <div className="mt-5 ">
              <CameraFeed onFacesDetected={handleFacesDetected} /> 
            </div>
            <div>
              <BrowserInstructions />
            </div>

            <div>
              <Checklist
                items={[
                  { label: "Camera Access", isChecked: permissions.camera },
                  {
                    label: "Microphone Access",
                    isChecked: permissions.microphone,
                  },
                  {
                    label: "Fullscreen Mode",
                    isChecked: permissions.fullscreen,
                  },
                  {
                    label: "DevTools Closed",
                    isChecked: !permissions.devToolsOpen,
                  },
                ]}
              />
            </div>
            {/* <div className="flex w-full justify-end my-5">
              <button
                onClick={toggleFullscreen}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
              >
                {permissions.fullscreen
                  ? "Exit Fullscreen"
                  : "Enter Fullscreen"}
              </button>
            </div> */}
          </aside>
        </div>
        <div className="basis-2/3 py-5">
          <div className="p-8 space-y-4">
            <div className="w-full text-base font-medium leading-5 text-neutral-700 font-spline">
              {" "}
              Question {currentQuestion.id}
            </div>
            <div className="flex flex-row text-base leading-5 text-neutral-600 font-spline gap-2.5 justify-between px-4 py-4 mt-2.5 w-full  rounded-md border border-solid border-neutral-500 max-md:flex-wrap max-md:max-w-full">
              <QuestionDisplay
                questionText={
                  currentQuestion
                    ? currentQuestion.title
                    : "Loading question..."
                }
              />

              <div
                className="flex items-center px-4  rounded disabled:opacity-50"
              >
                <span>
                  <GiSoundWaves size={35} color="01AFF4" />
                </span>
                <span>
                  <GiSoundWaves size={35} color="01AFF4" />
                </span>
              </div>
            </div>
         
            <div className="relative">
              <div>
                <AnswerField
                  value={answer}
                  onChange={handleAnswerChange}
                  placeholder="Type your answer here..."
                  charLimit={500}
                  className="w-full  p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                <CiMicrophoneOn size={35} />
              </div>
            </div>

            <SpeechToText
              isRecording={isRecording}
              onRecordingChange={setIsRecording}
              onTranscriptUpdate={updateTranscript}
            />
            <div className="flex flex-row justify-center align-center gap-3 mt-4">
            <button
                onClick={toggleFullscreen}
                className=" px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
              >
                {permissions.fullscreen
                  ? "Exit Fullscreen"
                  : "Enter Fullscreen"}
              </button> 

            <button onClick={() => speak(currentQuestion.title)} disabled={ttsPlaying} className="flex items-center px-4 py-2 rounded-sm bg-blue-600 text-white  disabled:opacity-50">
                        <FaVolumeUp className="mr-2" />
                        Replay Question
                    </button>
              <SubmitButton
                onClick={handleSubmit}
                disabled={
                  !answer.trim() ||
                  !permissions.camera ||
                  !permissions.microphone
                }
              />
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-gray-500 text-white rounded-sm hover:bg-gray-600"
              >
                Next
              </button>
            </div>
            {loading && (
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            )}
            {error && <div className="error">{error}</div>}
            <ToastContainer />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default InterviewScreen;
