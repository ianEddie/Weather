import React from 'react'
import { Info } from './Components/Info'
import { useInput } from './Hooks/useInput'
import { useWeather } from './Hooks/useWeather'

const App = () => {
  // input
  const { error, input, updateInput } = useInput()
  // get data
  const { getWeather, weather } = useWeather({ input })
  // handleChange
  const handleChange = (event) => {
    const newInput = event.target.value
    updateInput(newInput)
  }
  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault()
    getWeather({ input })
  }
  //
  // console.log(weather)
  return (
    <div className='bg-slate-900 w-full h-screen flexed'>
      {/* Header */}
      <header>
        {/* Form */}
        <form onSubmit={handleSubmit} className='w-full flexed gap-5'>
          <input
            type='text'
            value={input}
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
        <div>
          {error && <p>{error}</p>}
        </div>
      </header>
      {/* Main */}
      <main>
        <Info data={weather} />
      </main>
    </div>
  )
}

export default App
