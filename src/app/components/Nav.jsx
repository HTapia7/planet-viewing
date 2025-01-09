"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "APOD", link: "/apod" },
    { name: "Earth" , link: "earth"}
  ];

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="hover:scale-105 transition-transform">
              <Image
                src={Logo}
                alt="Logo"
                width={110}
                height={110}
                className="rounded-full"
              />
            </div>
          </div>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="text-white text-base font-medium hover:text-gray-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16m-7 6h7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="px-4 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="block text-white text-base font-medium hover:text-gray-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
