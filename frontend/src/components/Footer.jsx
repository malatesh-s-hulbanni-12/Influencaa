import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Influencaa</h2>
          <p className="text-sm">
            Connecting businesses with the right influencers for impactful
            marketing campaigns.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gigs" className="hover:text-white transition">
                Explore Gigs
              </Link>
            </li>
            <li>
              <Link to="/create-gig" className="hover:text-white transition">
                Create Gig
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Influencaa. All rights reserved.
      </div>
    </footer>
  );
}
