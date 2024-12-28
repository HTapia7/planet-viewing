"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Apod = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=";
    const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
    const url = BASE_URL + API_KEY;

    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response);
      } catch (err) {
        setError(err.message || "An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return (
      <p className="flex justify-center items-center h-screen text-xl text-gray-500">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center items-center h-screen text-xl text-red-500">
        {error}
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-gray-200 p-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white">
          Astronomy Picture of the Day
        </h1>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full object-cover h-72"
          src={data.url}
          alt={data.title}
        />
        <div className="p-6">
          <h2 className="text-4xl font-semibold text-white mb-4">{data.title}</h2>
          <p className="text-sm text-gray-400 mb-4">{data.date}</p>
          <p className="text-lg leading-relaxed">{data.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Apod;
