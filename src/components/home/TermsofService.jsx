import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-lg text-gray-700 mb-8">
        By using SmartGrader, you agree to the following terms and conditions. Please read them carefully.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
      <p className="text-lg text-gray-600 mb-4">
        By accessing and using SmartGrader, you accept and agree to be bound by these terms and provisions.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
      <p className="text-lg text-gray-600 mb-4">
        You agree to use SmartGrader for lawful purposes only. You must not use our services in any way that causes, or may cause, damage to SmartGrader or impairment of the availability or accessibility of SmartGrader.
      </p>
      <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
      <p className="text-lg text-gray-600 mb-4">
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Termination of Service</h2>
      <p className="text-lg text-gray-600 mb-4">
        We reserve the right to suspend or terminate your access to SmartGrader at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of SmartGrader, us, or third parties, or for any other reason.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg text-gray-600 mb-4">
        If you have any questions about these Terms of Service, please contact us at <a href="mailto:terms@smartgrader.com" className="text-blue-600 underline">terms@smartgrader.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;