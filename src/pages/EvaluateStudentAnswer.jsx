import React, { useState } from 'react';
import axiosInstance from '../services/api/axiosInstance';
import ProgressBar from './ProgressBar';
import ErrorAlert from './ErrorAlert';

const EvaluateStudentAnswer = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setProgress(30);

    try {
      const response = await axiosInstance.post('/evaluate/answer', {
        question,
        user_answer: answer,
        knowledge_level: 'Advanced',
      });
      setEvaluation(response.data);
      setError(null);
      setProgress(100);
    } catch (err) {
      setError('An error occurred while evaluating the answer.');
      setProgress(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <label className="w-full">
          <span className="block mb-2 text-sm font-bold text-gray-700">Question:</span>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-lg w-full h-20 resize-none mb-4"
          />
        </label>
        <label className="w-full">
          <span className="block mb-2 text-sm font-bold text-gray-700">Answer:</span>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-lg w-full h-24 resize-none"
          />
        </label>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${loading ? 'bg-blue-300 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Evaluating...' : 'Evaluate'}
        </button>
        <ProgressBar progress={progress} />
        <ErrorAlert error={error} />
        {evaluation && (
          <div className="bg-green-100 p-4 mt-4 rounded-lg">
            <h3 className="text-lg font-semibold">Evaluation Result</h3>
            <pre>{JSON.stringify(evaluation, null, 2)}</pre>
          </div>
        )}
      </form>
    </div>
  );
};

export default EvaluateStudentAnswer;
