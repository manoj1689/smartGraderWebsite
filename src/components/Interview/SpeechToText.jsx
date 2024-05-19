import React, { useState, useEffect, useRef } from 'react';

const SpeechToText = ({ onTranscriptUpdate, isRecording, onRecordingChange }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [transcript, setTranscript] = useState('');
  const recognition = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;

      recognition.current.onstart = () => {
        setIsListening(true);
        onRecordingChange(true);
      };

      recognition.current.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          const transcriptPiece = result[0].transcript;
          if (result.isFinal) {
            setTranscript((prevTranscript) => prevTranscript + transcriptPiece.trim() + ' ');
            onTranscriptUpdate(transcript + transcriptPiece.trim());
            interimTranscript = ' ';
          } else {
            interimTranscript += transcriptPiece;
          }
        }
        setTranscript((prevTranscript) => prevTranscript + interimTranscript.trim() + ' ');
      };

      recognition.current.onend = () => {
        setIsListening(false);
        onRecordingChange(false);
        if (isRecording) {
          recognition.current.start(); // Restart if still recording
        }
      };
    } else {
      setIsSupported(false);
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
        recognition.current = null;
      }
    };
  }, [onTranscriptUpdate, onRecordingChange, isRecording, transcript]);

  const toggleListening = () => {
    if (isListening) {
      recognition.current.stop();
    } else {
      setTranscript('');
      recognition.current.start();
    }
  };

  if (!isSupported) {
    return (
      <div className="text-red-600 bg-red-100 p-4 border border-red-300 rounded-lg">
        Speech recognition is not available in your browser.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <button
        onClick={toggleListening}
        className={`px-4 py-2 rounded-lg font-semibold text-white ${
          isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}>
        {isListening ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};

export default SpeechToText;
