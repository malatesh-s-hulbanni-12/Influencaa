import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BusinessDashboard() {
  const [orders, setOrders] = useState([]);

  // Placeholder: Fetch business orders
  useEffect(() => {
    // TODO: Replace with API call to fetch orders for the logged-in business
    const mockOrders = [
      { id: 1, gigTitle: "Social Media Promotion", status: "completed" },
      { id: 2, gigTitle: "Logo Design", status: "pending" },
      { id: 3, gigTitle: "Blog Writing", status: "in progress" },
    ];
    setOrders(mockOrders);
  }, []);

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((order) => order.status === "pending")
    .length;
  const completedOrders = orders.filter(
    (order) => order.status === "completed"
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Business Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Pending Orders</h2>
          <p className="text-3xl font-bold text-yellow-600 mt-2">
            {pendingOrders}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Completed Orders</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {completedOrders}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link
          to="/orders"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-center"
        >
          Manage Orders
        </Link>
        <Link
          to="/gigs"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition text-center"
        >
          Explore Gigs
        </Link>
      </div>

      {/* Orders List Preview */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Recent Orders
        </h2>
        {orders.length > 0 ? (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
              >
                <span>{order.gigTitle}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : order.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No orders yet.</p>
        )}
      </div>
    </div>
  );
}
