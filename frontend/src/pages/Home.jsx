import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white border border-white rounded-2xl mx-8 mt-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Connect Businesses with Influencers
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          A marketplace where influencers showcase their reach and businesses find
          the perfect partner for social media marketing campaigns.
        </p>
        <div className="flex gap-4">
          <Link
            to="/gigs"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Explore Gigs
          </Link>
          <Link
            to="/create-gig"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Become an Influencer
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose Our Platform?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              For Businesses
            </h3>
            <p className="text-gray-600">
              Find influencers that match your niche, budget, and campaign goals with
              transparent pricing.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              For Influencers
            </h3>
            <p className="text-gray-600">
              Showcase your reach, manage gigs, and grow your brand with secure
              payments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Secure Platform
            </h3>
            <p className="text-gray-600">
              End-to-end secure transactions and smooth communication between
              businesses and influencers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 text-center text-white border border-white rounded-2xl mx-8 mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="mb-6">
          Join our platform today and make your marketing campaigns a success.
        </p>
        <Link
          to="/signup"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}
