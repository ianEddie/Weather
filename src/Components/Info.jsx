import { windIcon, humidityIcon, termoMaxIcon, termoMinIcon } from '../Icons/icons'

//
export function Info ({ weather, time }) {
  return (
    <>
      {weather.map((item) => (
        <section key={item.id} className='w-1/3 h-full flex flex-wrap justify-center font-primary bg-pink-300 rounded-[2em]'>

          {/* Part 1 */}
          <div className='w-full bg-red-500 flex flex-wrap pl-7 py-7 rounded-[2em]'>
            <section className='w-full'>
              <h1 className='text-[1.2em] font-medium'>{item.city}</h1>
              <h1 className='text-[0.8em] tracking-widest'>{time}</h1>
            </section>

            <section className='w-full  grid grid-cols-1 place-content-end'>
              <div className='text-[2.5em] w-full'>{item.temp}°</div>
              <div>{item.description}</div>
            </section>
          </div>
          {/* Part 2 */}
          <section className='w-full grid grid-cols-2 place-items-center'>
            {/* Max Temp */}
            <div className='flexed gap-2'>
              <span className='w-full text-center text-sm'>Max</span>
              <img src={termoMaxIcon} alt='Thermo icon' className='h-6' />
              <h1>{item.max}°</h1>
            </div>
            {/* Wind */}
            <div className='flexed gap-y-2 gap-x-3'>
              <span className='w-full text-center text-sm'>Wind</span>
              <img src={windIcon} alt='Wind Icon' className='h-6' />
              <h1>{item.wind} <span className='font-letters'>km/h</span></h1>
            </div>
            {/* Min Temp */}
            <div className='flexed gap-2'>
              <span className='w-full text-center text-sm'>Min</span>
              <img src={termoMinIcon} alt='Thermo icon' className='h-6' />
              <h1>{item.min}</h1>
            </div>
            {/* Humidity */}
            <div className='flexed gap-2'>
              <span className='w-full text-center text-sm'>Humidity</span>
              <img src={humidityIcon} alt='Thermo icon' className='h-6' />
              <h1>{item.humidity}%</h1>
            </div>
          </section>
        </section>
      ))}
    </>
  )
}
