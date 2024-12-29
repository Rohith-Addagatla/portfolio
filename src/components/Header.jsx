// src/components/Header.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold font-signature">Portfolio</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#experience" className="hover:text-blue-400">Experience</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4 px-4 transition-all duration-300 ease-in-out transform">
            <a
              href="#about"
              className="block text-center py-2 text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="block text-center py-2 text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block text-center py-2 text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
