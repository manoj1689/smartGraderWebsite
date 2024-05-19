// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import CameraFeed from './CameraFeed';
// import BrowserInstructions from './BrowserInstructions';
// import Checklist from './Checklist';
// import QuestionDisplay from './QuestionDisplay';
// import SpeechToText from './SpeechToText';
// import AnswerField from './AnswerField';
// import SubmitButton from './SubmitButton';

// const InterviewScreen = () => {
//   const [question] = useState("What is your greatest strength?");
//   const [answer, setAnswer] = useState("");
//   const [isRecording, setIsRecording] = useState(false);
//   const [permissions, setPermissions] = useState({
//     camera: false,
//     microphone: false,
//     fullscreen: false,
//     tabActive: true,
//     devToolsOpen: false,
//   });
//   const [faceDetectionResults, setFaceDetectionResults] = useState({
//     faceVerified: false,
//     multiplePeopleDetected: false,
//   });
//   const [ttsPlaying, setTtsPlaying] = useState(false);
//   const synth = window.speechSynthesis;
//   const fullscreenRef = useRef(null);

//   const speak = useCallback((text) => {
//     if (synth.speaking) {
//       synth.cancel();
//     }
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.onend = () => setTtsPlaying(false);
//     synth.speak(utterance);
//     setTtsPlaying(true);
//   }, [synth]);

//   async function requestCameraAndMicrophone() {
//     try {
//       await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//       updatePermissions();
//     } catch (error) {
//       console.error('Error requesting media permissions:', error);
//       updatePermissions();
//     }
//   }

