import React from 'react'
import { Info } from './Components/Info'
import { useValidate } from './Hooks/useValidate'
import { useInput } from './Hooks/useInput'
import { motion } from 'framer-motion'
import { formAnimate, loaderAnimate } from './Animations/animations'
import { sunIcon } from './Icons/icons'
import { Sign } from './Components/Sign'
//
const App = () => {
  // input
  const { error, input, updateInput } = useValidate()
  // get data
  const { getInput, weather, time, loading, errors } = useInput({ input })
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
  return (
    <div className=' w-full h-screen flexed'>
      {/* Header */}
      <header>
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit} className='w-full flexed gap-5'
          {...formAnimate}
        >
          <input
            type='text'
            value={input}
            onChange={handleChange}
            className={`${error ? 'border-red-500 border-2 bg-red-500/10' : 'border-none bg-white/80'}`}
            placeholder='City name'
          />
          <motion.button
            className='bg-white/80 rounded-full w-20'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >Search
          </motion.button>
        </motion.form>
        <div className='text-red-500'>
          {error && <p>{error}</p>}
        </div>
      </header>
      {/* Main */}
      <main>
        {
            errors
              ? <Sign />
              : (loading ? <motion.img src={sunIcon} alt='loader' {...loaderAnimate} /> : <Info weather={weather} time={time} />)
        }

      </main>
    </div>
  )
}

export default App
