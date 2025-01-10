"use client"
import axios from "axios"
import { useState } from "react"

const Earth = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [longitude, setLongitude] = useState(-95.33);
  const [latitude, setLatitude] = useState(29.78);

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BASE_URL = "https://api.nasa.gov/planetary/earth/assets";
    const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY
    const url = `${BASE_URL}?lon=${longitude}&lat=${latitude}&date=2018-02-01&dim=0.10&api_key=${API_KEY}`;

    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Earth Imagery</h1>
      <p className="mt-4 text-sm text-gray-600 text-center">
        NOTE: NASA API might have some limitations on data.
      </p>


      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Longitude:
          </label>
          <input
            type="number"
            value={longitude}
            onChange={handleLongitudeChange}
            step="0.1"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Latitude:
          </label>
          <input
            type="number"
            value={latitude}
            onChange={handleLatitudeChange}
            step="0.1"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Fetch Image
        </button>
      </form>

      {loading && <div className="mt-4 text-center text-gray-500">Loading...</div>}
      {error && <div className="mt-4 text-center text-red-500">Error: {error.message}</div>}

      {data && data.url && (
        <div className="mt-6 text-center">
          <img src={data.url} alt="Earth" className="w-full max-w-3xl mx-auto rounded-lg shadow-lg" />
        </div>
      )}

      {data && !data.url && (
        <div className="mt-6 text-center text-gray-500">No image available for the given coordinates.</div>
      )}
    </div>
  );
}

export default Earth;
