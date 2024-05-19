// QuestionDisplay.jsx
import React from 'react';

const QuestionDisplay = ({ questionText }) => {
  if (!questionText) {
    return (
      <div className="flex flex-col items-center justify-center p-4 border border-dashed border-gray-400 rounded-lg bg-gray-50 text-gray-700">
        Loading question...
      </div>
    );
  }

  return (
    <div className="p-4 border border-solid border-gray-300 rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">Question</h2>
      <p className="text-base text-gray-800">{questionText}</p>
    </div>
  );
};

export default QuestionDisplay;
