// src/pages/ContactUs.tsx

import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We'd love to hear from you! Reach out to us using the form below.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Section 1: Contact Form */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Send Us a Message</h2>
          <form className="mt-6 space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                placeholder="your-email@example.com"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                placeholder="How can we assist you?"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Section 2: Contact Information */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700">Contact Information</h2>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@glowandglamour.com" className="text-pink-600 hover:underline">
                cosmeticAnju@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+1234567890" className="text-pink-600 hover:underline">
                +977 9800000000
              </a>
            </li>
            <li>
              <span className="font-semibold">Address:</span>{" "}
              <span>Lalitpur,Nepal</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;