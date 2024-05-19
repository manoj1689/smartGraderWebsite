import React from "react";
import EvaluationCard from "./EvaluationCard";

const EvaluationRecord = ({ user }) => {
  return (
    <div className="w-full max-w-4xl p-4">
      <h2 className="text-2xl font-bold mb-4">Evaluation Records</h2>
      {user.evaluationRecords.map((record, index) => (
        <EvaluationCard key={index} record={record} />
      ))}
    </div>
  );
};

export default EvaluationRecord;
