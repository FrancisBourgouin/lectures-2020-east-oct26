import { useEffect, useState } from 'react';
import useAxiosGET from './useAxiosGET'
import axios from 'axios'

export default function useWeatherAPI(defaultCity) {
  const [currentCity, setCurrentCity] = useState(defaultCity)
  const [currentWeather, setCurrentWeather] = useState(null)

  const updateCity = city => setCurrentCity(city)
  const API = "09fd719b4b698ec0260e424f83378e3d"

  useEffect(() => {
    console.log("Starting API call")
    axios
      .get(`//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API}`)
      .then(res => setCurrentWeather(res.data))
      .catch(pokemon => console.error(pokemon))
      .finally(() => console.log("All of it was a dream"))
  }, [currentCity])

  return { currentWeather, currentCity, updateCity }
}