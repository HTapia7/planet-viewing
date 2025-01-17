import React from 'react';
import Image from 'next/image';
import Earth from './assets/earth.webp'; // Ensure the path is correct

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900 flex flex-col items-center p-6 text-white">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-white">Welcome to Earth Facts</h1>
        <p className="text-lg text-gray-300 mt-4">
          Discover amazing facts about our home planet in the vastness of space.
        </p>
      </header>

      <main className="w-full max-w-5xl bg-black bg-opacity-60 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Left Section: Image */}
        <div className="flex-shrink-0">
          <Image
            src={Earth}
            alt="Earth from Space"
            width={320} // Replace with your desired width
            height={320} // Replace with your desired height
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Section: Facts */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-300 border-b-2 border-blue-500 pb-2">
            Fascinating Facts about Earth
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3 text-gray-300">
            <li>
              Earth is the third planet from the Sun and the only known planet to support life.
            </li>
            <li>
              About 71% of Earth's surface is covered with water.
            </li>
            <li>
              Earth's atmosphere is made up of 78% nitrogen, 21% oxygen, and trace amounts of other gases.
            </li>
            <li>
              The Earth's core is as hot as the surface of the Sun, with temperatures around 5,500°C (9,932°F).
            </li>
            <li>
              A day on Earth (one rotation) is approximately 24 hours, and a year (one orbit around the Sun) is 365.25 days.
            </li>
            <li>
              Earth has one natural satellite, the Moon, which is about 1/6th the size of Earth.
            </li>
            <li>
              Earth is not a perfect sphere; it is slightly flattened at the poles and bulging at the equator due to its rotation.
            </li>
            <li>
              The Earth's magnetic field, generated by its molten core, protects the planet from harmful solar radiation.
            </li>
            <li>
              Earth is around 4.54 billion years old, based on radiometric age dating of meteorite material.
            </li>
            <li>
              The Pacific Ocean is the largest and deepest ocean, covering more than 30% of Earth's surface.
            </li>
            <li>
              Mount Everest, Earth's highest point above sea level, is approximately 8,848 meters (29,029 feet) tall.
            </li>
            <li>
              Earth's gravity is strong enough to hold its atmosphere in place but weak enough to allow human exploration into space.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