//   async function updatePermissions() {
//     const cameraStatus = await navigator.permissions.query({ name: 'camera' });
//     const microphoneStatus = await navigator.permissions.query({ name: 'microphone' });
//     setPermissions((prev) => ({
//       ...prev,
//       camera: cameraStatus.state === 'granted',
//       microphone: microphoneStatus.state === 'granted',
//     }));
//   }

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       fullscreenRef.current.requestFullscreen().catch(err => {
//         console.error(`Failed to enter fullscreen mode: ${err.message}`);
//       });
//     } else {
//       document.exitFullscreen().catch(err => {
//         console.error(`Failed to exit fullscreen mode: ${err.message}`);
//       });
//     }
//   };

//   const checkFullscreenStatus = () => {
//     const isFullscreen = document.fullscreenElement !== null;
//     setPermissions((prev) => ({ ...prev, fullscreen: isFullscreen }));
//   };

//   const handleVisibilityChange = () => {
//     const isActive = document.visibilityState === 'visible';
//     setPermissions((prev) => ({ ...prev, tabActive: isActive }));
//   };

//   const detectDevToolsOpen = () => {
//     const threshold = 100;
//     const devToolsOpen = window.outerWidth - window.innerWidth > threshold;
//     setPermissions((prev) => ({ ...prev, devToolsOpen }));
//   };

//   useEffect(() => {
//     requestCameraAndMicrophone();

//     async function handlePermissionChange() {
//       updatePermissions();
//     }

//     navigator.permissions.query({ name: 'camera' }).then((permission) => {
//       permission.onchange = handlePermissionChange;
//     });
//     navigator.permissions.query({ name: 'microphone' }).then((permission) => {
//       permission.onchange = handlePermissionChange;
//     });

//     document.addEventListener('fullscreenchange', checkFullscreenStatus);
//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     window.addEventListener('resize', detectDevToolsOpen);

//     checkFullscreenStatus();
//     handleVisibilityChange();
//     detectDevToolsOpen();

//     return () => {
//       document.removeEventListener('fullscreenchange', checkFullscreenStatus);
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//       window.removeEventListener('resize', detectDevToolsOpen);
//     };
//   }, []);

//   const handleFacesDetected = (results) => {
//     setFaceDetectionResults(results);
//   };

//   const updateTranscript = (newTranscript) => {
//     setAnswer((prevAnswer) => prevAnswer + newTranscript);
//   };

//   const handleAnswerChange = (event) => {
//     setAnswer(event.target.value);
//   };

//   const handleSubmit = () => {
//     console.log("Submitted Answer:", answer);
//   };

//   const toggleRecording = () => {
//     setIsRecording((prev) => !prev);
//   };

//   return (
//     <div ref={fullscreenRef} className="flex h-screen bg-gray-100">
//       <aside className="w-1/4 p-4 bg-white shadow-lg">
//         <CameraFeed onFacesDetected={handleFacesDetected} />
//         <BrowserInstructions />
//         <Checklist items={[
//           { label: 'Camera Access', isChecked: permissions.camera },
//           { label: 'Microphone Access', isChecked: permissions.microphone },
//           { label: 'Fullscreen Mode', isChecked: permissions.fullscreen },
//           { label: 'Tab Active', isChecked: permissions.tabActive },
//           { label: 'DevTools Closed', isChecked: !permissions.devToolsOpen }
//         ]} />
//         <button onClick={toggleFullscreen} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//           {permissions.fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
//         </button>
//       </aside>
//       <div className="flex-1 p-8 space-y-4">
//         <QuestionDisplay questionText={question} />
//         <button onClick={() => speak(question)} disabled={ttsPlaying} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">
//           Replay Question
//         </button>
//         <SpeechToText isRecording={isRecording} onRecordingChange={toggleRecording} onTranscriptUpdate={updateTranscript} />
//         <AnswerField
//           value={answer}
//           onChange={handleAnswerChange}
//           placeholder="Type your answer here..."
//           charLimit={500}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <SubmitButton onClick={handleSubmit} disabled={!answer.trim() || !permissions.camera || !permissions.microphone} />
//         <div className="space-y-2">
//           <p>Face Verified: {faceDetectionResults.faceVerified ? 'Yes' : 'No'}</p>
//           <p>Multiple People Detected: {faceDetectionResults.multiplePeopleDetected ? 'Yes' : 'No'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewScreen; 


import React, { useState, useEffect, useRef, useCallback } from 'react';
import CameraFeed from './CameraFeed';
import BrowserInstructions from './BrowserInstructions';
import Checklist from './Checklist';
import QuestionDisplay from './QuestionDisplay';
import SpeechToText from './SpeechToText';
import AnswerField from './AnswerField';
import SubmitButton from './SubmitButton';

const InterviewScreen = () => {
  const [question] = useState("What is your greatest strength?");
  const [answer, setAnswer] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [permissions, setPermissions] = useState({
    camera: false,
    microphone: false,
    fullscreen: false,
    tabActive: true,
    devToolsOpen: false,
    singleScreen: true,
  });
  const [faceDetectionResults, setFaceDetectionResults] = useState({
    faceVerified: false,
    multiplePeopleDetected: false,
  });
  const [ttsPlaying, setTtsPlaying] = useState(false);
  const synth = window.speechSynthesis;
  const fullscreenRef = useRef(null);

  const speak = useCallback((text) => {
    if (synth.speaking) {
      synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setTtsPlaying(false);
    synth.speak(utterance);
    setTtsPlaying(true);
  }, [synth]);

  async function requestCameraAndMicrophone() {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      updatePermissions();
    } catch (error) {
      console.error('Error requesting media permissions:', error);
      updatePermissions();
    }
  }

  async function updatePermissions() {
    const cameraStatus = await navigator.permissions.query({ name: 'camera' });
    const microphoneStatus = await navigator.permissions.query({ name: 'microphone' });
    setPermissions((prev) => ({
      ...prev,
      camera: cameraStatus.state === 'granted',
      microphone: microphoneStatus.state === 'granted',
    }));
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      fullscreenRef.current.requestFullscreen().catch(err => {
        console.error(`Failed to enter fullscreen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.error(`Failed to exit fullscreen mode: ${err.message}`);
      });
    }
  };

  const checkFullscreenStatus = () => {
    const isFullscreen = document.fullscreenElement !== null;
    setPermissions((prev) => ({ ...prev, fullscreen: isFullscreen }));
  };

  const handleVisibilityChange = () => {
    const isActive = document.visibilityState === 'visible';
    setPermissions((prev) => ({ ...prev, tabActive: isActive }));
  };

  const detectDevToolsOpen = () => {
    const threshold = 100;
    const devToolsOpen = window.outerWidth - window.innerWidth > threshold;
    setPermissions((prev) => ({ ...prev, devToolsOpen }));
  };

  const handleSingleScreen = () => {
    const screens = window.screen.availWidth === window.innerWidth && window.screen.availHeight === window.innerHeight;
    setPermissions((prev) => ({ ...prev, singleScreen: screens }));
  };

  useEffect(() => {
    requestCameraAndMicrophone();

    async function handlePermissionChange() {
      updatePermissions();
    }

    navigator.permissions.query({ name: 'camera' }).then((permission) => {
      permission.onchange = handlePermissionChange;
    });
    navigator.permissions.query({ name: 'microphone' }).then((permission) => {
      permission.onchange = handlePermissionChange;
    });

    document.addEventListener('fullscreenchange', checkFullscreenStatus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', detectDevToolsOpen);
    window.addEventListener('focus', handleSingleScreen);

    checkFullscreenStatus();
    handleVisibilityChange();
    detectDevToolsOpen();
    handleSingleScreen();

    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreenStatus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', detectDevToolsOpen);
      window.removeEventListener('focus', handleSingleScreen);
    };
  }, []);

  const handleFacesDetected = (results) => {
    setFaceDetectionResults(results);
  };

  const updateTranscript = (newTranscript) => {
    setAnswer((prevAnswer) => prevAnswer + newTranscript);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted Answer:", answer);
  };

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div ref={fullscreenRef} className="flex h-screen bg-gray-100">
      <aside className="w-1/4 p-4 bg-white shadow-lg">
        <CameraFeed onFacesDetected={handleFacesDetected} />
        <BrowserInstructions />
        <Checklist items={[
          { label: 'Camera Access', isChecked: permissions.camera },
          { label: 'Microphone Access', isChecked: permissions.microphone },
          { label: 'Fullscreen Mode', isChecked: permissions.fullscreen },
          { label: 'Tab Active', isChecked: permissions.tabActive },
          { label: 'DevTools Closed', isChecked: !permissions.devToolsOpen },
          { label: 'Single Screen Mode', isChecked: permissions.singleScreen }
        ]} />
        <button onClick={toggleFullscreen} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          {permissions.fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
      </aside>
      <div className="flex-1 p-8 space-y-4">
        <QuestionDisplay questionText={question} />
        <button onClick={() => speak(question)} disabled={ttsPlaying} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">
          Replay Question
        </button>
        <SpeechToText isRecording={isRecording} onRecordingChange={toggleRecording} onTranscriptUpdate={updateTranscript} />
        <AnswerField
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Type your answer here..."
          charLimit={500}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <SubmitButton onClick={handleSubmit} disabled={!answer.trim() || !permissions.camera || !permissions.microphone} />
        <div className="space-y-2">
          <p>Face Verified: {faceDetectionResults.faceVerified ? 'Yes' : 'No'}</p>
          <p>Multiple People Detected: {faceDetectionResults.multiplePeopleDetected ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};

export default InterviewScreen;
