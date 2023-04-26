import { API_KEY } from './API_KEY'

export async function searchweather (input) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`)
    const json = await response.json()
    const data = [{
      city: json.name,
      country: json.sys.country,
      id: json.sys.id,
      temp: json.main.temp,
      min: json.main.temp_min,
      humidity: json.main.humidity,
      wind: json.wind.speed
    }
    ]
    return data
  } catch (e) {
    throw new Error('No results xd')
  }
}
