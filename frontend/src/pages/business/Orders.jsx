import { useState, useEffect } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // Placeholder: Fetch all orders for the business
  useEffect(() => {
    // TODO: Replace with API call to fetch business orders
    const mockOrders = [
      {
        id: 1,
        gigTitle: "Social Media Promotion",
        influencer: "John Doe",
        price: 150,
        deliveryTime: 3,
        status: "completed",
      },
      {
        id: 2,
        gigTitle: "Logo Design",
        influencer: "Jane Smith",
        price: 100,
        deliveryTime: 5,
        status: "pending",
      },
      {
        id: 3,
        gigTitle: "Blog Writing",
        influencer: "Alice Johnson",
        price: 80,
        deliveryTime: 2,
        status: "in progress",
      },
    ];
    setOrders(mockOrders);
  }, []);

  const updateStatus = (id, newStatus) => {
    // TODO: Call API to update order status
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
    console.log(`Updated order ${id} status to ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Orders</h1>

      {orders.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {order.gigTitle}
                </h3>
                <p className="text-gray-600 mb-1">Influencer: {order.influencer}</p>
                <p className="text-gray-800 font-medium mb-1">
                  ${order.price} &bull; {order.deliveryTime} days
                </p>
                <p
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                    order.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : order.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </p>

                {/* Update Status */}
                <div className="flex gap-2">
                  {order.status !== "completed" && (
                    <button
                      onClick={() =>
                        updateStatus(
                          order.id,
                          order.status === "pending" ? "in progress" : "completed"
                        )
                      }
                      className="flex-1 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                    >
                      {order.status === "pending" ? "Start" : "Complete"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-8">No orders yet.</p>
      )}
    </div>
  );
}
