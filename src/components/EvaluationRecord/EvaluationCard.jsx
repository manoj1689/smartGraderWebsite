import React, { useState } from "react";

const EvaluationCard = ({ record }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded shadow-md p-4 mb-4">
      <div
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg font-semibold">{record.question}</div>
          </div>
          <button className="text-xl">
            {isExpanded ? "−" : "+"}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <div className="mb-2">
            <span className="text-blue-500">Your Answer:</span> {record.answer}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Feedback</span>
            <ul>
              <li>Factual Accuracy: {record.feedback.factualAccuracy}</li>
              <li>Completeness: {record.feedback.completeness}</li>
              <li>Relevance: {record.feedback.relevance}</li>
              <li>Coherence: {record.feedback.coherence}</li>
              <li>Scoring: {record.feedback.scoring}</li>
            </ul>
          </div>
          <div className="text-lg font-bold">
            Final Score: {record.score}
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluationCard;
