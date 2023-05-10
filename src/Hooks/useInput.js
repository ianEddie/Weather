import { useState, useCallback, useRef } from 'react'
import { searchweather } from '../Services/weather'
import { searchTime } from '../Services/Time'
//
export function useInput (input) {
  const [weather, setWeather] = useState([]) // weather data
  //
  const [time, setTime] = useState([]) // time data
  //
  const [loading, setLoading] = useState(false) // loader
  //
  const [errors, setErrors] = useState(null) // error
  //
  const previusSearch = useRef(input) // avoid the same search twice (evitar la misma busqueda dos veces)
  // get data function
  const getInput = useCallback(async ({ input }) => {
    if (input === previusSearch.current) return
    try {
      setLoading(true)
      setErrors(null)
      previusSearch.current = input
      const newWeather = await searchweather(input)
      setWeather(newWeather)
      const newTime = await searchTime(input)
      setTime(newTime)
    } catch (e) {
      setErrors(e.message)
    } finally {
      setLoading(false)
    }
  }, [])
  return { weather, getInput, time, loading, errors }
}
