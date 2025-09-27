import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            Influencaa
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300" to="/">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300" to="/gigs">
              Explore Gigs
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300" to="/create-gig">
              Create Gig
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300" to="/login">
              Login
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <span className="text-2xl">&#10005;</span> // X icon
              ) : (
                <span className="text-2xl">&#9776;</span> // Hamburger icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2 shadow-lg animate-fade-in">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/gigs"
            className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Explore Gigs
          </Link>
          <Link
            to="/create-gig"
            className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Create Gig
          </Link>
          <Link
            to="/login"
            className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
