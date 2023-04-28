import { API_KEY } from './timeApiKey'
//
export async function searchTime (input) {
  try {
    const response = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${API_KEY}&location=${input}`)
    const json = await response.json()
    const timeData = json.datetime
    return timeData
  } catch (e) {
    throw new Error('Error searching time')
  }
}
