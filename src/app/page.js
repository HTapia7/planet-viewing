import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900 flex flex-col items-center p-6 text-white">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-white">Welcome to Earth Facts</h1>
        <p className="text-lg text-gray-300 mt-4">
          Discover amazing facts about our home planet in the vastness of space.
        </p>
      </header>

      <main className="w-full max-w-3xl bg-black bg-opacity-60 shadow-lg rounded-lg p-6">
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
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
