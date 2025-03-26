// src/pages/TrackOrder.tsx

import React, { useState } from "react";

interface OrderStatus {
  orderId: string;
  status: string;
  estimatedDelivery: string;
}

const TrackOrder: React.FC = () => {
  // State for the order ID input
  const [orderId, setOrderId] = useState<string>("");
  // State for the order status
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  // State for loading and error handling
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Mock API function to simulate fetching order status
  const fetchOrderStatus = async (id: string): Promise<OrderStatus> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "12345") {
          resolve({
            orderId: id,
            status: "Shipped",
            estimatedDelivery: "March 30, 2024",
          });
        } else {
          reject("Order not found. Please check your order ID.");
        }
      }, 1000); // Simulate network delay
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const status = await fetchOrderStatus(orderId);
      setOrderStatus(status);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">Track Your Order</h1>
        <p className="mt-4 text-lg text-gray-600">
          Enter your order ID to check the status of your shipment.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Section 1: Order Tracking Form */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Enter Your Order ID</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
                Order ID
              </label>
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                placeholder="Enter your order ID"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:bg-gray-400"
            >
              {loading ? "Tracking..." : "Track Order"}
            </button>
          </form>
        </section>

        {/* Section 2: Order Status */}
        {error && (
          <section className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md">
            <p>{error}</p>
          </section>
        )}

        {orderStatus && (
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Order Status</h2>
            <p className="text-gray-700">
              <strong>Order ID:</strong> {orderStatus.orderId}
            </p>
            <p className="text-gray-700">
              <strong>Status:</strong> {orderStatus.status}
            </p>
            <p className="text-gray-700">
              <strong>Estimated Delivery:</strong> {orderStatus.estimatedDelivery}
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default TrackOrder;