import { windIcon, humidityIcon, termoMaxIcon, termoMinIcon } from '../Icons/icons'
import { styles } from '../Styles/styles'
//
export function Info ({ weather, time }) {
  return (
    <>
      {
         weather.map((item) => (
           <section key={item.id} className={`${styles.responsive}`}>

             {/* Part 1 */}
             <section className={`${styles.section_1} ${item.temp < 10 ? 'bg-1' : 'bg-2'}`}>
               <section className='w-full'>
                 <h1 className='text-[1.2em] '>{item.city}</h1>
                 <h1 className='text-[0.8em] tracking-widest'>{time}</h1>
               </section>
               <section className='w-full grid grid-cols-1 place-content-end'>
                 <div className='text-[2.5em] w-full'>{item.temp}°</div>
                 <div>{item.description}</div>
               </section>
             </section>

             {/* Part 2 */}
             <section className={`${styles.section_2}`}>
               {/* Max Temp */}
               <div className='flexed gap-2'>
                 <span className={`${styles.span}`}>Max</span>
                 <img src={termoMaxIcon} alt='Thermo icon' className='h-6' />
                 <h1>{item.max}°</h1>
               </div>
               {/* Wind */}
               <div className='flexed gap-2'>
                 <span className={`${styles.span}`}>Wind</span>
                 <img src={windIcon} alt='Wind Icon' className='h-6' />
                 <h1>{item.wind} <span className='font-letters'>km/h</span></h1>
               </div>
               {/* Min Temp */}
               <div className='flexed gap-2'>
                 <span className={`${styles.span}`}>Min</span>
                 <img src={termoMinIcon} alt='Thermo icon' className='h-6' />
                 <h1>{item.min}</h1>
               </div>
               {/* Humidity */}
               <div className='flexed gap-2'>
                 <span className={`${styles.span}`}>Humidity</span>
                 <img src={humidityIcon} alt='Thermo icon' className='h-6' />
                 <h1>{item.humidity}%</h1>
               </div>

             </section>
           </section>
         ))
        }
    </>
  )
}
