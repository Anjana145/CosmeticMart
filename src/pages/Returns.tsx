// src/pages/Returns.tsx

import React from "react";

const Returns: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">Returns Policy</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn about our return policy and how to initiate a return.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Section 1: Overview */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Overview</h2>
          <p className="mt-4 text-gray-700">
            At Glow & Glamour, we want you to be completely satisfied with your purchase. If you're not happy with your order, you may return it within 30 days of delivery for a refund or exchange.
          </p>
        </section>

        {/* Section 2: Eligibility */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Eligibility</h2>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li>The product must be unused and in its original packaging.</li>
            <li>Include all tags, labels, and accessories that came with the product.</li>
            <li>Provide the original receipt or proof of purchase.</li>
            <li>Custom or personalized items are non-returnable unless defective.</li>
          </ul>
        </section>

        {/* Section 3: How to Initiate a Return */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">How to Initiate a Return</h2>
          <ol className="mt-4 space-y-2 text-gray-700 list-decimal list-inside">
            <li>Contact our support team at{" "}
              <a href="mailto:support@glowandglamour.com" className="text-pink-600 hover:underline">
                support@glowandglamour.com
              </a>{" "}
              with your order number and reason for return.
            </li>
            <li>We will provide you with a Return Merchandise Authorization (RMA) number and instructions for returning your item.</li>
            <li>Ship the item back to us using the provided return address. Please note that return shipping costs are the responsibility of the customer unless the return is due to an error on our part.</li>
          </ol>
        </section>

        {/* Section 4: Refunds */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Refunds</h2>
          <p className="mt-4 text-gray-700">
            Once we receive and inspect your returned item, we will process your refund within 5–7 business days. Refunds will be issued to the original payment method. Please allow additional time for your bank to process the refund.
          </p>
        </section>

        {/* Section 5: Exchanges */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Exchanges</h2>
          <p className="mt-4 text-gray-700">
            If you'd like to exchange an item for a different size or color, please contact our support team. We will guide you through the exchange process and ensure you receive the correct item as quickly as possible.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Returns;