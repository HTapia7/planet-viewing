"use client"
import React, { useState } from 'react';
import Logo from "../components/Logo.jsx"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo/>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
              >
                About
              </a>
              <a
                href="/services"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
            >
              About
            </a>
            <a
              href="/services"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
