// src/components/ErrorAlert.jsx
import React from 'react';

const ErrorAlert = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-red-100 p-4 mt-4 rounded-lg">
      <p className="text-red-700">{error}</p>
    </div>
  );
};

export default ErrorAlert;
