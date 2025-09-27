import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [gigs, setGigs] = useState([]);

  // Placeholder: Fetch influencer's gigs
  useEffect(() => {
    // TODO: Replace with API call to fetch influencer gigs
    const mockGigs = [
      { id: 1, title: "Social Media Promotion", status: "active" },
      { id: 2, title: "Logo Design", status: "pending" },
    ];
    setGigs(mockGigs);
  }, []);

  const totalGigs = gigs.length;
  const activeGigs = gigs.filter((gig) => gig.status === "active").length;
  const pendingGigs = gigs.filter((gig) => gig.status === "pending").length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Influencer Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Gigs</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{totalGigs}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Active Gigs</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">{activeGigs}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-semibold text-gray-700">Pending Gigs</h2>
          <p className="text-3xl font-bold text-yellow-600 mt-2">{pendingGigs}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link
          to="/create-gig"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-center"
        >
          Create New Gig
        </Link>
        <Link
          to="/my-gigs"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition text-center"
        >
          Manage My Gigs
        </Link>
      </div>

      {/* Gigs List Preview */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Gigs
        </h2>
        {gigs.length > 0 ? (
          <ul className="space-y-4">
            {gigs.map((gig) => (
              <li
                key={gig.id}
                className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
              >
                <span>{gig.title}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    gig.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {gig.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have not created any gigs yet.</p>
        )}
      </div>
    </div>
  );
}
