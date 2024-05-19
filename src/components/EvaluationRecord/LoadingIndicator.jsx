import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';

const LoadingIndicator = () => (
  <div className="flex justify-center mt-8">
    <FaCircleNotch className="text-blue-500 animate-spin" size={46} />
  </div>
);

export default LoadingIndicator;
