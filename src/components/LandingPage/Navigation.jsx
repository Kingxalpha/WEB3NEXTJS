// Navbar.js
import React, { useState } from 'react';

const Navigatioon = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex items-center justify-between">
      <a href="#" className="text-white text-lg font-semibold">Your Logo</a>

      {/* Navigation Links (ul) */}
      <ul className={`md:flex space-x-4 ${mobileMenuOpen ? 'hidden' : 'hidden md:flex'}`}>
        <li><a href="#" className="text-white hover:text-gray-300 transition">Home</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 transition">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 transition">Services</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 transition">Contact</a></li>
      </ul>

      {/* Mobile Toggle Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    {/* Mobile Menu (hidden by default) */}
    <div className={`md:hidden bg-gray-800 p-4 ${mobileMenuOpen ? '' : 'hidden'}`}>
      <ul className="flex flex-col space-y-4">
        <li><a href="#" className="text-white hover:text-gray-300 transition">Home</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 transition">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 transition">Services</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 transition">Contact</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default Navigatioon;
