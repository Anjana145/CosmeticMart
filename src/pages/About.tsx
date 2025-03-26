// src/pages/AboutUs.tsx

import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the story behind Glow & Glamour - your trusted cosmetic partner.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Section 1: Our Mission */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Our Mission</h2>
          <p className="mt-4 text-gray-700">
            At Glow & Glamour, our mission is to empower individuals to feel confident and beautiful with high-quality, cruelty-free cosmetics. We believe beauty should be inclusive, accessible, and sustainable.
          </p>
        </section>

        {/* Section 2: Our Vision */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Our Vision</h2>
          <p className="mt-4 text-gray-700">
            We envision a world where everyone can express their unique beauty without compromise. Through innovation and ethical practices, we aim to redefine the standards of the cosmetic industry.
          </p>
        </section>

        {/* Section 3: Our Values */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Our Values</h2>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li><strong>Inclusivity:</strong> Products for all skin tones and types.</li>
            <li><strong>Sustainability:</strong> Eco-friendly packaging and cruelty-free formulas.</li>
            <li><strong>Quality:</strong> Rigorous testing ensures safe and effective products.</li>
            <li><strong>Innovation:</strong> Constantly exploring new trends and technologies.</li>
          </ul>
        </section>

        {/* Section 4: Meet the Team */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Meet the Team</h2>
          <p className="mt-4 text-gray-700">
            Our team is made up of passionate beauty experts, chemists, and designers who are dedicated to creating products that inspire confidence and joy.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;