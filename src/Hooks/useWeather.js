import { useState, useCallback } from 'react'
import { searchweather } from '../Services/weather'
//
export function useWeather () {
  // weather data
  const [weather, setWeather] = useState([])

  const getWeather = useCallback(async ({ input }) => {
    const newWeather = await searchweather(input)
    setWeather(newWeather)
  }, [])
  return { weather, getWeather }
}
