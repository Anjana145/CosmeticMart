// src/pages/ShippingInfo.tsx

import React from "react";

const ShippingInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">Shipping Information</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn about our shipping policies and delivery options.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Section 1: Domestic Shipping */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Domestic Shipping</h2>
          <p className="mt-4 text-gray-700">
            We offer free standard shipping within the country for orders over $50. Delivery typically takes 3–5 business days.
          </p>
        </section>

        {/* Section 2: International Shipping */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">International Shipping</h2>
          <p className="mt-4 text-gray-700">
            We ship internationally to most countries. Shipping costs and delivery times vary depending on your location. Please contact us for more details.
          </p>
        </section>

        {/* Section 3: Tracking Your Order */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Tracking Your Order</h2>
          <p className="mt-4 text-gray-700">
            Once your order is shipped, you will receive a tracking number via email. Use this number to track your package on our website or the courier's website.
          </p>
        </section>

        {/* Section 4: Return Policy */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Return Policy</h2>
          <p className="mt-4 text-gray-700">
            We accept returns within 30 days of purchase. The product must be unused and in its original packaging. Please contact our support team to initiate a return.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ShippingInfo;