import { useState, useCallback } from 'react'
import { searchweather } from '../Services/weather'
import { searchTime } from '../Services/Time'
//
export function useInput () {
  // weather data
  const [weather, setWeather] = useState([])
  const [time, setTime] = useState([])
  const getInput = useCallback(async ({ input }) => {
    const newWeather = await searchweather(input)
    setWeather(newWeather)
    const newTime = await searchTime(input)
    setTime(newTime)
  }, [])
  return { weather, getInput, time }
}
