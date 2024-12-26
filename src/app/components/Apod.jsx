"use client"
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
        console.log(response)
      } catch (err) {
        setError(err.message || "An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
      <img src={data.url} alt={data.title} />
    </div>
  );
};

export default Apod;
