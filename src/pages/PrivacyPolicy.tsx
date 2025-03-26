// src/pages/PrivacyPolicy.tsx

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">Privacy Policy</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn how we collect, use, and protect your personal information.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Section 1: Introduction */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Introduction</h2>
          <p className="mt-4 text-gray-700">
            At Glow & Glamour, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Information We Collect</h2>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and payment details.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, such as pages visited and time spent on the site.</li>
            <li><strong>Cookies:</strong> Small files stored on your device to enhance your browsing experience.</li>
          </ul>
        </section>

        {/* Section 3: How We Use Your Information */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">How We Use Your Information</h2>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li>To process and fulfill your orders.</li>
            <li>To communicate with you about your orders, promotions, and updates.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        {/* Section 4: Data Sharing */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Data Sharing</h2>
          <p className="mt-4 text-gray-700">
            We do not sell or rent your personal information to third parties. However, we may share your data with:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li>Payment processors to complete transactions.</li>
            <li>Shipping carriers to deliver your orders.</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </section>

        {/* Section 5: Your Rights */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Your Rights</h2>
          <p className="mt-4 text-gray-700">
            You have the right to:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your data.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </section>

        {/* Section 6: Changes to This Policy */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Changes to This Policy</h2>
          <p className="mt-4 text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Please review this policy periodically to stay informed.
          </p>
        </section>

        {/* Section 7: Contact Us */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Contact Us</h2>
          <p className="mt-4 text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@glowandglamour.com" className="text-pink-600 hover:underline">
              privacy@glowandglamour.com
            </a>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;