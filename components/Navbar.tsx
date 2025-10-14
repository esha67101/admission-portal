"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">
              📚 EduPortal
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/admission" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Apply Now
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              About Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/admission"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover-lift"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 fade-in">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/admission"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}