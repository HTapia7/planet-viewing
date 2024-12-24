import React, { useEffect } from 'react'

const Apod = () => {

  const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key="
  const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY 
  const Url = BASE_URL + API_KEY
  console.log(Url)

  useEffect(()=> {

  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Apod
