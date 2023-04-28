import React from 'react'
import { Info } from './Components/Info'
import { useValidate } from './Hooks/useValidate'
import { useInput } from './Hooks/useInput'

const App = () => {
  // input
  const { error, input, updateInput } = useValidate()
  // get data
  const { getInput, weather, time } = useInput({ input })
  // handleChange
  const handleChange = (event) => {
    const newInput = event.target.value
    updateInput(newInput)
  }
  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault()
    getInput({ input })
  }
  //
  // console.log(weather)
  return (
    <div className=' w-full h-screen flexed'>
      {/* Header */}
      <header>
        {/* Form */}
        <form onSubmit={handleSubmit} className='w-full flexed gap-5'>
          <input
            type='text'
            value={input}
            onChange={handleChange}
          />
          <button className='bg-white/80 rounded-full w-20 '>Search</button>
        </form>
        <div className='text-red-500'>
          {error && <p>{error}</p>}
        </div>
      </header>
      {/* Main */}
      <main>
        <Info weather={weather} time={time} />
      </main>
    </div>
  )
}

export default App
