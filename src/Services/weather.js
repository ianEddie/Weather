import { API_KEY } from './weatherApiKey'

export async function searchweather (input) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`)
    const json = await response.json()

    const data = [{
      city: json.name,
      country: json.sys.country,
      description: json.weather[0].description,
      id: json.sys.id,
      temp: json.main.temp,
      min: json.main.temp_min,
      max: json.main.temp_max,
      humidity: json.main.humidity,
      wind: json.wind.speed
    }
    ]
    return data
  } catch (e) {
    throw new Error('No results xd')
  }
}
