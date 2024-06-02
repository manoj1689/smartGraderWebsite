import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg text-gray-700 mb-8">
        We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
      <p className="text-lg text-gray-600 mb-4">
        We collect personal information such as your name, email address, and assessment responses to provide and improve our services.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Information Use</h2>
      <p className="text-lg text-gray-600 mb-4">
        We use your personal information to deliver our services, personalize your experience, and communicate with you. We do not share your information with third parties without your consent.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
      <p className="text-lg text-gray-600 mb-4">
        We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg text-gray-600 mb-4">
        If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:privacy@smartgrader.com" className="text-blue-600 underline">privacy@smartgrader.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;