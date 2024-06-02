import React from 'react';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What is SmartGrader?</h2>
        <p className="text-lg text-gray-600">SmartGrader is an AI-driven assessment platform designed to help candidates prepare for interviews and exams through realistic mock interviews and personalized feedback.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How do I start my assessment?</h2>
        <p className="text-lg text-gray-600">To start your assessment, enter your passcode on the landing page and click the "Start Interview" button. Follow the on-screen instructions to complete your interview.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What should I do if I encounter issues during the interview?</h2>
        <p className="text-lg text-gray-600">If you encounter any issues, you can pause the interview and contact our support team via email at <a href="mailto:support@smartgrader.com" className="text-blue-600 underline">support@smartgrader.com</a> or use the live chat support on our website.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Is my data secure?</h2>
        <p className="text-lg text-gray-600">Yes, we take your privacy and security seriously. Your responses and personal information are encrypted and kept confidential. Please review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> for more details.</p>
      </div>
    </div>
  );
};

export default FAQ;