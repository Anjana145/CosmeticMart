// src/pages/FAQ.tsx

import React, { useState } from "react";

const FAQ: React.FC = () => {
  // State to track which FAQ item is expanded
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // List of FAQs
  const faqs = [
    {
      question: "What types of products do you offer?",
      answer:
        "We offer a wide range of cosmetic products, including skincare, makeup, haircare, and beauty tools. All our products are cruelty-free and eco-friendly.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Yes, all our products are 100% cruelty-free. We do not test on animals at any stage of product development.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on your location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the courier's website.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. The product must be unused and in its original packaging. Please contact our support team to initiate a return.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-gray-600">
          Find answers to commonly asked questions about Glow & Glamour.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-all"
          >
            {/* Question */}
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-pink-700">{faq.question}</h3>
              <span
                className={`transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼ {/* Down arrow */}
              </span>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default FAQ;