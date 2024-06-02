import React from "react";
import EvaluationCard from "./EvaluationCard";

const EvaluationRecord = ( {user }) => {
  return (
    <div className="w-full  p-4 ml-[-1.5%]">
      <h2 className="text-2xl font-bold mb-4">Evaluation Records</h2>
      {user.evaluationRecords?.map((record, index) => (
        <EvaluationCard key={index} record={record} />
      ))}
    </div>
  );
};

export default EvaluationRecord;
