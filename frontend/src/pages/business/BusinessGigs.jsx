import { useState, useContext, useEffect } from "react";
import { GigContext } from "../../context/GigContext";
import SearchBar from "../../components/SearchBar";

export default function BusinessGigs() {
  const { gigs } = useContext(GigContext); // All available gigs
  const [filteredGigs, setFilteredGigs] = useState(gigs);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setFilteredGigs(gigs);
  }, [gigs]);

  const handleSearch = (query) => {
    if (!query) return setFilteredGigs(gigs);
    const lowerQuery = query.toLowerCase();
    setFilteredGigs(
      gigs.filter(
        (gig) =>
          gig.title.toLowerCase().includes(lowerQuery) ||
          gig.category.toLowerCase().includes(lowerQuery)
      )
    );
  };

  const placeOrder = (gig) => {
    const newOrder = {
      id: Date.now(),
      gigTitle: gig.title,
      influencer: "Influencer Name", // In real app, get from gig creator
      price: gig.price,
      deliveryTime: gig.deliveryTime,
      status: "pending",
    };
    setOrders([...orders, newOrder]);
    alert(`Order placed for ${gig.title} successfully!`);
    console.log("Order:", newOrder);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Gigs</h1>

      {/* Search Bar */}
      <SearchBar placeholder="Search gigs..." onSearch={handleSearch} />

      {filteredGigs.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGigs.map((gig) => (
            <div
              key={gig.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden"
            >
              {gig.image && (
                <img
                  src={gig.image}
                  alt={gig.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {gig.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{gig.category}</p>
                <p className="text-gray-800 font-medium">
                  ${gig.price} &bull; {gig.deliveryTime} days
                </p>
                <button
                  onClick={() => placeOrder(gig)}
                  className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  Place Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-8">No gigs found.</p>
      )}
    </div>
  );
}
